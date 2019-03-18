<template>
  <div class="hello">
    <!--<div class="buttons">
      <button @click="toggleComponentOne">{{$t('ToggleComponentOne')}}</button>
      <button @click="toggleComponentTwo">{{$t('ToggleComponentTwo')}}</button>
      <aui-first v-if="showComponentOne"></aui-first>
      <aui-second v-if="showComponentTwo"></aui-second>
    </div>-->
    <button @click="toggleComponentOne">{{$t('ToggleComponentOne')}}</button>
    <aui-first></aui-first>
    <aui-second></aui-second>
    <!--<div>
      <auiby-id></auiby-id>
    </div>-->
  </div>
</template>

<script>
import first from './FirstComponent'
import second from './SecondComponent'
export default {
  name: 'HelloWorld',
  components: {
    AuiFirst: first,
    AuiSecond: second
    // AuibyId: GetID
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggleComponentOne () {
      (this.showComponentOne = !this.showComponentOne)
      window.open('#/first')
    },
    toggleComponentTwo () {
      this.showComponentTwo = !this.showComponentTwo
      window.open('#/second')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
