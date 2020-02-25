<template>
  <div class="gallery">
    <img ref="img_1" :src="img_1" alt class="g-image" />
    <img v-if="img_2" ref="img_2" :src="img_2" alt class="g-image" />
    <!--<div v-if="img_2" class="nav">
      <div class="g-btn" @click="prev">
        <img class="g-arrow" src="@/assets/images/left-arrow.svg" alt />
      </div>
      <div class="g-btn" @click="next">
        <img class="g-arrow" src="@/assets/images/right-arrow.svg" alt />
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      img_1: "",
      img_2: "",
      index: 0,
      transition_end: true
    };
  },
  mounted() {
    this.img_1 = this.images[0];
    this.img_2 = this.images[0];
  },
  methods: {
    prepare() {
      this.img_1 = this.images[this.index];
      this.$refs.img_2.classList.add("transitioned");
      this.$refs.img_1.classList.add("transitioned");
      this.$refs.img_1.addEventListener("transitionend", this.transition_over);
      this.transition_end = false;
    },
    next() {
      if (this.transition_end) {
        this.img_2 = this.img_1;
        this.$refs.img_2.classList.remove("next");
        this.$refs.img_2.classList.remove("prev");
        this.index = (this.index + 1) % this.images.length;
        this.$refs.img_1.classList.add("next");
        setTimeout(() => {
          this.prepare();
          setTimeout(() => {
            this.$refs.img_2.classList.add("prev");
            this.$refs.img_1.classList.remove("next");
          }, 100);
        }, 50);
      }
    },
    prev() {
      if (this.transition_end) {
        this.img_2 = this.img_1;
        this.$refs.img_2.classList.remove("next");
        this.$refs.img_2.classList.remove("prev");
        this.index = (this.images.length + this.index - 1) % this.images.length;
        this.$refs.img_1.classList.add("prev");
        setTimeout(() => {
          this.prepare();
          setTimeout(() => {
            this.$refs.img_2.classList.add("next");
            this.$refs.img_1.classList.remove("prev");
          }, 100);
        }, 50);
      }
    },
    transition_over() {
      this.$refs.img_1.removeEventListener(
        "transitionend",
        this.transition_over
      );
      this.$refs.img_2.classList.remove("transitioned");
      this.$refs.img_1.classList.remove("transitioned");
      this.transition_end = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
  .nav {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .g-btn {
    width: 40px;
    height: 40px;
    background: white;
    display: inline-block;
    vertical-align: top;
    margin-left: 5px;
    cursor: pointer;
  }
  .g-image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    transform: translate(0, 0);
  }
  .next {
    transform: translate(100%, 0);
  }
  .prev {
    transform: translate(-100%, 0);
  }
  .transitioned {
    transition: 0.5s;
  }
  .g-arrow {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
