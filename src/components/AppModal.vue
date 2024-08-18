<template>
    <div class="modal-backdrop" @click="$emit('close')"></div>
    <div class="modal">
        <h3>Это заголовок модалки</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio tempore dolores, harum vitae fugiat deleniti praesentium quisquam ab! Maxime!</p>
    </div>
</template>
<script>
export default {
    emits: ['close']
}
</script>

<style lang="">

</style>
