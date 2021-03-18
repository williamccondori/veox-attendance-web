export const state = () => ({
  isDarkTheme: false,
  isLoading: false,
  isPrincipalPanel: false,
})

export const mutations = {
  ['SET_IS_DARK_THEME']: (state, payload) => (state.isDarkTheme = payload),
  ['SET_IS_LOADING']: (state, payload) => (state.isLoading = payload),
  ['SET_IS_PRINCIPAL_PANEL']: (state, payload) =>
    (state.isPrincipalPanel = payload),
}
