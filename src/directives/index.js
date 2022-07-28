
export const clickOutsideDirective = {
    mounted(el, { value: cb }) {
      console.log('el', el)
      el.clickOutside = ( ev ) => {
        ev.stopPropagation()
        const { left, top, width, height } = el.getBoundingClientRect()
        if (
          !(ev.clientX > left &&
            ev.clientX < left + width &&
            ev.clientY > top &&
            ev.clientY < top + height)
        ) {
          cb()
          console.log('outside')
        } else {
          console.log('inside')
        }
      }
      setTimeout(() => {
        document.addEventListener('click', el.clickOutside)
      }, 0)
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutside)
    },
  }