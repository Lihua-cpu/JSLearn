import { arraySidebar } from "vuepress-theme-hope";
import { ICONS } from "./constants.js";

export const interview = arraySidebar([
  {
    text: "面试准备",
    icon: ICONS.INTERVIEW,
    collapsible: true,
    children: [
      { text: "1、简历准备", link: "/interview/preparation/resume" },
      { text: "2、自我介绍&简历话术", link: "/interview/preparation/self-intro" },
      { text: "3、项目深挖高频问题", link: "/interview/preparation/project" },
      { text: "4、面试复盘&反问面试官", link: "/interview/preparation/question-interviewer" },
      { text: "5、薪资谈判&离职Gap回答", link: "/interview/preparation/salary-gap" },
    ],
  },
  {
    text: "JS 面试题",
    icon: ICONS.JS_BASE,
    collapsible: true,
    children: [
      {
        text: "JS基础",
        collapsible: true,
        children: [
          { text: "说明", link: "/interview/js/intro" },
          { text: "一、变量、数据类型", link: "/interview/js/type" },
          { text: "二、函数、this、闭包", link: "/interview/js/function" },
          { text: "三、原型与原型链", link: "/interview/js/prototype" },
          { text: "四、数组常用API", link: "/interview/js/array" },
          { text: "五、ES6+语法", link: "/interview/js/es6" },
        ],  
      },
      {
        text: "JS高级",
        collapsible: true,
        children: [
          { text: "说明", link: "/interview/js-advanced/intro" },
          { text: "一、事件循环", link: "/interview/js-advanced/eventloop" },
          { text: "二、内存管理与GC", link: "/interview/js-advanced/memory" },
          { text: "三、异步方案演进", link: "/interview/js-advanced/async" },
          { text: "四、手写JS真题", link: "/interview/js-advanced/write" },
          { text: "五、Web API", link: "/interview/js-advanced/webapi" },
        ],  
      }
    ],
  },
  {
    text: "TS 面试题",
    icon: ICONS.TS,
    collapsible: true,
    children: [
    
    ],
  },
  {
    text: "CSS面试题",
    icon: ICONS.CSS,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/css/intro" },
      { text: "一、CSS基础", link: "/interview/css/base" },
      { text: "二、布局方案", link: "/interview/css/layout" },
      { text: "三、定位", link: "/interview/css/position" },
      { text: "四、CSS3新特性", link: "/interview/css/css3" },
      { text: "五、移动端CSS", link: "/interview/css/mobile" },
    ],
  },
  {
    text: "计算机基础面试题",
    icon: ICONS.COMPUTER,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/cs/intro" },
      { text: "一、计算机网络", link: "/interview/cs/network" },
      { text: "二、浏览器原理", link: "/interview/cs/browser" },
      { text: "三、操作系统基础", link: "/interview/cs/os" },
    ],
  },
  {
    text: "前端框架",
    icon: ICONS.FRAMEWORK,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/framework/intro" },
      { text: "一、Vue", link: "/interview/framework/vue" },
      { text: "二、React", link: "/interview/framework/react" },
      { text: "三、其他框架", link: "/interview/framework/other" },
    ],
  },
  {
    text: "前端工程化",
    icon: ICONS.ENGINEERING,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/engineering/intro" },
      { text: "一、Webpack", link: "/interview/engineering/webpack" },
      { text: "二、Vite", link: "/interview/engineering/vite" },
      { text: "三、Git", link: "/interview/engineering/git" },
      { text: "四、npm包管理", link: "/interview/engineering/npm" },
      { text: "五、ESLint、Prettier", link: "/interview/engineering/lint" },
    ],
  },
  {
    text: "源码剖析",
    icon: ICONS.SOURCE,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/source/intro" },
      { text: "一、Vue源码", link: "/interview/source/vue" },
      { text: "二、React源码", link: "/interview/source/react" },
      { text: "三、Promise源码", link: "/interview/source/promise" },
      { text: "四、工具库源码", link: "/interview/source/lib" },
    ],
  },
  {
    text: "移动端 & 跨端",
    icon: ICONS.MOBILE,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/mobile/intro" },
      { text: "一、移动端适配", link: "/interview/mobile/adapt" },
      { text: "二、跨端方案", link: "/interview/mobile/cross" },
      { text: "三、小程序", link: "/interview/mobile/mp" },
    ],
  },
  {
    text: "性能优化",
    icon: ICONS.PERFORMANCE,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/performance/intro" },
      { text: "一、加载优化", link: "/interview/performance/load" },
      { text: "二、渲染优化", link: "/interview/performance/render" },
      { text: "三、JS执行优化", link: "/interview/performance/js" },
      { text: "四、监控埋点", link: "/interview/performance/monitor" },
    ],
  },
  {
    text: "前端安全",
    icon: ICONS.SECURITY,
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/security/intro" },
      { text: "一、XSS攻击", link: "/interview/security/xss" },
      { text: "二、CSRF攻击", link: "/interview/security/csrf" },
      { text: "三、CSP", link: "/interview/security/csp" },
      { text: "四、其他安全手段", link: "/interview/security/other" },
    ],
  },
]);

