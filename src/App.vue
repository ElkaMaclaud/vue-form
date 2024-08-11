<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <app-people-list :people="people" @load="loadPeople" @remove="removePerson"></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList.vue'
import AppAlert from './AppAlert.vue'
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      people: [],
      alert: null
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async createPerson() {
      // https://vue-with-8c11a-default-rtdb.asia-southeast1.firebasedatabase.app/people.json
      // this.name

      const response = await fetch('https://vue-with-8c11a-default-rtdb.asia-southeast1.firebasedatabase.app/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json()

      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })

      this.name = ''
    },
    async loadPeople() {
      try {
        const { data } = await axios.get('https://vue-with-8c11a-default-rtdb.asia-southeast1.firebasedatabase.app/people.json')
        if (!data) {
          throw new Error('Список людей пуст')
        }
        this.people = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
            // firsName: data[key].firsName
          }
        })
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message
        }
      }
    },
    async removePerson(id) {
      try {
        const name = this.people.find(person => person.id === id).firstName
        await axios.delete(`https://vue-with-8c11a-default-rtdb.asia-southeast1.firebasedatabase.app/people/${id}.json/`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь с именем "${name}" был удалён`
        }
      } catch (e) {

      }
    }
    // foo() {
    //   console.log('mmmmmmmm', this.name.length)
    // }

  },
  components: {
    AppPeopleList, AppAlert
  }
}
</script>

<style></style>
