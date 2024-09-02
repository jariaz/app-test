<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <main class="flex-grow-1">
      <nuxt />
    </main>

    <!-- Footer -->
    <DynamicFooter
      :siteName="footerData.siteName"
      :siteLogoUrl="footerData.siteLogoUrl"
      :currentYear="new Date().getFullYear()"
      :socialLinks="footerData.socialLinks"
      :sections="footerData.sections"
    >
      <template
        v-for="(section, index) in footerData.sections"
        :slot="section.name"
      >
        <FooterSection :title="section.name" :options="section.options" />
      </template>
    </DynamicFooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerData: {
        siteName: "",
        siteLogoUrl: "",
        socialLinks: [],
        sections: [],
      },
    };
  },
  async fetch() {
    const response = await this.$axios.$get("/api/footer");
    this.footerData = response;
  },
};
</script>
