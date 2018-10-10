<template>
  <v-app>
    <v-navigation-drawer :permanent="true" :mini-variant="miniVariant" :clipped="true" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile @click="goToPage(item)" ripple value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-text="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="false">
      <v-toolbar-side-icon @click.stop="miniVariant = !miniVariant"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer row :fixed="true" app>
      <span>&copy; 2018</span>
      <v-spacer></v-spacer>
      <span><a target="__blank" href="https://jmrsquared.com/joe">Made with  <v-icon color="red">favorite</v-icon> by Joe</a></span>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Home",
          subtitle: "Start page",
          link: "/"
        },
        {
          icon: "account_circle",
          title: "Family members",
          subtitle: "View a list of the family members",
          link: "/family/members"
        },
        {
          icon: "book",
          title: "History",
          subtitle: "Trace back through the family",
          link: "/family/history"
        },
        {
          icon: "nature_people",
          title: "Family tree",
          subtitle: "Visually see the family as it spreads",
          link: "/family/tree"
        },
        {
          icon: "collections",
          title: "Gallery",
          subtitle: "Pictures of family members",
          link: "/family/gallery"
        },
        {
          icon: "visibility",
          title: "Vision",
          subtitle: "Where is the family going",
          link: "/family/vision"
        }
      ],
      miniVariant: false,
      title: "Sirwali"
    };
  },
  methods: {
    goToPage(item) {
      this.$router.push(item.link);
    }
  }
};
</script>
