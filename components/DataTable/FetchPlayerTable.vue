<template>
  <div>
    <template v-if="isEditingPlayerData">
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

          <tbody class="position-relative">
            <tr>
              <td class="align-middle">{{ editTargetPlayer.name }}</td>
              <td class="align-middle">
                <input v-model="editTargetPlayer.belong" type="text" />
              </td>
              <template v-for="devices in editTargetPlayer.device">
                <td v-for="(device, i) in devices" :key="'device' + i">
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

      <div class="float-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          class="bi bi-arrow-return-left"
          viewBox="0 0 16 16"
          @click="displayPlayerList"
        >
          <path
            fill-rule="evenodd"
            d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </div>
      <div class="text-center">
        <button
          class="btn btn-primary btn-lg"
          @click="editPlayer(editTargetPlayer)"
        >
          更新する
        </button>
      </div>
    </template>

    <template v-else>
      <form
        class="text-center mt-4 mb-1"
        @submit.prevent="searchPlayer(targetPlayer)"
      >
        <input
          v-model="targetPlayer"
          class="form-control d-inline-block w-50 align-middle"
          type="text"
        />
        <button class="btn btn-outline-secondary align-middle" type="submit">
          検索する
        </button>
        <p class="text-right">
          プレイヤー数：{{ displayPlayerCount }} / {{ allPlayerCount }}
        </p>
      </form>

      <div class="table-responsive">
        <table class="table list-table">
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

          <tbody
            v-for="(registeredPlayer, index) in playerList"
            :key="index"
            class="position-relative"
          >
            <tr>
              <td class="align-middle">{{ registeredPlayer.name }}</td>
              <td class="align-middle">{{ registeredPlayer.belong }}</td>
              <template v-for="devices in registeredPlayer.device">
                <td v-for="(device, i) in devices" :key="device.name + i">
                  <p>
                    <b>商品名</b>
                    <br />
                    <small class="text-break">{{ device.name }}</small>
                  </p>
                  <p class="mt-4">
                    <b>画像</b>
                    <br />
                    <small class="text-break">{{ device.image }}</small>
                  </p>
                  <p class="mt-4">
                    <b>価格</b>
                    <br />
                    <small class="text-break">{{ device.price }}</small>
                  </p>
                  <p class="mt-4">
                    <b>アマゾンURL</b>
                    <br />
                    <small class="text-break">{{ device.amazonUrl }}</small>
                  </p>
                </td>
              </template>
            </tr>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square position-absolute"
              viewBox="0 0 16 16"
              @click="displayEditField(registeredPlayer)"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash position-absolute"
              viewBox="0 0 16 16"
              @click="removePlayer(registeredPlayer.name)"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetPlayer: '',
      playerList: [],
      displayPlayerCount: 0,
      allPlayerCount: 0,
      isEditingPlayerData: false,
      editTargetPlayer: null,
    }
  },
  mounted() {
    const playerRef = this.$fire.database.ref('players/')

    playerRef.limitToFirst(10).on('value', (snapshot) => {
      this.playerList = snapshot.val()
      this.displayPlayerCount = snapshot.numChildren()
    })

    playerRef.on('value', (snapshot) => {
      this.allPlayerCount = snapshot.numChildren()
    })
  },
  methods: {
    searchPlayer(player) {
      this.$fire.database
        .ref('players/')
        .orderByChild('name')
        .startAt(player)
        .endAt(player + '\uF8FF')
        .once('value', (snapshot) => {
          this.playerList = snapshot.val()
          this.displayPlayerCount = snapshot.numChildren()
        })
    },
    editPlayer(player) {
      if (confirm('値を更新しますか')) {
        this.$fire.database.ref('players/' + player.name).update(player)
        this.isEditingPlayerData = false
      }
    },
    removePlayer(playerName) {
      if (confirm('プレイヤーを削除しますか')) {
        this.$fire.database.ref('players/' + playerName).remove()
      }
    },
    displayPlayerList() {
      this.isEditingPlayerData = false
    },
    displayEditField(player) {
      this.editTargetPlayer = player
      this.isEditingPlayerData = true
    },
  },
}
</script>

<style scoped>
.list-table {
  table-layout: fixed;
}

.table-col-width {
  min-width: 100px;
}

.bi-arrow-return-left {
  cursor: pointer;
}

.bi-pencil-square {
  top: 10px;
  right: 0;
  cursor: pointer;
}

.bi-trash {
  top: 40px;
  right: 0;
  cursor: pointer;
}
</style>
