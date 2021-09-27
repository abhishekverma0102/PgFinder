<template>
  <div>
    <Navbar />
    <v-card>
      <div class="pg-data">
        <div class="col col1">
          <v-card class="card">
            <div class="places-found"> 
              <p>India / _____</p>
              <h3>Student housing</h3>
              <p>found __ places</p>
            </div>
          </v-card>
          <div class="found-places">
            <v-card class="card">
              <div class="right-p-40">
                <v-btn block color="white" class="login-btn">
                  <span class="mdi mdi-access-point"></span>

                  <span class="color-fff">Blog</span>
                </v-btn>
                <v-btn block color="white" class="login-btn">
                  <span class="mdi mdi-cellphone"></span>

                  <span class="color-fff">Call</span>
                </v-btn>
                <v-btn block color="white" class="login-btn">
                  <span class="mdi mdi-chart-arc"></span>

                  <span class="color-fff">Support</span>
                </v-btn>
              </div>
            </v-card>
            <v-card class="card">
              <div class="places">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  odit temporibus, explicabo labore asperiores quas aperiam,
                  dicta tenetur hic repellendus quis est qui necessitatibus?
                  Nulla, dignissimos. Exercitationem sit sed expedita.
                </p>
              </div>
            </v-card>
          </div>
        </div>

        <div class="places-results">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            deserunt autem soluta incidunt aut nesciunt in ipsam harum?
            Voluptatibus alias libero, fugit ab inventore laborum veniam dolore
            ipsum debitis dolorum!
          </p>
        </div>
      </div>
    </v-card>
    <div class="search">
      <input type="text" v-model="address" required />
      <button v-on:click="showAddress">submit</button>
      <div>
        <p>address: {{ address }}</p>
      </div>
      <v-data-table
        :headers="headers"
        :items="searchResult"
        :items-per-page="20"
        class="elevation-1"
        v-if="showTable"
      ></v-data-table>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  
  data() {
    return {
      
      
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Rating", value: "rating" },
        { text: "Address", value: "vicinity" },
        { text: "Website", value: "website" },
        { text: "Phone no.", value: "formatted_phone_number" },
      ],
      address:this.$route.params.address,
      searchResult: null,
      showTable: false,
    };
  },
  methods: {
    async showAddress() {
      const response = await axios.get(
        `http://localhost:3000/pgfinder/${this.address}`
      );
      this.searchResult = response.data;
      this.showTable = true;
    },
  },

  components: {
    Navbar,
    Footer,
  },
  async mounted(){
    await this.showAddress()
    console.log(this.searchResult)

  }

};
</script>

<style scoped>
.pg-data {
  display: grid;
  grid-template-columns: 70% 30%;
  margin-left: 20px;
}

.col {
  padding: 20px;
}

.col1 {
  display: grid;
  grid-template-rows: 150px auto;
}
.right-p-40 {
  padding-right: 40px;
}

.found-places {
  display: grid;
  grid-template-columns: 200px auto;
}

.places-found {
  padding: 20px;
}
.places {
  padding: 20px;
}

.login-btn {
  margin: 20px;
  max-width: 80%;
  text-align: left;
  /* overflow:hidden !important; */
}
span.v-btn__content {
  justify-content: left !important;
}
</style>
