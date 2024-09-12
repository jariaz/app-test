export const state = () => ({
  pageContent: {},
});

export const getters = {};

export const mutations = {
  setPageContent(state, data) {
    state.pageContent = data;
  },
};

export const actions = {
  async fetchPageContent({ state, commit }) {
    //
    // Mock API request
    //
    const res = {
      data: {
        headline: "Headline here",
        subHeadline: "Sub headline here",
        bodyTitle: "Supporting Copy here.",
        body: "Eu laborum nulla reprehenderit adipisicing veniam dolor magna. Incididunt nostrud labore sint officia eiusmod ut nisi. Aute ipsum aliquip aliqua incididunt mollit. Ullamco minim ipsum consequat est.",
      },
    };
    commit("setPageContent", res.data);
    return;
  },
};
