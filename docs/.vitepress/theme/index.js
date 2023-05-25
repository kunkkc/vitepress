import { h } from "vue";

import { useData } from "vitepress";
import Theme from "vitepress/theme";

// import Antd from "ant-design-vue";

export default Object.assign({}, Theme, {
  // extends: Antd,
  // enhanceApp(ctx) {
  //   // register your custom global components
  //   ctx.app.component(Antd /* ... */);
  // },
  Layout: () => {
    const props = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(Theme.Layout, props);
  },
});
