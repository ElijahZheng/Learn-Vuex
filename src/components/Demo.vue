<template>
  <div class="demo">
    <h2>Second Page</h2>
    <p> vuex user 模块</p>
    <div>status</div>
    {{count}}
    <div>getters</div>
    {{todoDone}}
    <div>触发 mutations</div>
    <input type="number" v-model="modelCount">
    <input type="button" value="点击 count++" @click="commit">
    <div>通过 action 触发 mutation</div>
    <input type="number" v-model="modelAction">
    <input type="button" value="异步触发 action" @click="dispatch">
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      modelCount: '',
      modelAction: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.user.count
    },
    todoDone () {
      return this.$store.getters.doneTodos
    }
  },
  methods: {
    commit () {
      this.$store.commit('increment', {
        amount: parseFloat(this.modelCount)
      })
    },
    dispatch () {
      this.$store.dispatch('actionIncrement', {
        amount: parseFloat(this.modelAction)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo div {
      margin: 10px 0;
    }
</style>
