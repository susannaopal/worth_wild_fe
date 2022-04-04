import { reactive } from "vue";

export const store = reactive({
  user: {},
  favorites: [],
  animals: [],
  animalDetails: {},
  animalLoading: true,
  isLoggedIn: false,
  error: '',
})

