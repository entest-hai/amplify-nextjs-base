const withNextPluginPreval = require('next-plugin-preval/config')();

module.exports = withNextPluginPreval({

  // Differentiate pages with frontmatter & layout vs. normal MD(X)
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  swcMinify: true,

  // don't want to fix typescript errors right now...
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    const defaultRehypePlugins = [
      require('mdx-prism'),
      // are ESM only.
      require('rehype-slug'),
      require('rehype-autolink-headings'),
    ];
    const defaultRemarkPlugins = [
      require('remark-code-import'),
      require('remark-gfm'),
      require('remark-mdx-images'),
      [
        require('remark-github'),
        {
          repository: 'aws-amplify/amplify-ui',
        },
      ],
    ];

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            rehypePlugins: defaultRehypePlugins,
            // Pages have reqiure layout & frontmatter
            remarkPlugins: defaultRemarkPlugins.concat([
              // Remove frontmatter from MDX
              require('remark-frontmatter'),
              // Extract to `frontmatter` export
              [
                require('remark-mdx-frontmatter').remarkMdxFrontmatter,
                { name: 'frontmatter' },
              ],
            ]),
          },
        },
      ],
    });

    return config;
  },
});
