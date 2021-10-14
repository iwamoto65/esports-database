<template>
  <div
    class="
      error-container
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h3>{{ error.statusCode === 404 && 'ご指定のページが見つかりません' }}</h3>
    <nuxt-link to="/" class="mt-5">トップページに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  head: {
    meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
  },
}
</script>

<style scoped>
.error-container {
  height: 500px;
}
</style>
