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
