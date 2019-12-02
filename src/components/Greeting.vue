<script>
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  render() {
    return (
      <div class="hello">
        <h1>Hi {this.bucketName}</h1>
        <input type="text" v-model={this.newBucketName} />
        <input
          type="button"
          value="Greet Me"
          onClick={this.updateBuacketName}
        />
      </div>
    );
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
