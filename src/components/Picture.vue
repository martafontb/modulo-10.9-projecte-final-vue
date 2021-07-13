<template>
  <v-container mb-16>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <GoBack />
          <h2>Picture</h2>
        </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row         
        align="center"
        justify="center">
          <v-col sm="6" lg="6" class="picture">
            <v-card outlined elevation="2" text-center>
              <v-img 
              height="250"
              :src="$route.params.url"></v-img>
              <v-card-text>Title: {{ $route.params.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoBack from "@/components/GoBack";
export default {
  name: 'Picture',
  components: {
      GoBack
    },
  methods: {
    back() {
      this.$router.go(-1)
    },
  }
}
</script>