<script>
import Vue from "vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  render() {
    return (
      <div class="hello">
        <h1>{this.vueVersion}</h1>
        <h1>Count {this.GET_COUNT_ALPHA} </h1>
        <input type="button" onClick={this.incrementCount} value="Increment" />
        <h1>My Bucket Name {this.bucketName}</h1>
        <input type="text" v-model={this.newBucketName} />
        <input
          type="button"
          value="Update Bucket Name"
          onClick={this.updateBuacketName}
        />
      </div>
    );
  },
  data() {
    return {
      newBucketName: "",
      vueVersion: Vue.version
    };
  },
  computed: {
    ...mapState(["count", "bucketName"]),
    ...mapGetters(["GET_COUNT_ALPHA"])
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
