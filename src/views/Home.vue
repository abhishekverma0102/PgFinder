<template>
  <div>
    <Navbar />
    <v-card outlined class="home-card">
      <div class="content-container">
        <div class="col col1">
          
          <h1>Home away from Home</h1>
          <p>
            your student accommodation near top universities across the globe
          </p>
          <div class="search-bar">
            <v-combobox solo dense hide-details="auto"></v-combobox>
            <v-btn dark  color="red"><v-icon>mdi-magnify</v-icon>search</v-btn> 
          </div>
        </div>
        <div class="col col2">
          <div class="col2-divs col2-beds ">
            <v-icon x-large color="red">mdi-bed-queen</v-icon>
            <h5>1M+ Beds</h5>
            <p>Book your perfect place from our vast selection of listings</p>
          </div>
          <div class="col2-divs col2-universities">
            <v-icon x-large color="red">mdi-school</v-icon>
            <h5>800+ Universities</h5>
            <p>Find the best student homes near major universities</p>
          </div>
          <div class="col2-divs col2-cities">
            <v-icon x-large color="red">mdi-city</v-icon>
             <h5>250+ Cities</h5>
            <p>We have a strong presence in top cities all over the world</p>
          </div>
          <div class="col2-divs col2-reviews">
            <h3>Trustpilot
            <v-icon color="green">mdi-star-circle</v-icon>
            <v-icon color="green">mdi-star-circle</v-icon>
            <v-icon color="green">mdi-star-circle</v-icon>
            <v-icon color="green">mdi-star-circle</v-icon>
            <v-icon color="green">mdi-star-circle</v-icon></h3>
            <p>Rated as "Excellent" • Rating 4.8/5  <br>
            • Based 800+ Reviews by students</p>
          </div>
        </div>
      </div>

    </v-card>
    
    <v-container class="d-flex align-center flex-column">
      <h1>Book your perfect accommodation</h1>
<p>Take the hassle out of securing your student home for the best years of your life</p>
      <div class="booking">
        <div class="column"><h3>Fast & Easy Bookings</h3><p>Time is money. Save both when you book with us.</p></div>
        <div class="column"><h3>100% Verified Listings</h3><p>What you see is what you get. Our promise.</p></div>
        <div class="column"><h3>Price-Match Guarantee</h3><p>Find a lower price and we'll match it. No questions asked.</p></div>
        <div class="column"><h3>1-on-1 Expert Assistance</h3><p>Just one call away, we'll be there for you anytime.</p></div>
      </div>
    </v-container>

  </div>


</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",

  components: {
    Navbar,
  },
};
</script>
<style scoped>
.home-card {
  height: 80vh;
  margin: 10px 100px;
  padding: 32px;
}

.content-container {
  display: grid;
  height: 100%;
  grid-template-rows: 80% 20%;
}

.col {
  
}



.col1{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/home.jpg");
  
  background-size:cover;
  color: white;
}

.search-bar{
  display: grid;
  grid-template-columns: 80% 20%;
  width: 40%;
  align-items: center;
  padding: 8px;
}

.col2 {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

}

.col2-divs{
  
  padding: 10px;
  
}

.col2-reviews{
  display: grid;
  place-items: center;
}

.booking {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.column {
  padding: 20px;
}
</style>
