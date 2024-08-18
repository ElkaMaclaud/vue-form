<template>
    <header class="navbar">
        <strong>Счётчик {{ counter }}</strong>
    </header>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.state.count.counter
        }
    }
}
</script>
