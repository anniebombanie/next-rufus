const ghPages = process.env.NODE_ENV === 'production';

module.exports = {
  basePath:'/next-rufus',
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: ghPages ? 'https://anniebombanie.github.io/next-rufus/' : ''
};
