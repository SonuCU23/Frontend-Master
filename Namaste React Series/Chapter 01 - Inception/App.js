/**
 * 
 *  <div id = "parent">
 *      <div id = "child">
 *          <h1> I'm h1 tag </h1>
 *          <h2> I'm h2 tag </h2>
 *      </div>
 *      <div id = "child2">
 *          <h1> I'm h1 tag </h1>
 *          <h2> I'm h2 tag </h2>
 *      </div>
 *  </div>
 * 
 *  React.createElement => ReactElement(object) => HTML
 * 
 */


const parent = React.createElement(
    "div",
    {id : "parent"},
    [React.createElement(
        "div",
        {id : "child1"},
        [
            React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag"),
        ]
    ),React.createElement(
        "div",
        {id : "child1"},
        [
            React.createElement("h1", {}, "I'm h1 tag"),
            React.createElement("h2", {}, "I'm h2 tag"),
        ]
    )]
);

// We can pass multiple children in React.creatElement in an array.


const heading = React.createElement(
    "h1", 
    {id: "heading", xyz : "abc"}, 
    "Namaste React!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// The philosophy of React is manipulating the DOM using javascript