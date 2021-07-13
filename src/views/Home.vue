<template>
  <v-container>
      <v-row>
        <v-col sm="10" offset-sm="1" md="8" offset-md="2">
          <h2>Home page</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col xsm="8" md="6">
            <v-card outlined>
              <v-card-title>Users consulted</v-card-title>
              <ul>
              <li v-for="user in usersConsulted" :key="user.id">{{user.name}} - {{user.counter}}</li>
              </ul>
            </v-card>
          </v-col>
           <v-col xsm="8" md="6">
            <v-card outlined>
              <v-card-title>Pictures consulted</v-card-title>
              <ul>
              <li v-for="photo in photosConsulted" :key="photo.id">{{photo.title}} - {{photo.counter}}</li>
              </ul>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters([
      'usersConsulted', 
      'photosConsulted'
    ])  
}
</script>
