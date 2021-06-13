const ghPages = process.env.NODE_ENV === 'gh-pages';

module.exports = {
  basePath: '/next-rufus',
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: ghPages ? '/anniebombanie.github.io/next-rufus/' : ''
};
