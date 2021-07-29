// import getComponents from '@/utils/getComponents'
import Icon from '@/components/Icon'

export default {
  title: 'Icons'
}

const allIcons = require.context(
  '@/assets/icons',
  false,
  /.vue$/
)

const Template = (args) => {
  let template = `<div>
    <h3>Icons</h3>
    <div style="display:grid; grid-template-columns: repeat(auto-fill, 60px); grid-gap:10px">
    `

  allIcons.keys().forEach(icon => {
    const IconName = icon.replace('./', '').replace('.vue', '')
    template += `<div style="padding: 8px;box-shadow: 0 1px 10px #777">
      <div style="margin-bottom:8px">${IconName}</div>
      <Icon :width="40" :height="40" name="${IconName}" />
      </div>
      `
  })
  template += '</div></div>'

  return {
    components: { Icon },
    template
  }
}

export const Libraries = Template.bind()
