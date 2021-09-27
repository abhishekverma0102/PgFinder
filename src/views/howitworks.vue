<template>
  <div>
    <Navbar />
    <div class="help-image">
      <div class="help-section">
        <center>

        <h1 class="help-heading">How it works</h1>
        <h2 class="help-subheading">We are with you at every step of your journey!</h2>
        <div class="how-it-works-section">
          <a href="/howitworks" class="how-it-works-link">Know how pgFinder works!<v-icon color="" large>mdi-lightbulb</v-icon></a>
        </div>
        </center>
    </div>
      </div>
      <div class="follow-us">
        <div class="follow-us-2">
          <div class="follow-left">
            <span ><a class="path" href="/">Home </a> &nbsp; <span> / </span> &nbsp; <a class="path" href="/help"> How it works</a></span>
          </div>
          <div class="follow-right">
            <p class="social-text"><b>Follow us on:</b></p>&nbsp;
            <v-icon color="pink" large>mdi-instagram</v-icon>&nbsp;
            <v-icon color="purple" large>mdi-facebook</v-icon>&nbsp;
            <v-icon color="blue" large>mdi-linkedin</v-icon>&nbsp;
            <v-icon color="light-blue" large>mdi-twitter</v-icon>&nbsp;
            <v-icon color="red" large>mdi-youtube</v-icon> 
          </div>
        </div>
      </div>

      <!--  -->
    <v-card class="works">
        <v-card class="work">

        </v-card>
    </v-card>
      
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  
};

</script>

<style>
.help-image{
  background:#000000 url(https://static-assets-amberstudent.imgix.net/images/header/3.jpg)
   no-repeat center center;
   background-color: #000000 !important;
    background-size: cover;
    /* margin: 60px 0 0; */
    padding: 100px 0 60px;
    position: relative;
    width: 100%;
}
.help-section{
  color: #fff;
}
.help-heading{
  
    font-size: 3.5em;
    font-weight: 600;
    line-height: 60px;
    margin: 0 auto 10px;
    padding: 0 20px;
}
.help-subheading{
  
    font-size: 1.5em;
    line-height: 32px;
    margin: 10px 0 20px;
    padding: 0 20px;
}
a.how-it-works-link{
  text-decoration: none;
background-color: rgba(0,0,0,.5);
font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #fff;
    display: inline-block;
    margin: 10px auto;
    padding: 10px 20px;
    transition: all .5s;
}
a.how-it-works-link:hover{
 transform: scale(1.1);
}
.follow-us{
  background: #fff;
    border-bottom: 1px solid #e7e7e7;
    min-height: 62px;
    padding: 15px 0;
    margin: 0 40px;
    height: 100%;
}
.follow-us-2{
  height: 100%;
  padding: 0 20px;
}
.follow-left{
  float: left;
  
}
.follow-right{
  float: right;
    height: 100%;
    overflow: hidden;
}
a.path, span {
display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    align-items: stretch;
}
.social-text{
  float: left!important;
  line-height: 35px;

}
.v-application p.social-text{
  margin: 0;
}

/*  */
.work{
    background-image: url(https://static-assets-amberstudent.imgix.net/images/how_it_works/illustrations.jpg);
    background-position: 0 0;
    background-size: 300%;
    display: inline-block;
    height: 160px;
    width: 180px;
    margin: 50px 60px 40px 60px;
}

/*  */

</style>

