const basePath = process.env.NODE_ENV === 'production' ? '/next-rufus' : '';

module.exports = {
  basePath,
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: `anniebombanie.github.io${basePath}/`
};
