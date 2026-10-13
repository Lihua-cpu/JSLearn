import { sidebar } from "vuepress-theme-hope";

import { interview } from "./interview.js";
import { interview_be } from "./interview-be.js";
import {
  ICONS,
  createImportantSection,
  createSourceCodeSection,
} from "./constants.js";


export default sidebar({
  "/interview/": interview,
  "/interview-be/": interview_be,
  // 必须放在最后面
  "/": [
    {
      text: "Java学习路线",
      icon: ICONS.TEST,
      collapsible: true,
      prefix: "java/start",
      children: [
        {
          text: "初学者的一封信",
          link: "/java/start/email",
        },
        {
          text: "Java学习路线",
          link: "/java/start/path",
        }
      ],
    },
    {
      text: "Java基础必备",
      icon: ICONS.INTERVIEW,
      collapsible: true,
      prefix: "interview-preparation/",
      children: [
      ],
    },
    {
      text: "数据库和缓存技术",
      icon: ICONS.JAVA,
      collapsible: true,
      prefix: "java/",
      children: [
      ],
    },    
  ],
});
