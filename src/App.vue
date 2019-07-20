<template>

  <v-app>

    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex shrink>
            <div class="subheading">Stefan Popa</div>
            <div class="body-1">ps96068@yahoo.com</div>
          </v-flex>
        </v-layout>
      </v-img>

      <v-list>
        <v-list-tile
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-tile-action>
            <v-icon >{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
         @click="drawer = !drawer"
         class="hidden-md-and-up"
      >

      </v-toolbar-side-icon>
      <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">Ad aplication</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <router-view>

        </router-view>

    </v-content>
  </v-app>

</template>


<script>

export default {
  data (){
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
        {title: 'New ad', icon: 'note_add', url: '/new'},
        {title: 'My ads', icon: 'list', url: '/list'}
      ]
    }
  }
}
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>
