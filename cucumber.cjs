module.exports = {
  default: {
    require: ['steps/*.ts'],
    requireModule: ['ts-node/register'],
    parallel: 4,

    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir: 'allure-results'
    }
  }
};