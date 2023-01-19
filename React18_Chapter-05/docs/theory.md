# [What is the difference between Named Export, Default export and \* as export?](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)

### `Named Export`:

- We can have multiple exports per file.
- To import specific exports they want to be enclosed within braces.
- The name of the imported module has to be the same as the exported one

ex:

##### file_1.js

- Exports from `file_1.js`

```js
export const fn = () => {
  // named export of fn
};

export const anotherFn = () => {
  // named export of fn
};
```

##### file_2.js

- Imports from `file_1.js`

```js
//single import
import { fn, anotherFn } from "./file_1.js"

// multiple import
import { fn, anotherFn } from "./file_1.js"

// Named import aliasing (importing a named export with a different name using `as` keyword)
import { anotherFn as aFn } from "./file_1.js

```

### `\* as`:

- Import all the named export onto an object.
  ex:
  import \* as Menu from "./MenuComponent";

```jsx
<Menu.Container>
  <Menu.Item />
  <Menu.Item />
  <Menu.Item />
</Menu.Container>
```

### `Default Export`:

- Only one default export per file. while importing we have to specify a name.

ex:

##### file_1.js

- Default Export from `file_1.js`

```js
const fn = () => {
  // named export of fn
};

export default fn;
```

##### file_2.js

- import the module with any name you wish.

```js
import addFn from './file_1.js';
```

# What is the importance of a config.js file?

- mainly used to store Hardcoded data such as constant values, message strings.
- we can easily access and modify the information from a single place.
  ex: API Base URL, CDN links, backend configs, aliasing paths, constants and default values used by the app.

# What are React Hooks?

- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
- In React 16+, hooks are introduced where we can maintain state and other react features using hooks.
- React provides standard set of built-in hooks like,
  - useState()
  - useEffect()
  - useRef()
  - useContext()
  - useReducer()
  - useCallback()
  - useMemo(), and others

# Why do we need useState() hook?

- useState() hook allows us to track state in a functional component.
- useState is the ability to encapsulate local state in a function component.
- useState() takes initial state `useState("hello")` and returns 2 entries as an array
  ex: `const [initialValue, setInitialValue] = useState("hello");`
- the first entry is the initial state value, the second one is a function that can be use to change the state value.

ex:

```js
import React, { useState } from 'react';

const [state, setState] = useState('hello react');
```
