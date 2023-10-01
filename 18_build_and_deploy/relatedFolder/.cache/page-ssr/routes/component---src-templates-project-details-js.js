"use strict";
exports.id = 494;
exports.ids = [494];
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

/***/ 4745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectDetails)
});

// EXTERNAL MODULE: external "E:\\My All Courses\\Gatsby\\18_build_and_deploy\\relatedFolder\\node_modules\\react\\index.js"
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_ = __webpack_require__(5522);
var external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/Components/Layout.js + 1 modules
var Layout = __webpack_require__(1141);
// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(6162);
;// CONCATENATED MODULE: ./src/styles/project-details.module.css
// Exports
var details = "project-details-module--details--54a3b";
var html = "project-details-module--html--56803";
var featured = "project-details-module--featured--b7e47";

;// CONCATENATED MODULE: ./src/templates/project-details.js
function ProjectDetails({data}){return/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:details},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h2",null,data.markdownRemark.frontmatter.title),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("h3",null,data.markdownRemark.frontmatter.stack),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:featured},/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement(gatsby_image/* default */.Z,{fluid:data.markdownRemark.frontmatter.featuredImg.childImageSharp.fluid})),/*#__PURE__*/external_E_My_All_Courses_Gatsby_18_build_and_deploy_relatedFolder_node_modules_react_index_js_default().createElement("div",{className:html,dangerouslySetInnerHTML:{__html:data.markdownRemark.html}})));}const query="471018458";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-project-details-js.js.map