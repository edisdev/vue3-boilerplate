import { getTemplate } from '@/utils/storybook'
import HW from '@/components/HelloWorld'

export default {
  title: 'Components',
  component: HW
}

export const HelloWorld = getTemplate(HW)
