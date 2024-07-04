# wsgi.py

import os
import sys
import site

# Add the site-packages of the virtualenv
site.addsitedir(os.path.join(os.path.dirname(__file__), 'venv', 'lib', 'python3.8', 'site-packages'))

# Add the app directory to the sys.path
sys.path.insert(0, os.path.dirname(__file__))

# Set the application object
from application import application as app
