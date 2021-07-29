import getComponents from '@/utils/getComponents'

const requires = require.context(
  '@/components',
  false,
  /.vue$/
)

export default getComponents(requires)
