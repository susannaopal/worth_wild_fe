import { reactive } from "vue";

export const store = reactive({
  user: {},
  animals: [],
  animalDetails: {},
  animalLoading: true,
  isLoggedIn: false,
  error: '',
})

// export async function fetchAnimalDetails(name, id) {
//   console.log('store fetchAnimalDetails param--', name)
//   const res = await fetch(`https://secure-island-06435.herokuapp.com/api/v1/animal?common_name=${name}&element_code=${id}`)
//         if (!res.ok){
//           this.error = res.statusText
//         } else {
//           const data = await res.json();
//           this.animalDetails = data.data;
//           this.error = '';
//           // console.log('in fetch', this.animalDetails)
//         }
// }