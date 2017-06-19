import _ from 'lodash'
function component() {
  var element = document.createElement('div')
  element.textContent = _.join(['Hello','webpack'], '!')
  return element
}
document.body.appendChild(component())
