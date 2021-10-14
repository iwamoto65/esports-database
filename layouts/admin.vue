<template>
  <div id="layout-container" class="bg-light">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header/AdminHeader'

export default {
  components: { Header },
  mounted() {
    const windowHeight = window.innerHeight
    const content = document.getElementById('layout-container')

    content.style.minHeight = windowHeight + 'px'
  },
}
</script>
