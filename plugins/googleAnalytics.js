function trackingGaClickEvent({ category, label }) {
  this.$gtag('event', 'click', {
    event_category: category,
    event_label: label,
    value: 1,
  })
}

export default (_, inject) => {
  inject('trackingGaClickEvent', trackingGaClickEvent)
}
