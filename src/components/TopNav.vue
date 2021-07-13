<template>
<div>
    <v-app-bar>
        <v-toolbar-title>IT Academy</v-toolbar-title>
        <v-spacer></v-spacer>

        <span class="hidden-sm-and-up">
            <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
        </span>

        <v-toolbar-items class="hidden-xs-only">
            <v-btn to="/" text >Home</v-btn> 
            <v-btn to="/users" text >Users</v-btn> 
            <v-btn to="/pictures" text >Pictures</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      <Search />

    </v-app-bar>
    <v-navigation-drawer 
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          {{ item.title }}
        </v-list-item>
 </v-list>
    </v-navigation-drawer>
</div>
</template>


<script>
import Search from './Search.vue'

export default {
  components: {
    'Search': Search,
  },
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Users', link: 'users', icon: 'user' },
        { title: 'Pictures', link: 'pictures', icon: 'picture' }
      ]
    }
  }
}
</script>

<style>
.v-input__control{
    max-width: 400px;
}
.v-input {
  flex: 1 1 1;
}
</style>