// Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
const data = [
{
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development" },

{
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live" },
{
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development" },

{
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live" },
{
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development" },

{
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live" }];



function Layout(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "row" }, props.children));

}

class Card extends React.Component {
  render() {
    const style = {
      img: {
        maxWidth: "400px" } };


    return /*#__PURE__*/(
      React.createElement("div", { className: "col m4" }, /*#__PURE__*/
      React.createElement("div", { className: "card hoverable" }, /*#__PURE__*/
      React.createElement("div", { className: "card-image waves-effect waves-block waves-light" }, /*#__PURE__*/
      React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })), /*#__PURE__*/

      React.createElement("div", { className: "card-content" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(StackIcons, { data: this.props.data.stack })), /*#__PURE__*/

      React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
      this.props.data.project, /*#__PURE__*/
      React.createElement("i", { className: "material-icons right" }, "more_vert")), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("a", { href: this.props.data.website }, "Website")), /*#__PURE__*/
      React.createElement("span", null, /*#__PURE__*/React.createElement("a", { className: "github", href: this.props.data.github }, "Github")))), /*#__PURE__*/


      React.createElement("div", { className: "card-reveal" }, /*#__PURE__*/
      React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project, /*#__PURE__*/React.createElement("i", { className: "material-icons right" }, "close")), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/React.createElement("span", { className: "status" }, this.props.data.status)), /*#__PURE__*/
      React.createElement("p", null, this.props.data.description), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Need:")), /*#__PURE__*/
      React.createElement("p", null, this.props.data.needs)))));




  }}


// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  const array = props.data;
  const icons = array.map(item => {
    return /*#__PURE__*/(
      React.createElement("div", { key: item, className: "icon" }, /*#__PURE__*/
      React.createElement("span", { className: item }, /*#__PURE__*/React.createElement("span", null))));


  });
  return /*#__PURE__*/(
    React.createElement("div", null, " ", icons, " "));

}

function Projects(props) {
  const projects = [];
  const data = props.data;
  data.forEach(item => {projects.push( /*#__PURE__*/React.createElement(Card, { data: item }));});
  return /*#__PURE__*/(
    React.createElement("div", null, projects));

}

ReactDOM.render( /*#__PURE__*/
React.createElement(Layout, { children: /*#__PURE__*/React.createElement(Projects, { data: data }) }),
document.getElementById('root'));