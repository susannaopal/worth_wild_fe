import { reactive } from "vue";

export const store = reactive({
  user: {},
  animals: [],
  animalLoading: true,
  isLoggedIn: false,
  currentPage: window.location.pathname
})