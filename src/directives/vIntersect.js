const intersect = {
  mounted(el, binding) {
    const options = {
      root: null,
      threshold: binding.value?.threshold || 0.1,
      rootMargin: binding.value?.rootMargin || '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (binding.modifiers.once) {
            observer.unobserve(el)
          }
        } else if (!binding.modifiers.once) {
          el.classList.remove('is-visible')
        }
      })
    }, options)

    el._observer = observer
    observer.observe(el)
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
}

export default intersect
