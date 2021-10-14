<template>
  <div class="w-75 mx-auto mt-5">
    <div class="mt-5">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="プレイヤー一覧" active>
          <FetchPlayerTable />
        </b-tab>

        <b-tab title="プレイヤー作成">
          <CreatePlayerForm />
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import FetchPlayerTable from '@/components/DataTable/FetchPlayerTable'
import CreatePlayerForm from '@/components/Form/CreatePlayerForm'

export default {
  components: { CreatePlayerForm, FetchPlayerTable },
  layout: 'admin',
  head: {
    meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
  },
  methods: {
    deletePlayerFromDatabase(playerName) {
      this.$fire.database.ref('players/' + playerName).remove()
    },
  },
}
</script>
