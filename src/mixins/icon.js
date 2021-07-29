export default function icon (key = 'opts') {
  return {
    computed: {
      [key] () {
        return {
          ...this.defaults,
          ...this.options
        }
      }
    },
    props: {
      options: {
        type: Object
      }
    }
  }
}
