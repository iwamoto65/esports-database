<template>
  <form @submit.prevent="addPlayerToDatabase(player.name)">
    <div class="table-responsive">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">名前</th>
            <th scope="col">所属</th>
            <th scope="col">マウス</th>
            <th scope="col">キーボード</th>
            <th scope="col">コントローラー</th>
            <th scope="col">モニター</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">
              <input v-model="player.name" type="text" />
            </td>
            <td class="align-middle">
              <input v-model="player.belong" type="text" />
            </td>
            <template v-for="devices in player.device">
              <td v-for="(device, i) in devices" :key="i + 'inputField'">
                <p>
                  <b>商品名</b>
                  <br />
                  <input v-model="device.name" type="text" />
                </p>
                <p class="mt-4">
                  <b>画像</b>
                  <br />
                  <input v-model="device.image" type="text" />
                </p>
                <p class="mt-4">
                  <b>価格</b>
                  <br />
                  <input v-model="device.price" type="text" />
                </p>
                <p class="mt-4">
                  <b>アマゾンURL</b>
                  <br />
                  <input v-model="device.amazonUrl" type="text" />
                </p>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-center mt-5 pb-3">
      <button type="submit" class="btn btn-primary btn-lg">作成する</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      player: {
        name: '',
        belong: '',
        device: [
          {
            mouse: {
              name: '',
              image: '',
              price: '',
              amazonUrl: '',
            },
          },
          {
            keyboard: {
              name: '',
              image: '',
              price: '',
              amazonUrl: '',
            },
          },
          {
            controller: {
              name: '',
              image: '',
              price: '',
              amazonUrl: '',
            },
          },
          {
            monitor: {
              name: '',
              image: '',
              price: '',
              amazonUrl: '',
            },
          },
        ],
      },
    }
  },
  methods: {
    addPlayerToDatabase(playerName) {
      const playerRef = this.$fire.database.ref('players/' + playerName)

      playerRef.transaction((currentData) => {
        if (playerName !== '' && currentData === null) {
          playerRef.set(this.player)
          alert('送信が成功しました')
        } else {
          alert('値を確認してください。送信が失敗しました')
        }
      })
    },
  },
}
</script>
