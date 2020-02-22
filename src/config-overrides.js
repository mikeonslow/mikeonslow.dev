const { override, addLessLoader } = require("customize-cra");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@base-color": "#40bd84",
      "@font-size-base": "16px;",
      "@font-size-large": "20px",
      "@font-size-small": "14px",
      "@line-height-computed": "30px",
      "@line-height-large-computed": "34px",
      "@headings-font-weight": "300"
    }
  })
);
