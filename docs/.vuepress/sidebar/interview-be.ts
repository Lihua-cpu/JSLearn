import { arraySidebar } from "vuepress-theme-hope";
import { ICONS } from "./constants.js";

export const interview_be = arraySidebar([
  {
    text: "面试准备",
    icon: "mdi-account-question",
    collapsible: true,
    children: [
      { text: "1、简历准备", link: "/interview/be/preparation/resume" },
      { text: "2、自我介绍&项目话术", link: "/interview/be/preparation/self-intro" },
      { text: "3、后端项目深挖问题", link: "/interview/be/preparation/project" },
      { text: "4、面试复盘&反问面试官", link: "/interview/be/preparation/question-interviewer" },
      { text: "5、薪资谈判&Gap回答", link: "/interview/be/preparation/salary-gap" },
    ],
  },
  {
    text: "NodeJS 面试题",
    icon: "mdi-language-javascript",
    collapsible: true,
    children: [
      {
        text: "NodeJS基础",
        collapsible: true,
        children: [
          { text: "说明", link: "/interview/be/nodejs/intro" },
          { text: "一、Node运行机制", link: "/interview/be/nodejs/runtime" },
          { text: "二、模块系统 CommonJS & ESM", link: "/interview/be/nodejs/module" },
          { text: "三、事件循环", link: "/interview/be/nodejs/eventloop" },
          { text: "四、Buffer & Stream", link: "/interview/be/nodejs/stream-buffer" },
          { text: "五、文件系统fs", link: "/interview/be/nodejs/fs" },
        ],
      },
      {
        text: "NodeJS高级",
        collapsible: true,
        children: [
          { text: "说明", link: "/interview/be/node-advanced/intro" },
          { text: "一、进程与线程", link: "/interview/be/node-advanced/process-thread" },
          { text: "二、内存管理与GC", link: "/interview/be/node-advanced/memory" },
          { text: "三、Cluster多进程", link: "/interview/be/node-advanced/cluster" },
          { text: "四、异步编程模型", link: "/interview/be/node-advanced/async" },
          { text: "五、手写Node真题", link: "/interview/be/node-advanced/write-code" },
        ],
      }
    ],
  },
  {
    text: "Web服务框架",
    icon: "mdi-server",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/framework/intro" },
      { text: "一、Express", link: "/interview/be/framework/express" },
      { text: "二、Koa", link: "/interview/be/framework/koa" },
      { text: "三、NestJS", link: "/interview/be/framework/nestjs" },
      { text: "四、Midway", link: "/interview/be/framework/midway" },
    ],
  },
  {
    text: "计算机基础面试题",
    icon: "mdi-laptop",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/cs/intro" },
      { text: "一、计算机网络", link: "/interview/be/cs/network" },
      { text: "二、HTTP/HTTPS协议", link: "/interview/be/cs/http" },
      { text: "三、操作系统", link: "/interview/be/cs/os" },
    ],
  },
  {
    text: "数据库面试题",
    icon: "mdi-database",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/db/intro" },
      { text: "一、MySQL", link: "/interview/be/db/mysql" },
      { text: "二、Redis", link: "/interview/be/db/redis" },
      { text: "三、MongoDB", link: "/interview/be/db/mongodb" },
    ],
  },
  {
    text: "中间件",
    icon: "mdi-pipe",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/mq/intro" },
      { text: "一、RabbitMQ", link: "/interview/be/mq/rabbitmq" },
      { text: "二、Kafka", link: "/interview/be/mq/kafka" },
      { text: "三、Elasticsearch", link: "/interview/be/mq/es" },
    ],
  },
  {
    text: "源码剖析",
    icon: "mdi-code-braces",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/source/intro" },
      { text: "一、Koa源码", link: "/interview/be/source/koa" },
      { text: "二、Express源码", link: "/interview/be/source/express" },
      { text: "三、Node核心模块源码", link: "/interview/be/source/node-core" },
    ],
  },
  {
    text: "服务部署 & 运维",
    icon: "mdi-server-network",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/deploy/intro" },
      { text: "一、Linux常用命令", link: "/interview/be/deploy/linux" },
      { text: "二、Docker", link: "/interview/be/deploy/docker" },
      { text: "三、Nginx", link: "/interview/be/deploy/nginx" },
      { text: "四、日志与监控", link: "/interview/be/deploy/monitor" },
    ],
  },
  {
    text: "性能优化",
    icon: "mdi-speedometer",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/performance/intro" },
      { text: "一、服务性能调优", link: "/interview/be/performance/server" },
      { text: "二、数据库优化", link: "/interview/be/performance/db" },
      { text: "三、缓存策略", link: "/interview/be/performance/cache" },
    ],
  },
  {
    text: "后端安全",
    icon: "mdi-shield",
    collapsible: true,
    children: [
      { text: "说明", link: "/interview/be/security/intro" },
      { text: "一、鉴权与认证", link: "/interview/be/security/auth" },
      { text: "二、SQL注入", link: "/interview/be/security/sql-inject" },
      { text: "三、接口安全", link: "/interview/be/security/api" },
      { text: "四、防刷限流", link: "/interview/be/security/rate-limit" },
    ],
  },
]);


