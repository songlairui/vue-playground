import { func1 } from './func1'

const a = {
  data: null
}

function fillContent(a) {
  a.data = func1('hello via func1')
  return a
}

a.__proto__.display = function() {
  console.info(this)
}

fillContent(a).display()