<template>
  <footer class="text-center text-lg-start">
    <div class="border-top">
      <div class="mx-auto px-5">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <!-- Site Name or Logo-->
            <div class="col-lg-5 mb-3">
              <img
                v-if="siteLogoUrl"
                :src="siteLogoUrl"
                style="max-width: 220px; max-height: 48px"
              />
              <h5 v-else>{{ siteName }}</h5>

              <!-- Newsletter Subscription -->
              <div class="col-md-8">
                <h5>Subscribe to our newsletter</h5>
                <p>
                  Stay updated with the latest financial tips, exclusive offers,
                  and important news delivered straight to your inbox.
                </p>
                <form @submit.prevent="subscribeToNewsletter">
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your email"
                      v-model="email"
                      required
                    />
                    <button class="btn btn-dark" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Slots for Dynamic Sections -->
            <div
              v-for="(section, index) in sections"
              :key="index"
              :class="
                index == 0
                  ? 'col-12 col-lg-2 offset-lg-1 mb-3'
                  : 'col-12 col-lg-2 mb-3'
              "
            >
              <slot :name="section.name"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-top mx-auto px-5">
      <div class="container py-2 py-md-2 px-4 px-md-3">
        <div class="d-flex justify-content-between">
          <div>Copyright &copy; {{ currentYear }}</div>

          <!-- Social Media and Newsletter -->
          <div class="d-flex flex-row align-self-center">
            <a
              v-for="(social, index) in socialLinks"
              :key="index"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-dark me-3"
            >
              <i :class="`bi ${social.icon}`" style="font-size: 1.5rem"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "DynamicFooter",
  props: {
    siteName: {
      type: String,
      required: true,
    },
    siteLogoUrl: {
      type: String,
    },
    currentYear: {
      type: Number,
      required: true,
    },
    socialLinks: {
      type: Array,
      required: true,
    },
    sections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    subscribeToNewsletter() {
      alert(`Subscribed with ${this.email}`);
      this.email = ""; // Clear the input after subscribing
    },
  },
};
</script>
<style>
footer a {
  color: var(--bs-body-color);
  text-decoration: none;
}

footer a:hover,
footer a:focus {
  color: var(--bs-link-hover-color);
  text-decoration: underline;
}
</style>
