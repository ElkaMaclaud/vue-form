<template>
    <header class="navbar">
        <strong>Счётчик {{ counter }}</strong>
        <button class="btn" @click="add">Добавить 5</button>
    </header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    computed: {
        // counter() {
        //     return this.$store.state.count.counter
        // }
        ...mapGetters('count', ['counter', 'doubleCounter'])
    },
    methods: {
        ...mapMutations('count', { addFive: 'add' }),
        add() {
            this.addFive({ value: 5 })
        },
        ...mapActions('count', ['incrementAsync'])
    }
}
</script>
