const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config')
const { getDefaultMetroConfig } = require('@owlmeans/vc-lib-native/dist/metro')
// const path = require('path')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {}
const config = getDefaultMetroConfig(__dirname)
// config.resolver.resolverMainFields.push('exports')
// config.projectRoot = path.resolve('./')
// console.log(config)
// console.log(config.transformer.getTransformOptions())
module.exports = mergeConfig(getDefaultConfig(__dirname), config)