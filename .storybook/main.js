module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],

  staticDirs: ["../public"],
  typescript: { reactDocgen: false },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
