<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <p class="title text-xs-center">The Family tree</p>
        <v-card dark color="primary">
          <tree class="familyTree" :duration="1" :data="familyTree" node-text="name" :zoomable="true"></tree>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
import { tree } from "vued3tree";

export default {
  name: "",
  components: {
    tree
  },
  data() {
    return {
      familyTree: {
        name: "Joe and Nolo",
        children: [
          {
            name: "Junior",
            children: [
              {
                name: "C1",
                value: 100
              },
              {
                name: "C2",
                value: 300
              },
              {
                name: "C3",
                value: 200
              }
            ]
          },
          {
            name: "B2",
            value: 200
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.familyTree {
  max-height: 90vh;
}
</style>
