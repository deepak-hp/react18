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
