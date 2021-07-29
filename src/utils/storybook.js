export const generateTemplate = (component) => {
  return (args) => {
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

export const getTemplate = (component) => {
  const Template = generateTemplate(component)
  return Template.bind({})
}
