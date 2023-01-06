import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const p = React.createElement('p', { className: "desc" }, "nested heading using React.createElement");
const h1 = React.createElement('h1', { className: "title" }, "this is h1");
const h2 = React.createElement('h2', { className: "title" }, "this is h2");
const h3 = React.createElement('h3', { className: "title" }, "this is h3");

const nestedHeader = React.createElement('div', { className: "nestedHeader" }, [p, h1, h2, h3]);

const nestedHeaderJSX = <div>
    <p>nested headings using JSX</p>
    <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
</div>

const NestedHeaderComponent = ({ desc, ...rest }) => {
    return (
        <div {...rest}>
            <p>{desc}</p>
            <h1 className="title">heading 1</h1>
            <h2 className="title">heading 2</h2>
            <h3 className="title">heading 3</h3>
            <AdditionalInfo className="title">heading 4 "from component composition"</AdditionalInfo>
        </div>
    )
}

const AdditionalInfo = ({ children }) => {
    return (
        <h4>{children}</h4>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    {nestedHeader}
    {nestedHeaderJSX}
    <NestedHeaderComponent desc="nested headings using JSX" id="functional" />
    <App />
</>
)
