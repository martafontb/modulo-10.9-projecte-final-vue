<template>
  <v-container mb-16>
      <v-row >
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <GoBack />
          <h2>User</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row         
        align="center"
        justify="center">
          <v-col sm="6" lg="6" class="user">
            <v-card outlined elevation="2" text-center>
              <v-card-title>{{ $route.params.user.name | UpperCase }}</v-card-title>
              <v-card-text>
                <ul>
                  <li> email: {{ $route.params.user.email}} </li>
                  <li> phone: {{ $route.params.user.phone}} </li>
                  <li> web: {{ $route.params.user.website}} </li>
                  <li> street: {{ $route.params.user.address.street}} </li>
                  <li> apartment: {{ $route.params.user.address.suite}} </li>
                  <li> postcode: {{ $route.params.user.address.zipcode}} </li>
                  <li> city: {{ $route.params.user.address.city}} </li>
                </ul>
              </v-card-text>
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
  name: 'User',
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
  },
  filters: {
    UpperCase(value)
    {
      if(!value) return '';
      return value.toString().toUpperCase();
    }
  }
}
</script>

<style>
ul {
  padding: 10px;
}
 li {
   list-style-type:none;
 }

</style>