
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("E:\\My All Courses\\Gatsby\\11_source_plugins\\relatedFolder\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("E:\\My All Courses\\Gatsby\\11_source_plugins\\relatedFolder\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("E:\\My All Courses\\Gatsby\\11_source_plugins\\relatedFolder\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("E:\\My All Courses\\Gatsby\\11_source_plugins\\relatedFolder\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("E:\\My All Courses\\Gatsby\\11_source_plugins\\relatedFolder\\src\\pages\\projects.js"))
}

