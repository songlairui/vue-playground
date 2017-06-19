import _ from 'lodash'
import './test1.css'

function component() {
  var element = document.createElement('div')
  element.textContent = _.join(['Hello', 'webpack'], '!')
  return element
}
document.body.appendChild(component())