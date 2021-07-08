export default (app) => {
  // 文本高亮
  app.directive("highlight", {
    beforeMount(el, binding) {
      el.style.background = binding.value
    },
  }),
  // 设置边框
  app.directive('setBorder', {
    beforeMount(el) {
      el.style.border = "1px solid red"
    },
  })
}