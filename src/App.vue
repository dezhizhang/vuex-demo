<template>
  <div id="app">
     <input type='button' value='增加' @click='increment'/>
     <input type='button' value='减少' @click='decrement'/>
     <input type='button' value='偶数才能增加' @click='oddAdd'/>
     <div>
       现在的数字为:{{count}}
     </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',
  computed:mapGetters(['count']),
  methods:mapActions(['increment','decrement','oddAdd'])

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
