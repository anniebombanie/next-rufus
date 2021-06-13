const ghPages = process.env.NODE_ENV === 'production';
const basePath = ghPages ? '/next-rufus' : '';

module.exports = {
  basePath,
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix:'anniebombanie.github.io/next-rufus/'
};
