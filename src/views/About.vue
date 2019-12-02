<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="button" value="Toggle Component" @click="toggleComponent" />
    <component v-bind:is="dynammicCmp" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynammicCmp: "hello-world"
    };
  },
  methods: {
    toggleComponent() {
      if (this.dynammicCmp == "hello-world") {
        this.dynammicCmp = "greeting";
      } else {
        this.dynammicCmp = "hello-world";
      }
    }
  }
};
</script>
