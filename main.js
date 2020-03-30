const Vue = require("vue/dist/vue.esm").default;

Vue.component("name-form", {
  template: `
    <h1>Hello, World</h1>
  `
});

new Vue({ el: "#content" });
