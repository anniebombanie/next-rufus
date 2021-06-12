const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  basePath: '/next-rufus',
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: ghPages ? '/anniebombanie.github.io/next-rufus/' : ''
};
