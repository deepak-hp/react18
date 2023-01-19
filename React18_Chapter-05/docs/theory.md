# [What is the difference between Named Export, Default export and \* as export](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)?

### Named Export:

- We can have multiple exports per file.
- To import specific exports they want to be enclosed within braces.
- The name of the imported module has to be the same as the exported one

ex:

##### file_1.js

- Exports from `file_1.js`

```
export const fn = () => {
// named export of fn
}

export const anotherFn = () => {
// named export of fn
}
```

##### file_2.js

- Imports from `file_1.js`

```
//single import
import { fn, anotherFn } from "./file_1.js"

// multiple import
import { fn, anotherFn } from "./file_1.js"

// Named import aliasing (importing a named export with a different name using `as` keyword)
import { anotherFn as aFn } from "./file_1.js

```

### \* as:

- Import all the named export onto an object.
  ex:
  import \* as Menu from "./MenuComponent";

```
<Menu.Container>
    <Menu.Item/>
    <Menu.Item/>
    <Menu.Item/>
</Menu.Container>
```

### Default Export:

- Only one default export per file. while importing we have to specify a name.

ex:

##### file_1.js

- Default Export from `file_1.js`

```
const fn = () => {
// named export of fn
}

export default fn;
```

##### file_2.js

```
import addFn from "./file_1.js";
```

-
