require('a')

require.ensure([], function(require) {
  require('b')
})