<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title="Внимание!"
      text="Это очень важное сообщение, будьте бдительны!!!"
      type="warning"
      closable
      @close="alert = false"
    >

    </app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? "Скрыть" : "Показать"  }} сообщение</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock'

export default {
  components: { AppAlert, AppBlock }
}
</script>
