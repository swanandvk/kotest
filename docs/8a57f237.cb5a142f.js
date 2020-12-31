(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{134:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||l;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},189:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/allure-a95d026b3e0d686c7eb9f32e3f0eb2b8.png"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),l=(r(0),r(134)),o={},i={unversionedId:"framework/extensions/allure",id:"framework/extensions/allure",isDocsHomePage:!1,title:"allure",description:"Allure",source:"@site/docs/framework/extensions/allure.md",slug:"/framework/extensions/allure",permalink:"/docs/framework/extensions/allure",editUrl:"https://github.com/kotest/kotest/docs/framework/extensions/allure.md",version:"current"},c=[{value:"Collect Data",id:"collect-data",children:[]},{value:"Gradle Plugin",id:"gradle-plugin",children:[]},{value:"Setting Build Dir",id:"setting-build-dir",children:[]},{value:"Final Report",id:"final-report",children:[]}],u={rightToc:c};function s(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"allure"},"Allure"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://allure.qatools.ru"}),"Allure")," is an open-source framework designed for detailed and interactive test reports.\nIt works by generating report files which are then used to create the final HTML report.\nYou can think of it as like the traditional junit report but more advanced and detailed."),Object(l.b)("p",null,"There are two steps to allure. The first is to generate the raw data when executing tests, the second is to\ncompile that data into the interactive HTML report."),Object(l.b)("h3",{id:"collect-data"},"Collect Data"),Object(l.b)("p",null,"Allure has data collectors for most test frameworks, and Kotest is no different. In order\nto activate allure for kotest, you first need to add the module ",Object(l.b)("inlineCode",{parentName:"p"},"kotest-extensions-allure")," to your build."),Object(l.b)("p",null,"Next, wire in the ",Object(l.b)("inlineCode",{parentName:"p"},"AllureTestReporter")," class globally using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyConfig : AbstractProjectConfig {\n    override fun listeners() = listOf(AllureTestReporter())\n}\n")),Object(l.b)("p",null,"Now, whenever tests are executed, Kotest will write out test data in the allure json format."),Object(l.b)("h3",{id:"gradle-plugin"},"Gradle Plugin"),Object(l.b)("p",null,"Now that the tests have completed, we can compile them into the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.qameta.io/allure/#_report_generation"}),"final report"),"."),Object(l.b)("p",null,"This can be done manually using the allure binary, or we can use the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/allure-framework/allure-gradle"}),"allure gradle plugin"),".\nTo use the gradle plugin, first add the plugin to your build's plugins block."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'plugins {\n   ...\n   id("io.qameta.allure") version "2.8.1"\n}\n')),Object(l.b)("p",null,"Next, add an allure configuration section to set the version and disable autoconfigure (because allure can only auto configure junit and kotest takes care of this for you anyway)."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'allure {\n   autoconfigure = false\n   version = "2.13.1"\n}\n')),Object(l.b)("p",null,"Finally, execute the gradle task ",Object(l.b)("inlineCode",{parentName:"p"},"allureReport")," and the report will be generated in ",Object(l.b)("inlineCode",{parentName:"p"},"./build/reports/allure-report")," and inside  you should find the index.html entry point for the report."),Object(l.b)("h3",{id:"setting-build-dir"},"Setting Build Dir"),Object(l.b)("p",null,"If you are not using the gradle plugin then you will need to inform Allure where the build dir is by setting the ",Object(l.b)("inlineCode",{parentName:"p"},"allure.results.directory")," system property on your tests configuration. If you are using the gradle plugin, then this can be skipped as the gradle plugin does this for you."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'tasks.named<Test>("test") { // or "jvmTest" etc\n   useJUnitPlatform()\n   systemProperty("allure.results.directory", project.buildDir.toString() + "/allure-results")\n}\n')),Object(l.b)("h3",{id:"final-report"},"Final Report"),Object(l.b)("p",null,"If all was successful, after test execution and report generation, you will see something like this:"),Object(l.b)("p",null,Object(l.b)("img",{alt:"allure screenshot",src:r(189).default})))}s.isMDXComponent=!0}}]);