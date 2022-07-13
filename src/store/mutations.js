const mutations = {
  HANDLE_SHOW_DROPDOWN(state, payload) {
    state.system.map((value) => {
      if (value.id === payload) {
        value.status = !value.status;
      }
    });
  },
};

export default mutations;
