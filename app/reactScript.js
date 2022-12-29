const reactHeadring1 = React.createElement("h1", { id: "reactElement", key: "1" }, "Hello World from React");
const reactHeadring2 = React.createElement("h2", { id: "reactElement", key: "2" }, "Hello World from React again");
const contianer = React.createElement("div", {}, [reactHeadring1, reactHeadring2])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(contianer)

