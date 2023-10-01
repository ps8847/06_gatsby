"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 1141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\node_modules\\react\\index.js"
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_ = __webpack_require__(5522);
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/Components/Navbar.js
function Navbar(){const data=(0,gatsby_browser_entry.useStaticQuery)("4042487451");const{title}=data.site.siteMetadata;return/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("nav",null,/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h1",null,title),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:"links"},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"Home"),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about"},"About"),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects"},"Portfolio Projects")));}
;// CONCATENATED MODULE: ./src/Components/Layout.js
function Layout({children}){return/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:"layout"},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(Navbar,null),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:"content"},children));}

/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects)
});

// EXTERNAL MODULE: external "E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\node_modules\\react\\index.js"
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_ = __webpack_require__(5522);
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/Components/Layout.js + 1 modules
var Layout = __webpack_require__(1141);
// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(6162);
;// CONCATENATED MODULE: ./src/styles/projects.module.css
// Exports
var portfolio = "projects-module--portfolio--73c96";
var projectscss = "projects-module--projectscss--2fe78";

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/pages/projects.js
function projects({data}){console.log(data);let projects=data.projects.nodes;let contact=data.contact.siteMetadata.contact;return/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:portfolio},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h2",null,"Portfolio"),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h3",null,"Projects & Websites I've Created"),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:projectscss},projects.map(project=>/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/projects/"+project.frontmatter.slug,key:project.id},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",null,/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_image/* default */.Z,{fluid:project.frontmatter.thumb.childImageSharp.fluid}),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h3",null,project.frontmatter.title),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("p",null,project.frontmatter.stack))))),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("p",null,"Like what you see? Email me at ",contact," for a query")));}const query="4044476982";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-js.js.map