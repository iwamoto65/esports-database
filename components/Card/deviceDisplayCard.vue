<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-3 d-flex align-items-center justify-content-center">
        <img
          :src="'https://esports-database.com/images/' + image"
          class="card-img w-50 m-5 device-image-size"
          alt="device-image"
        />
      </div>
      <div class="col-md-9">
        <div class="card-body">
          <h5 class="card-title">{{ deviceName }}</h5>
          <p class="card-text">
            <small class="text-muted">{{ deviceType }}</small>
            <br />
            <span class="text-muted">&yen;{{ devicePrice }}</span>
          </p>
          <AmazonPurchaseButton class="mt-3" :amazon-item-url="amazonItemUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AmazonPurchaseButton from '@/components/Button/AmazonPurchaseButton'

export default {
  components: { AmazonPurchaseButton },
  props: {
    deviceType: {
      type: String,
      required: true,
    },
    deviceName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    devicePrice: {
      type: String,
      required: true,
    },
    amazonItemUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.device-image-size {
  max-height: 200px;
}
</style>
