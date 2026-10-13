import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "前端学习手册", icon: "mdi:language-java", link: "/front-end/" },
  { text: "面试资料", icon: "mdi:book-open-page-variant-outline", link: "/interview/" },
  { text: "nodejs后端面试资料", icon: "mdi:book-open-page-variant-outline", link: "/interview-be/" },
  {
    text: "网站相关",
    icon: "mdi:information-outline",
    children: [
      {
        text: "关于作者",
        icon: "mdi:account-edit-outline",
        link: "/leonLearn/me",
      },
      {
        text: "更新历史",
        icon: "mdi:history",
        link: "/timeline/",
      },
    ],
  },
]);
