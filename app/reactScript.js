const reactHeadring1 = React.createElement("h1", { id: "reactElement" }, "Hello World from React");
const reactHeadring2 = React.createElement("h2", { id: "reactElement" }, "Hello World from React again");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([reactHeadring1, reactHeadring2])

