export default defineNuxtPlugin((nuxtApp) =>
  nuxtApp.vueApp.directive('click-outside', {
    mounted: function (el, binding) {
      el.clickOutsideEvent = function (event: any) {
        // here I check that click was outside the el and his children
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event)
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    beforeUnmount: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  })
)
