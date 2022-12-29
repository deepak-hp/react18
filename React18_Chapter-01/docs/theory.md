# What is [Emmet](https://docs.emmet.io/)?

- Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow.

- Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation.

- Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.

- Here’s an example,

```sh
#page>div.logo+ul#navigation>li*5>a{Item $}
```

...can be transformed into

```sh
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

# Difference between a [Library and Framework](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)?

- Both frameworks and libraries are code written by someone else that is used to help solve common problems.

- A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.

- A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

- A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.

# What is [CDN](https://www.youtube.com/watch?v=Bsq5cKkS33I)? [Why](https://gtmetrix.com/why-use-a-cdn.html) do we use it?

- A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed.

- By caching content physically close to where a user is and reducing the distance it has to travel, latency is reduced. This process also decreases stress on origin servers by distributing the load geographically across multiple servers.

![CDN example image](https://gtmetrix.com/blog/wp-content/uploads/2017/02/cdn-region-specific.png)

# Why is [React known as React](https://www.youtube.com/watch?v=dpw9EHDh2bM&t=3455s)?

- [React](https://qr.ae/prnazO) was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.

- React library takes a UI and splits it into independent units called components.

- The types and props of the components can describe how the UI looks and behaves.

# What is [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) in script tag?

- The crossorigin attribute, valid on the `<audio>, <img>, <link>, <script>, and <video>` elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. Depending on the element, the attribute can be a CORS settings attribute.
