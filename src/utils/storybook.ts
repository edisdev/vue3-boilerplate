import { VueElement } from '@vue/test-utils/dist/types'

export const generateTemplate = (component: VueElement) => {
  return (args: Object) => {
    return {
      data () {
        return {
          propsObj: Object.assign(args)
        }
      },
      components: { component },
      template:
        '<component v-bind="propsObj"/>'
    }
  }
}

export const getTemplate = (component: VueElement) => {
  const Template = generateTemplate(component)
  return Template.bind({})
}
