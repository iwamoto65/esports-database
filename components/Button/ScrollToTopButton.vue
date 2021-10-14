<template>
  <div class="button-position">
    <button
      class="rounded-circle circle-button-size"
      @click="
        scrollButton()
        $trackingGaClickEvent({ category: 'scrollToTop', label: 'topPage' })
      "
    >
      <span class="dli-chevron-up"></span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollButton() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.button-position {
  position: fixed;
  right: 3%;
  bottom: 60px;
}

.circle-button-size {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3),
    -1px -1px 5px 0px rgba(0, 0, 0, 0.3);
}

.dli-chevron-up {
  display: inline-block;
  position: absolute;
  top: 19px;
  left: 13px;
  width: 25px;
  height: 25px;
  border-top: 3px solid rgb(68, 68, 68);
  border-left: 3px solid rgb(68, 68, 68);
  transform: rotate(45deg);
}
</style>
