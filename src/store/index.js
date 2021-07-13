import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    users:[],
    photos:[],
    input:'',
  },
  getters: {
    users: state => {
      return state.users;
    },
    photos: state => {
      return state.photos;
    },
    usersConsulted(state){
      return state.users.filter(user => user.counter > 0)
    },
    photosConsulted(state){
      return state.photos.filter(photo => photo.counter > 0)
    },
    getUserName(state) {
      return state.users.map( user => user.name)
    }
  },
  mutations: {
    SET_Users (state, users) {
      if(state.users.length === 0) {
        state.users = users
        state.users.counter = 0
      }   
    },
    SET_Photos (state, photos) {
      if(state.photos.length === 0) {
        state.photos = photos
        state.photos.counter = 0
      } 
    },
    incrementCounter(state, selection) {
      console.log(selection)
      selection.counter++ 
 
    },
    },
  actions: {
    loadUsers({ commit }) {
            axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {response.data.forEach(item=>item.counter = 0)
            commit('SET_Users', response.data)
        })
    },
    loadPhotos({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => {response.data.forEach(item=>item.counter = 0)
        commit('SET_Photos', response.data)
      })
    },
  }
})
