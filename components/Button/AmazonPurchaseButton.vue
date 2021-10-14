<template>
  <button type="button" class="btn btn-lg purchase-button">
    <a :href="amazonItemUrl" class="font-weight-bold text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-arrow-right-circle"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        />
      </svg>
      Amazon<span class="small">で探す</span>
    </a>
  </button>
</template>

<script>
export default {
  props: {
    amazonItemUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.purchase-button {
  background-color: #fd9827;
}
</style>
