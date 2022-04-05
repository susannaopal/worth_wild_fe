import { reactive } from "vue";

export const store = reactive({
  user: {},
  favorites: [],
  animals: [],
  animalDetails: {},
  animalOfDay: {},
  animalLoading: true,
  isLoggedIn: false,
  error: '',
})

