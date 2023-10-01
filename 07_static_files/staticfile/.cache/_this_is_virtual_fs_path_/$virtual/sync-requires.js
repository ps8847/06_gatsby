
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("E:\\My All Courses\\Gatsby\\07_static_files\\staticfile\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("E:\\My All Courses\\Gatsby\\07_static_files\\staticfile\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("E:\\My All Courses\\Gatsby\\07_static_files\\staticfile\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("E:\\My All Courses\\Gatsby\\07_static_files\\staticfile\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("E:\\My All Courses\\Gatsby\\07_static_files\\staticfile\\src\\pages\\projects.js"))
}

