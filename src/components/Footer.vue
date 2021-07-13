<template>
    <v-footer  class="black white--text"> 
      <v-col class="text-center" cols="12" >
       <strong>projecte fi de curs vuejs</strong>
       <v-spacer></v-spacer> 
       &copy; {{ new Date().getFullYear() }} — <strong>Marta Font</strong>
      </v-col>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>