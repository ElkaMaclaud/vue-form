<template>
    <div class="container">
        <app-alert v-if="alert" title="Внимание!" text="Это очень важное сообщение, будьте бдительны!!!"
           @close="alert = false">

        </app-alert>
        <div class="card">
            <button class="btn primary" @click="toggleAlert">{{ alert ? "Скрыть" : "Показать" }} сообщение</button>
        </div>
    </div>
</template>

<script>
import AppAlert from './AppAlert'

export default {
    components: { AppAlert }
}
</script>
