<template>
  <v-container>
      <v-row>
        <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
            <GoBack />
          <h2>Albums</h2>
        </v-col>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row         
        align="center"
        justify="center">
          <v-col
          sm="4"
          lg="6"
          class="post" v-for="photo in photos" :key="photo.id">
            <v-card outlined>
              <v-card-subtitle>{{ photo.title }}</v-card-subtitle>
              <v-card-actions>
                <router-link 
                
                :to="{name: 'Picture', 
                      params:{ 
                        id: photo.id, 
                        title: photo.title,
                        url: photo.thumbnailUrl
                        }}">
                  <v-btn color="success" outlined @click="incrementCounter(photo)">
                    See album
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import GoBack from "@/components/GoBack";

export default {
    name: 'Pictures',
    components: {
      GoBack
    },
    mounted(){
      this.$store.dispatch('loadPhotos')
    },  
    computed: mapState([
        'photos'
    ]),
    methods: {
    back() {
      this.$router.go(-1)
    },
    incrementCounter(photo) {
        this.$store.commit('incrementCounter', photo)
    },
  }
}


</script>

<style>
a {
  text-decoration: none;
}
</style>



