export default (requires: __WebpackModuleApi.RequireContext, extraKey?: String) => {
  return requires.keys().map(file => {
    const component = requires(file).default
    let name = file.replace('./', '').replace('.vue', '')
    if (extraKey) name = `${extraKey}${name}`
    return { name, component }
  })
}
