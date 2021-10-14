<template>
  <div class="bg-light">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/TopPageHeader'
import Footer from '@/components/Footer/TopPageFooter'

export default {
  components: { Header, Footer },
}
</script>
