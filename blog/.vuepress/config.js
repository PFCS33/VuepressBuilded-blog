module.exports = {
  title: "pfcs", // Title for the site. This will be displayed in the navbar.
  description: "Tech blog of pfcs, mainly about my CS study",
  //theme: "@vuepress/theme-blog",
  head: [
    [
      "meta",
      {
        name: "author",
        content: "pfcs",
      },
    ],
  ],
  themeConfig: {
    logo: "/images/pfcs-logos/logo.png",
    // Please keep looking down to see the available options.
    dateFormat: "YYYY-MM-DD",
    nav: [
      {
        text: "Posts",
        link: "/posts/",
      },
      {
        text: "Projects",
        link: "/projects/",
      },

      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/PFCS33",
        },
        {
          type: "twitter",
          link: "https://github.com/vuejs/vuepress",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2023-present pfcs",
        },
      ],
    },
    directories: [
      {
        id: "posts",
        dirname: "_posts",
        path: "/posts/",
        layout: "Layout",
        itemLayout: "Post",
        itemPermalink: "/:year/:month/:day/:slug",
      },
    ],
    smoothScroll: true,
  },
};
