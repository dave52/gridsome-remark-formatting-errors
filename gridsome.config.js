/* eslint-disable */

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ZUI | Zywave User Interface | Documentation',
  templates: {
    CustomElementsJSON: [
      {
        component: './src/templates/CustomElementsJSON.vue',
        path: (node) => {
          return `/developers/${node.fileInfo.name}/`
        }
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkDown',
        baseDir: './src/markdown',
        template: './src/templates/MarkDown.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './static/custom-elements-json',
        path: '*.json',
        typeName: 'CustomElementsJSON'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarg: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  }
};
