import { app } from '@storybook/vue3'
import getComponents from '@/utils/getComponents'

const requires = require.context(
  '@/assets/icons',
  false,
  /.vue$/
)

const icons = getComponents(requires, 'Icon')

icons.forEach(icon => {
  app.component(icon.name, icon.component)
})

export const parameters = {
  controls: { expanded: true },
};