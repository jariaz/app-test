<template>
  <div class="d-flex flex-column justify-content-between w-100">
    <!-- Headline Section -->
    <div class="position-relative headline">
      <div
        class="flex-grow-1 background-image position-absolute headline"
      ></div>
      <div class="d-flex flex-column p-5 mt-5 container position-relative">
        <h1 class="fw-bold mb-2">{{ pageContent.headline }}</h1>
        <h2 class="">{{ pageContent.subHeadline }}</h2>
      </div>
    </div>

    <!-- Content Section -->
    <div class="d-flex flex-wrap justify-content-between container">
      <div
        class="d-flex flex-column justify-content-center supporting-content flex-grow-1"
      >
        <h2 class="fw-bold mb-2">{{ pageContent.bodyTitle }}</h2>
        <div class="fs-4">{{ pageContent.body }}</div>
      </div>
      <img src="~assets/images/family.jpg" class="ps-2 family-img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      pageContent: {},
    };
  },
  mounted() {
    this.$store.dispatch("heroModule/fetchPageContent");
    this.pageContent = this.$store.state.heroModule.pageContent;
  },
};
</script>
<style scoped>
.headline {
  height: 1000px;
}

.background-image {
  background-image: url("~assets/images/landscape.jpg");
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  opacity: 0.5;
  width: 100%;
  object-fit: cover;
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

@media (min-width: 992px) {
  .supporting-content {
    width: 25%;
    padding: 0;
  }
}
@media (max-width: 991px) {
  .supporting-content {
    width: 100%;
    padding: 1rem;
  }
}

.family-img {
  min-width: 10%;
  object-fit: contain;
}

@media (min-width: 992px) {
  body h1 {
    font-size: 56px;
    line-height: 1.1 !important;
  }

  body h2 {
    font-size: 40px;
    line-height: 1.1 !important;
  }
}
</style>
