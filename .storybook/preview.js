import { app } from '@storybook/vue3'
import getComponents from '@/utils/getComponents'

const requires = require.context(
  '@/assets/icons',
  false,
  /.vue$/
)

const componentRequires = require.context(
  '@/components',
  false,
  /.vue$/
)

const icons = getComponents(requires, 'Icon')
const components = getComponents(componentRequires)

const allComponents = [...icons, ...components]

allComponents.forEach(component => {
  app.component(component.name, component.component)
})

export const parameters = {
  controls: { expanded: true },
};