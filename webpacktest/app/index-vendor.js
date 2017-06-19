const moment = require('moment')

console.info(moment().format())

// total 1016
// -rw-r--r--  1 larry  staff   5.9K  6 19 10:15 6a90da6c8a7ff0f1e976.manifest.js
// -rw-r--r--  1 larry  staff   5.9K  6 19 10:14 6b0977a391c85b4bc046.manifest.js
// -rw-r--r--  1 larry  staff   483K  6 19 10:15 7f3aef517103c1eb61be.vendor.js
// -rw-r--r--  1 larry  staff   179B  6 19 10:15 c8a0af8fe528267df8d5.main.js
// -rw-r--r--  1 larry  staff   868B  6 19 10:14 de1f9a065b43a16ec14c.main.js

let tip = document.createElement('div')
tip.textContent = moment().format()
document.querySelector('body').appendChild(tip)

// total 992
// -rw-r--r--  1 larry  staff   5.9K  6 19 10:14 6b0977a391c85b4bc046.manifest.js
// -rw-r--r--  1 larry  staff   483K  6 19 10:14 7f3aef517103c1eb61be.vendor.js
// -rw-r--r--  1 larry  staff   868B  6 19 10:14 de1f9a065b43a16ec14c.main.js