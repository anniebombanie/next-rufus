out// const ghPages = process.env.NODE_ENV === 'production';
// const basePath = ghPages ? '/next-rufus' : '';

module.exports = {
  basePath: '/next-rufus',
  // In production (gh-pages), static assets point to <username>.github.io/<projectname>
  assetPrefix: 'https://anniebombanie.github.io/next-rufus/'
};
