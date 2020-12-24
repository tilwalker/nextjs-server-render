const { ASSET_HOST } = process.env
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = withCSS(withLess(withImages(withSass({
  assetPrefix,
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    return config
  }
}))))
