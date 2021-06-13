const ghPages = process.env.NODE_ENV === 'production';

module.exports = {
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: ghPages ? 'https://anniebombanie.github.io/next-rufus/' : '',
  basePath:'/next-rufus'
};
