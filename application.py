import datetime
import io
import json
import os

from flask import Flask, render_template, request, redirect, Response, send_file, abort

application = Flask(__name__)

try:
    application.config['GA_TRACKING_ID'] = os.environ['GA_TRACKING_ID']
except:
    print('Tracking ID not set')


@application.route('/')
def index():
    age = int((datetime.date.today() - datetime.date(1992, 3, 4)).days / 365)
    return render_template('home.html', age=age)


@application.route('/projects')
def projects():
    data = get_static_json("static/projects/luke_projects.json")['projects']
    data.sort(key=order_projects_by_weight, reverse=True)
    return render_template('projects.html',  projects=data)


@application.route('/acknowledgements')
def acknowledgements():
    data = get_static_json(
        "static/projects/acknowledgements.json")['acknowledgements']
    data.sort(key=order_projects_by_weight, reverse=True)
    return render_template('acknowledgements.html',  acknowledgements=data)


@application.route('/blog')
def blog():
    return redirect("http://www.aPaperADay.com/", code=302)


def order_projects_by_weight(projects):
    try:
        return int(projects['weight'])
    except KeyError:
        return 0


@application.route('/resume')
def resume():
    data = {"name": "Luke Thomas Résumé",
            "pdf_link": "/static/pdfs/resume.pdf"}
    return render_template('pdf.html', project=data)


@application.route('/publish/<pdf>')
def pdf(pdf):
    data = get_static_json("static/projects/luke_projects.json")['projects']
    current = None
    for project in data:
        if project['link'] == 'publish/' + pdf:
            current = project
            break

    if current is None:
        return render_template('404.html', data=pdf)
    else:
        return render_template('pdf.html', project=current)


@application.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


def get_static_file(path):
    site_root = os.path.realpath(os.path.dirname(__file__))
    return os.path.join(site_root, path)


def get_static_json(path):
    return json.load(open(get_static_file(path)))


if __name__ == "__main__":
    print("running py app")
    application.run(host="127.0.0.1", port=5000, debug=True)
