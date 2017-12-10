const { formatter } = require('../library/index.js')
const data = {
  attr: {
    backgroundColor: 'red',
    color: 'blue',
    fontSize: '16px',
    fontWeight: 700
  },
  unit: 'px'
}
console.log(formatter(data))
