<template>
  <div class="footer-section">
    <h5 class="text-secondary-emphasis">{{ title }}</h5>
    <ul class="list-unstyled">
      <li v-for="(option, index) in options" :key="index" class="mb-2">
        <nuxt-link :to="option.link">{{ option.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer-section {
  margin-bottom: 1rem;
}

.h5,
h5 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
</style>
