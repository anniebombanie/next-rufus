// const ghPages = process.env.NODE_ENV === 'production';
// const basePath = ghPages ? '/next-rufus' : '';

// module.exports = {
//   // In production (gh-pages), static assets point to <username>.github.io/<projectname>
//   assetPrefix: 'https://anniebombanie.github.io/next-rufus/'
// };

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/anniebombanie/anniebombanie.github.io/next-rufus/' : '',
}