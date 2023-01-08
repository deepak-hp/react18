# What is JSX?

- JSX (Javascript Syntax Expression) which helps us write HTML and javascript together in react.
  ex: `const jsx = <h1 id="jsx">This is JSX</h1>`

- the browser will not understand the above jsx because it is not a valid javascript code. because we are assigning an HTML tag to a variable that is not a string but just HTML code.

- to make the browser understand we have to use a compiler/transpiler which converts the JXS into javascript object, most popular tool is Babel.

- when babel executes the above JSX, it will convert the JSX into React.createElement() `const jsx = React.createElement("h1",null,"This is JSX");` which then returns an object.

```
{
    type: "h1",
    props: {
        id: "jsx,
        children: "This is JSX"
    }
}
```
