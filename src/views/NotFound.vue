<template>
  <v-container mb-16>
    <v-row >
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <GoBack />
          <h2>User Not Found</h2>
        </v-col>
      </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
          <p>
            Oops we couldn't find that user. Try going to
            <router-link :to="{ name: 'Users' }">users</router-link>
          </p>
        </v-col>  
      </v-row>
  </v-container>
</template>