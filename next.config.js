const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: ghPages ? '/anniebombanie.github.io/' : ''
};
