Setting up a React testing library

install @testing-library/react and jest

- react testing library uses jest internally
- jest is a testing framework for javascript

configuring Jest

- `npx jest --init`, select the options according to your project needs
- after selecting the options `jest.config.js` fill will be created

Run tests

- configure the script in package.json ex: `test: jest`,
- command to run the test is `npm run test` for the above example

now, if you try to run the test you might get and error saying `Test environment jest-environment-jsdom cannot be found.`
This is because Jest 28 and above versions are not longer ship the `jest-environment-jsdom` by default so we have to install it manually.

- to install use the command `npm install jest-environment-jsdom -D`.

Now, Create your first test,

- under the components folder lets create a new folder naming `__tests__`
- now we can crate test files by naming them as `**.test.js or **.spec.js`

if you want to include module type (import and export) we have to include babel for jest

so lets configure babel for jest, `npm i -D babel-jest @babel/core @babel/preset-env`

now create `babel.config.js` or `.bebelrc` and add the below
`.babelrc` - `{
    "presets": [["babel/preset-env",{ "targets": { "node": "current" } }]]
}`

`babel.config.js` - `module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};`

NOTE: we can put `/coverage` in .gitignore to ignore the coverage folder

Now to added JSX in the tests we need to add one more babel preset `@bable/preset-react`

`npm i @babel/preset-react` to install the preset and add the preset to the babel.config.js under the presets: [] like below,

`['@babel/preset-react', { runtime: "automatic" }]`

Jest wont understand PNG or other formats apart from js so we need to mock images and other things so to moke we need to add a config in `jest.config.js`

config: `moduleNameMapper: { "\\.(png|jpg|jpeg)$" : "../mocks/dummyLogo.js", }`
