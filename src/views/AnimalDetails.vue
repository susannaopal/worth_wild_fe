<script>
  import { RouterLink } from "vue-router";
  import NavBar from '../components/NavBar.vue';
  import { store } from "../store.js";
  export default {
    data() {
      return {
        store
      }
    },
    methods: {
      removeTags(str) {
        const stringCheck = /<\/?[a-z][\s\S]*>/i.test(str)

        if(stringCheck) {
          return str.replace(/(<([^>]+)>)/ig, '');
        }else {
          return str;
        }
      },
      postFavoriteAnimal() {
        const favAnimal = {
          user_id: store.user.id, 
          animal_id: store.animalDetails.id
        }

        return fetch('https://secure-island-06435.herokuapp.com/api/v1/favorites', {
          method: 'POST',
          body: JSON.stringify(favAnimal),
          headers: {'Content-Type': 'application/json'}
        })
          .then(response => response.json())
          .then(data => store.favorites = data.data.attributes.animals)
          .catch(err => store.error = err)
      }     
    }
  }
</script>

<template>
  <body>
    <NavBar />
    <section class="animal-details">
      <h2 v-if="!store.animalDetails" >Your animal is on it's way...</h2>
      <div class="animal-picture-div">
        <div class="scientific-class-div">
          <h2 v-if="store.animalDetails.common_name" class="name">{{ store.animalDetails.common_name.toUpperCase() }}</h2>
          <p v-if="store.animalDetails.phylum" class="scientific-classification">Phylum: {{ store.animalDetails.phylum }}</p>
          <p v-if="store.animalDetails.taxorder" class="scientific-classification">Class: {{ store.animalDetails.taxclass }}</p>
          <p v-if="store.animalDetails.taxorder" class="scientific-classification">Order: {{ store.animalDetails.taxorder }}</p>
          <p v-if="store.animalDetails.family" class="scientific-classification">Family: {{ store.animalDetails.family }}</p>
          <p v-if="store.animalDetails.genus" class="scientific-classification">Genus: {{ store.animalDetails.genus }}</p>
          <p v-if="store.animalDetails.scientific_name" class="scientific-classification">Species: {{ store.animalDetails.scientific_name }}</p>
        </div>
        <img v-if="store.animalDetails.image" :src="store.animalDetails.image" alt="{{`Picture of ${store.animalDetails.common_name}`}}" class="animal-pic"/>
      </div>
      <section class="animal-facts">
        <div class="threats-div">
          <h4>Population:</h4>
          <p v-if="store.animalDetails.pop_size && store.animalDetails.short_term_trend" class="threats-info">Currently there are {{ store.animalDetails.pop_size }} in America. {{ store.animalDetails.short_term_trend }}</p>
          <h4 v-if="store.animalDetails.common_name">Threats to the {{ store.animalDetails.common_name.toUpperCase() }}:</h4>
          <p v-if="store.animalDetails.habitat_comments && store.animalDetails.threat_impact_comments" class="threats-info">{{ store.animalDetails.habitat_comments }} {{ removeTags(store.animalDetails.threat_impact_comments) }}</p>
        </div>
      </section>
    </section>
    <div class="bottom-btns">
      <button v-if="store.isLoggedIn" @click="postFavoriteAnimal()" class="details-btns">Favorite</button>
      <button @click="$router.push('/main')" class="details-btns">Back</button>
    </div>
  </body>
</template>

<style>
  .animal-details {
    background-color: #e9e7dd;
    border: 3px solid #C8C097;
    border-radius: 50px;
    padding: 10px;
    width: 60vw;
    margin-top: 20px;
    z-index: -5;
  }

  .animal-pic {
    width: fit-content;
    border-radius: 25px;
  }

  .animal-picture-div {
    display: flex;
    justify-content: space-around;
    height: 300px;
    border-top-left-radius: 50px;
    background-repeat: no-repeat;
  }

  .scientific-class-div {
    display: flex;
    flex-direction: column;
  }

  .scientific-classification {
    margin: 10px;
    display: flex;
    justify-content: center;
  }
  
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #bccf8f;
    width:fit-content;
    height: 10%;
    padding: 15px;
    border-radius: 25px;
  }

  .bottom-btns {
    display: flex;
  }

  .details-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e9e7dd;
    color: #432a0b;
    border: 3px solid #c8c097;
    box-shadow: 0px 5px #334111;
    border-radius: 50px;
    height: 5vh;
    width: 10vw;
    margin: 10px;
    font-size: larger;
    cursor: pointer;
  }

  .details-btns:hover {
  transition: 0.2s;
  transform: scale(1.1);
  background-color: #556d1d;
  color: #e9e7dd;
}
</style>