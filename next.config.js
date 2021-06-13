// const ghPages = process.env.NODE_ENV === 'production';
// const basePath = ghPages ? '/next-rufus' : '';
// const assetPrefix = ghPages ? 'anniebombanie.github.io/next-rufus/' : '';

// module.exports = {
//   basePath,
//   // In production (gh-pages), static assets point to <username>.github.io/<projectname>
//   assetPrefix
// };

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}