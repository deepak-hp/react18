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

# What are the Advantages of JSX in React (superpowers of JSX)?

- Simplicity of code
- Faster than normal Javascript (optimized translation into regular javascript)
- Easy to debug
- Easy to use if one knows HTML

# Role of `type` attribute in script tag? What options can I use there?

- This indicates the type of script represented by the element.

```
<script type="text/javascript">
    const root = document.getElementById("root");
</script>
```

- options
  - "text/javascript" is a classic script,
  - "module" javascript module(es6)
  - "application/ecmascript"
  - other [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml)
