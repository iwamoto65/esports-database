<template>
  <div class="main-container mx-auto">
    <div class="mx-4">
      <h2 class="mt-5 mb-3">【2021年最新】おすすめゲーミングデバイスまとめ</h2>
      <small>最終更新日：{{ getLastEditDate }}</small>

      <img
        src="https://esports-database.com/images/recommend-gaming-device.png"
        alt="おすすめのデバイス画像"
        class="w-100 my-3"
      />

      <h5 class="d-block my-5 mx-1">
        eスポーツデータベースは最新のeスポーツニュースやプロゲーマー、ストリーマーの情報をお届けします。
      </h5>

      <b-card-group deck>
        <b-card header="目次">
          <b-list-group>
            <b-list-group-item
              v-for="(playerDetail, idx) in playerData"
              :key="idx"
              :href="'#' + playerDetail.name"
              @click="
                $trackingGaClickEvent({
                  category: 'playerLink',
                  label: playerDetail.name,
                })
              "
            >
              {{ playerDetail.name }}
              {{ playerDetail.belong && ` / ${playerDetail.belong}` }}
            </b-list-group-item>
          </b-list-group>

          <small class="text-danger d-block mt-3">
            ※各デバイスは製造中止や品切れ、価格変更などが予告なしに行われている可能性があるのでご理解いただけると幸いです。
          </small>

          <p class="card-text mt-4">
            今回はYouTubeやTwitch,Mildomを代表する人気ストリーマーとプロゲーマーの使用するゲーミングデバイスを特集してみました。
            <br />
            これからPCゲームを始めたいという方は是非とも参考にしていただきたいです。
            <br />
            引き続き情報をアップデートしていくのでよろしくお願いします！
          </p>
        </b-card>
      </b-card-group>

      <div v-for="(playerDetail, idx) in playerData" :key="idx" class="mt-4">
        <h3 :id="playerDetail.name" class="player-title">
          {{ playerDetail.name }}
          {{ playerDetail.belong && `/ ${playerDetail.belong}` }}
        </h3>
        <div v-for="(device, i) in playerDetail.device" :key="i">
          <div v-if="device.mouse">
            <DeviceDisplayCard
              device-type="マウス"
              :device-name="device.mouse.name"
              :image="device.mouse.image"
              :device-price="device.mouse.price"
              :amazon-item-url="device.mouse.amazonUrl"
            />
          </div>

          <div v-else-if="device.keyboard">
            <DeviceDisplayCard
              device-type="キーボード"
              :device-name="device.keyboard.name"
              :image="device.keyboard.image"
              :device-price="device.keyboard.price"
              :amazon-item-url="device.keyboard.amazonUrl"
            />
          </div>

          <div v-else-if="device.controller">
            <DeviceDisplayCard
              device-type="パッド"
              :device-name="device.controller.name"
              :image="device.controller.image"
              :device-price="device.controller.price"
              :amazon-item-url="device.controller.amazonUrl"
            />
          </div>

          <div v-else-if="device.monitor">
            <DeviceDisplayCard
              device-type="モニター"
              :device-name="device.monitor.name"
              :image="device.monitor.image"
              :device-price="device.monitor.price"
              :amazon-item-url="device.monitor.amazonUrl"
            />
          </div>
        </div>
        <hr />
      </div>

      <ScrollToTopButton />
    </div>
  </div>
</template>

<script>
import DeviceDisplayCard from '@/components/Card/deviceDisplayCard'
import ScrollToTopButton from '@/components/Button/ScrollToTopButton'

export default {
  components: { DeviceDisplayCard, ScrollToTopButton },
  asyncData() {
    const playerData = require(`@/static/data/recommendDeviceStreamer.json`)

    return { playerData }
  },
  head: {
    title:
      '【2021年最新】人気ストリーマー＆プロゲーマー使用！！おすすめゲーミングデバイスまとめ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'YouTubeやTwitch,Mildomを代表する人気ストリーマーとプロゲーマーの使用するゲーミングデバイスを特集してみました。これからPCゲームを始めたいという方は是非とも参考にしていただきたいです。',
      },
    ],
  },
  computed: {
    getLastEditDate: () => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      return `${year}年${month}月${day}日`
    },
  },
}
</script>

<style scoped>
.main-container {
  max-width: 1000px;
}

.player-title {
  margin: 56px 0 20px;
  padding: 13px 28px 12px;
  font-size: 21px;
  font-weight: 700;
  background: #f3f3f3;
  border-radius: 10px;
}
</style>
