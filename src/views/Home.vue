<template>
  <div class="{'blur-content': showModal}">
    <div class="home-card-container">
      <div outlined class="home-card">
        <div class="content-container">
          <div class="col col1">
            <div class="logo">
              pgfinder
            </div>
            <PritiNavbar />

            <h1>Home away from Home</h1>
            <p>
              your student accommodation near top universities across the globe
            </p>
            <div class="search-bar">
              <v-text-field
                solo
                hide-details="auto"
                v-model="address"
            clearable
              ></v-text-field>
              <v-btn
                dark
                x-large
                color="red"
                
                @click="redirectSearch"
                ><v-icon>mdi-magnify</v-icon>search</v-btn
              >
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
              <h3>
                Trustpilot
                <v-icon color="green">mdi-star-circle</v-icon>
                <v-icon color="green">mdi-star-circle</v-icon>
                <v-icon color="green">mdi-star-circle</v-icon>
                <v-icon color="green">mdi-star-circle</v-icon>
                <v-icon color="green">mdi-star-circle</v-icon>
              </h3>
              <p>
                Rated as "Excellent" • Rating 4.8/5 <br />
                • Based 800+ Reviews by students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <v-container class="d-flex align-center flex-column feature-container">
      <h1>Book your perfect accommodation</h1>
      <p>
        Take the hassle out of securing your student home for the best years of
        your life
      </p>
      <div class="booking">
        <div class="column">
          <div class="image-container">
            <img
              class="feature-image"
              src="https://static-assets-amberstudent.imgix.net/images/home_page_icons/feature_icons/feature-1.svg"
              alt="column-feature"
            />
          </div>
          <h3>Fast & Easy Bookings</h3>
          <p>Time is money. Save both when you book with us.</p>
        </div>
        <div class="column">
          <div class="image-container">
            <img
              class="feature-image"
              src="https://static-assets-amberstudent.imgix.net/images/home_page_icons/feature_icons/feature-4.svg"
              alt="column-feature"
            />
          </div>
          <h3>100% Verified Listings</h3>
          <p>What you see is what you get. Our promise.</p>
        </div>
        <div class="column">
          <div class="image-container">
            <img
              class="feature-image"
              src="https://static-assets-amberstudent.imgix.net/images/home_page_icons/feature_icons/feature-3.svg"
              alt="column-feature"
            />
          </div>
          <h3>Price-Match Guarantee</h3>
          <p>Find a lower price and we'll match it. No questions asked.</p>
        </div>
        <div class="column">
          <div class="image-container">
            <img
              class="feature-image"
              src="https://static-assets-amberstudent.imgix.net/images/home_page_icons/feature_icons/feature-2.svg"
              alt="column-feature"
            />
          </div>
          <h3>1-on-1 Expert Assistance</h3>
          <p>Just one call away, we'll be there for you anytime.</p>
        </div>
      </div>
    </v-container> -->
    <div class="add-property" id="features">
      <h1>Agents, Landlords or Property Managers</h1>
      <p>
        Post your listing and market to thousands of students on AmberStudent.
      </p>
      <v-btn color="secondary" large outlined>List propeerty</v-btn>
    </div>
    <Footer />
    <!-- <div class="footer">
      <div class="foot-col">
        <h1>pgfinder</h1>
        <p class="font-weight-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          deserunt quae perferendis excepturi nisi ad maxime facilis debitis
          assumenda. Aut alias neque velit nam totam aperiam soluta magni
          necessitatibus quas.
        </p>
      </div>
      <div class="foot-col">
        <h3>Links</h3>
        <ul class="no-dot l-padding-0 font-weight-200">
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            List property
          </li>
          <li>
            Help
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
      <div class="foot-col social-medialinks">
        <ul class="no-dot l-padding-0 font-weight-200">
          <li>
            <button @click="geocode">
              Test
            </button>
          </li>
          <li><v-icon color="pink">mdi-instagram</v-icon> Instagram</li>
          <li><v-icon color="purple">mdi-facebook</v-icon> Facebook</li>
          <li><v-icon color="blue">mdi-linkedin</v-icon> LinkedIN</li>
          <li><v-icon color="light-blue">mdi-twitter</v-icon> Twitter</li>
          <li><v-icon color="red">mdi-youtube</v-icon> Youtube</li>
          <li>
            Terms
          </li>
          <li>
            Privacy
          </li>
          <li>
            Sitemap
          </li>
        </ul>
      </div>
      <div class="foot-col contact-form">
        <h3>Contact</h3>
        <p class="text-color-grey">Call or WhatsApp us at:</p>
        <a class="a-button" href="#">0110</a>
        <br />
        <a class="a-button" href="#">1254</a>
        <br />
        <a class="a-button" href="#">abhishek@gmail.com</a>
        <br />
        <p class="font-weight-100">
          Our phone lines are active between 9AM - 9PM IST. For any queries you
          can expect a response within 24 hours from our team.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import PritiNavbar from "../components/PritiNavbar.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {
      items: [],
      address: [],
    };
  },
  methods: {
    redirectSearch() {
      console.log(this.address);
      this.$router.push({
        name: "SearchPage",
        params: { address: this.address },
      });
      // this.$router.push(`/search?${this.address}`)
    },
  },
  name: "Home",

  components: {
    PritiNavbar,
    Footer,
  },
};
</script>
<style scoped>
.logo {
  text-shadow: #000000;
  font-size: 48px;
  font-weight: bold;
  transform: translateY(-50%);
  padding: 20px 20px;
  height: max-content;
  position: absolute;
  left: 40px;
  top: 30px;
}

.home-card-container {
  background-color: #0093e9;
  background-image: linear-gradient(
    180deg,
    #0093e9 0%,
    #0093e9 50%,
    #80d0c7 100%
  );

  padding: 0px 40px;
  height: 100%;
  width: 100%;
}

.home-card {
  height: 96vh;
  background-color: #fafafa;
}

.content-container {
  display: grid;
  height: 100%;
  grid-template-rows: 80% 20%;
}

.col1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/home.jpg");
  width: 100%;
  background-size: cover;
  color: white;
}

.search-bar {
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

.col2-divs {
  padding: 10px;
}

.col2-reviews {
  display: grid;
  place-items: center;
}

.booking {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.column {
  margin: 10px;
  display: grid;
  place-items: center;
  text-align: center;
}

.feature-image {
  height: 200px;
}

.feature-container {
  width: 100%;
  min-width: 100%;
  padding: 20px 80px;
}

.add-property {
  text-align: center;
  padding: 80px;
  background-color: #fafafa;
}
</style>
