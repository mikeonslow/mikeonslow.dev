require("babel-register");

// const router = require("./router").default;
const Sitemap = require("./node_modules/react-router-sitemap").default;

new Sitemap([
  {
    path: "/"
  },
  {
    path: "/projects"
  },
  {
    path: "/events_and_groups"
  }
])
  .build("https://mikeonslow.dev")
  .save("./sitemap.xml");
