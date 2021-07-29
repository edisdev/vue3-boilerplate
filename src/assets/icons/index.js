import getComponents from '@/utils/getComponents'

const requires = require.context(
  '@/assets/icons',
  false,
  /.vue$/
)

export default getComponents(requires, 'Icon')
