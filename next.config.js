const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: ghPages ? '/anniebombanie.github.io/' : ''
};
