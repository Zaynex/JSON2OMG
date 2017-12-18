const { formatter } = require('../library/index.js')
const data = {
  attr: {
    'background-color': 'red',
    color: 'blue',
    fontSize: '16px'
  },
  language: 'css'
}
console.log(formatter(data))
