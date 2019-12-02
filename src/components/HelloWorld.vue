<template>
  <div class="hello">
    <h1>Count {{ count }}</h1>
    <input type="button" @click="incrementCount" value="Increment">
    <h1>My Bucket Name {{ bucketName }}</h1>
    <input type="text" v-model="newBucketName">
    <input type="button" value="Update Bucket Name" @click="updateBuacketName">
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      newBucketName: ""
    };
  },
  computed: {
    ...mapState(["count", "bucketName"])
  },
  methods: {
    incrementCount() {
      this.$store.dispatch("incrementCount");
    },
    updateBuacketName() {
      this.$store.dispatch("updateBucketName", this.newBucketName);
      this.newBucketName = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
