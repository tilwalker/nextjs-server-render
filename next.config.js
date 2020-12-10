const withSass = require('@zeit/next-sass');

module.exports = withSass({
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/auth/:authpath',
        destination: '/auth',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
});
