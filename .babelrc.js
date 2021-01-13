module.exports = {
    presets: [['next/babel', { 'preset-react': { runtime: 'classic' } }]],
    plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
  }