
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\src\\pages\\projects.js")),
  "component---src-templates-project-details-js": preferDefault(require("E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\src\\templates\\project-details.js"))
}

