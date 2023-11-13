// Creating a React element

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste Everyone!"
); // --> The object is used for providing attributes, in React these are called props

console.log(heading); // --> It'll give an object, cause React element is nothing but an object

//Using ReactDOM to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing a React element to the root

// root.render(heading)

//Creating multiple elements and render in a div, like in the div "container"

const heading1 = React.createElement(
  "h1",
  {
    id: "title11",
  },
  "Heading1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading12"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "title3",
  },
  "Heading3"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
); // --> We use a array to pass multiple child

root.render(container);
