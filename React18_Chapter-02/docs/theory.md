# What is [`NPM`](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)?

- [NPM](https://www.npmjs.com/) is a software registry(library) and also a package manager where we can find amazing packages written and shared by other developers to help the javascript community and it is open source and free to use.

# What is `Parcel/Webpack`? Why do we need it?

- [Parcel](https://parceljs.org/) and [Webpack](https://webpack.js.org/) are popular bundlers used to build the web apps.

- A bundler takes all the files like html, css, js, images and etc and combines them into a single package which can be used to deploy to a web server. this process is known as bundling.

- Why we need a bundler? below are few reasons why we use one
  - creates a sever for dev environment
  - file watch
  - HMR (Hot Module replacement)
  - code cleanup
  - minification
  - bundling
  - dev build and prod build
  - image optimization
  - compression
  - caching while dev
  - multi browser compatibility
  - constant hashing algo
  - auto port number for dev env

# What is `.parcel-cache`?

- this is a cache folder used by parcel for storing cache files, they contain pre-processed versions of the code and other assets that are used to speed up the build process.

- while building a build parcel will look for the cache file in `.parcel-cache` folder if available it will use them. if not available or outdated it will generate a new one.

# What is `npx`?

- `npx` is a cli tool by `npm` which runs/executes the installed packages locally or globally, without the need to globally install them on the system.

# What is difference between `dependencies` vs `devDependencies`?

`dependencies`

- dependencies are the packages which require to run the application in production.

`devDependencies`

- devDependencies are the packages which are used only to build the application in local dev environment amd testing.

# What is `Tree Shaking`?

- Tree shaking is a technique used to eliminate the unused code (dead code).
- the unused code or modules will not be included by the bundler during the build process with the help of minifiers. Webpack/Parce bundlers comes with minifiers. we can use jsMin, uglify-js and many more.
- Tree shaking will also reduce the code size.

# What is `Hot Module Replacement`?

- this is an algorithm which does the live updates of the code changes on the web app without the need of a full refresh.
- HRM works by watching the files (file watcher algorithm), if any files changes in the project it will automatically updates the browser.
- this allows for quicker development times.
