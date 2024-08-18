<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <div class="card">
            <h1>Про Vuex</h1>
            <h2>Счетчик {{ $store.getters['count/counter'] }}</h2>
            <button class="btn primary" @click="$store.commit('count/increment')">Добавить</button>
            <button class="btn danger" @click="$store.dispatch('count/incrementAsync', {value: 10, delay: 200})">Добавить 10</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TheNavbar from './TheNavbar'

export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({ add: 'count/increment' }),
    ...mapActions('count', ['incrementAsync'])
  }
}
</script>
