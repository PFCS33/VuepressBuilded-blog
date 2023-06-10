module.exports = {
  title: "PFCS's blog",
  description: "Tech blog of pfcs, mainly about my CS study",
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
    nav: [
      {
        text: "Topics",
        link: "/topics/",
      },
      {
        text: "Posts",
        items: [
          { text: "All Posts", link: "/posts/" },
          {
            text: "By Topic",
            items: [
              { text: "LeetCode", link: "/topics/LeetCode/" },
              { text: "Node.js", link: "/topics/Node.js/" },
              { text: "VuePress", link: "/topics/VuePress/" },
            ],
          },
        ],
      },
      {
        text: "Resources",
        link: "/resources/",
      },
      {
        text: "Donate",
        link: "/donate/",
      },
    ],
  },
  plugins: ["@goy/svg-icons"],
};
