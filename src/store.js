import { reactive } from "vue";

export const store = reactive({
  user: {},
  animals: [],
  animalDetails: {},
  animalLoading: true,
  isLoggedIn: false,
  error: '',
})

