<template>
  <v-container mb-16>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <GoBack />
          <h2>Users page</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col
          sm="6"
          lg="6"
          class="user" 
          v-for="user in users" 
          :key="user.name"
          >
            <v-card outlined>
              <v-card-title>{{user.name}}</v-card-title>
              <v-card-actions>
                <router-link 
                :to="{
                  name: 'User', 
                  params:{ name: user.name, user: user }}"> 
                  <v-btn color="success" outlined @click="incrementCounter(user)">
                    See user
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import GoBack from "@/components/GoBack";

export default {
  name: 'Users',
  components: {
      GoBack
    },
  mounted () {
      this.$store.dispatch('loadUsers')
    },
  computed: mapState([
        'users'
    ]),
  methods: {
    back() {
      this.$router.go(-1)
    },
    incrementCounter(user) {
        this.$store.commit('incrementCounter', user)
    },
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>

