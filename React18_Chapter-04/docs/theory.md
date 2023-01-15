# [Is JSX mandatory for React ?](https://reactjs.org/docs/react-without-jsx.html)

- No, but JSX makes React create element much easier and fast, and easy to maintain as well.

# [is ES6 mandatory for React](https://medium.com/@rashmishehana_48965/must-know-es6-features-for-react-97ad57468623) ?

- No, but all the latest React applications rely on ES6 and some of the most commonly used es6 features are classes, arrow functions, rest and spread operator, template string, promises, async and await and import exports

# `{TitleComponent}` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>` in JSX.

- `{TitleComponent}`: This is a javascript variable which contains react elements, {} can embed a js expression or a variable or react elements inside it.

- `<TitleComponent/>`: This is a self closing react component AKA, a javascript function which returns JSX.

- `<TitleComponent></TitleComponent>`: This is similar to the above one but this can have children elements or components.

ex:

```
<AppContainer>
  <Header/>
  <Sections/>
  <Footer/>
</AppContainer>
```

# How to write a comment in JSX?

`{/* */}` is used for both single and multiline comment in JSX
ex:

- `{/* <div>This element is commented</div> */}`
- ```{/* <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
    <li>Cart</li> */}
  ```

# [What is `<React.Fragment></React.Fragment>` and `<></>`](https://refine.dev/blog/how-react-fragments-is-works/)?

- this is a feature from react which allow us to return multiple elements from a react component by allowing us to group a list of children without adding extra nodes to the DOM.

`<></>` is a shorthand version of `<React.Fragment></React.Fragment>`

some of the advantages of `<React.Fragment></React.Fragment>`

- The code readability of React Fragment is higher.
- Because React fragments have a smaller DOM, they render faster and use less memory.
- React Fragment allows React components to be rendered as intended without causing any parent-child relationship issues.

NOTE: `key` is the only attribute or prop that can be passed to Fragment.

ex:

```
<React.Fragment>
  <div></div>
  <div></div>
  <div></div>
</React.Fragment>
```

or

```
<>
  <div></div>
  <div></div>
  <div></div>
</>
```

# Can we use React.Fragment inside React.Fragment?

- yes we can! i tried it.

```
export default function App() {
  return (
    <div>
      <>
        <h1>inside react fragment</h1>
        <>
          <h2>react fragment inside react fragment</h2>
        </>
        <h1>Hello CodeSandbox</h1>
      </>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

# [What is `Reconciliation` in React](https://blog.greenroots.info/reactjs-virtual-dom-and-reconciliation-explain-like-im-five)?

- `Reconciliation` is the process to differentiate one tree with another to determine which parts need to be changed and then update the original DOM. React now uses a new reconciliation engine called as `React Fiber` since version 16.0.
- In React for every DOM object, there will be a corresponding in-memory copy created. This is called the `Virtual DOM(VDOM)`. Each of the nodes of the Virtual DOM represents an element.
- The diffing algorithm will compare the current VDOM tree with its previous version and then updates the actual DOM with the difference.
- The flow,

  - First, react creates a copy of the original DOM, calling it VDOM. each of the node of the VDOM represents an element.

  - Next, if there is a state update of an element, a new Virtual DOM is created.

  - The diffing algorithm identifies the difference of the change. ex: a subtree from the changed node has been identified as the diff.

  - Last, the react runs a batch update to update the original DOM with these changes tp keep in sync.

# What is `React Fiber`?

- `React fiber` is a re-implementation of the react `reconciler`. `react's core algorithm`
- this is the default reconciler for the React 16 and above.
- this is used to render a system faster and smoother and smarter.
- since it is asynchronous,
  - Pause, resume, and restart rendering work on components as new updates come in
  - Split work into chunks and prioritize tasks based on importance
  - Reuse previously completed work and even abort it if not needed

# Why do we need `key` in React?

- A `key` is a special string attribute to be included while creating list of elements in react.
- `keys` are used in react to identify which element in the list are changed, updated or deleted.

ex:

```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```

# Can we use `index as keys` in React?

- yes we can use `index as key` in react, but it is not recommended by react because the order of items may change.
- using key as index can negatively impact the performance of react.

# What is `props` in React?

- `props` or properties are nothing but arguments which are used to pass data between the parent component to its children components.

ex: `<List data={someList} setData={setSomeList} /> //data and setData are props`

# What is `Config Driven UI`?

- the UI which renders based on config is know as config driven ui.
- this is mainly used to make the app more dynamic.
- reduces development time and cost.
- conditional rendering of the UI.
- separation of concerns (modules which is not dependent on other modules)

# [Difference between Virtual DOM and Real DOM?](https://medium.com/devinder/react-virtual-dom-vs-real-dom-23749ff7adc9)

#### `DOM`,

- Document object model is an abstraction of a page in HTML structure.
- it takes HTML elements and wraps them in an object with a tree structure.

### `Virtual DOM`,

- this is a light-weight abstraction of the DOM.
- copy of the DOM, that can be updated without affecting the actual DOM.
