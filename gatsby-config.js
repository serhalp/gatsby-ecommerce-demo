module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [],
  headers: [
    {
      source: '/blog/*',
      headers: [
        {
          key: 'x-custom-header',
          value: 'Hello World',
        },
      ],
    },
  ],
};
