<template>
  <div>
    <Navbar />
    <div class="help-image">
      <div class="help-section">
        <center>

        <h1 class="help-heading">Help</h1>
        <h2 class="help-subheading">Get answers to commonly asked Questions</h2>
        <div class="how-it-works-section">
          <a href="/howitworks" class="how-it-works-link">Know how pgFinder works!<v-icon color="" large>mdi-lightbulb</v-icon></a>
        </div>
        </center>
    </div>
      </div>
      <div class="follow-us">
        <div class="follow-us-2">
          <div class="follow-left">
            <span ><a class="path" href="/">Home </a> &nbsp; <span> / </span> &nbsp; <a class="path" href="/help"> Help</a></span>
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
<v-card>

<div class="wrapper">
  <v-card class="tlb-margin-40">
    <div class="sidebar">
        <h2>pgFinder</h2>
        <ul>
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
            <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    </v-card>
    <v-card class="margin-all-40">
    <div class="main_content">
        <div class="header">Welcome!! Have a nice day.</div>  
        <div class="info">
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
      </div>
    </div>
    </v-card>
</div>
</v-card>
      <!--  -->
      
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
  background:#000000 url(https://static-assets-amberstudent.imgix.net/images/header/2.jpg)
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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

*{
/*   margin: 0;
  padding: 0;
  box-sizing: border-box; */
  list-style: none;
  text-decoration: none;
/*   font-family: 'Josefin Sans', sans-serif; */
}

body{
   background-color: #f3f5f9;
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  width: 200px;
  height: 100%;
  background: #ffffff;
  padding: 30px 0px;
  /* position: fixed; */
}

.wrapper .sidebar h2{
  color: rgb(0, 0, 0);
  /* text-transform: uppercase; */
  text-align: center;
  margin-bottom: 30px;
}

.wrapper .sidebar ul li{
  padding: 5px;
  border-bottom: 1px solid #000000;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
}    

.wrapper .sidebar ul li a{
  color: #000000;
  display: block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;
}

.wrapper .sidebar ul li:hover{
  background-color: #f1ecec;
}
    
.wrapper .sidebar ul li:hover a{
  color: rgb(0, 0, 0);
}
 
.wrapper .sidebar .social_media{
  /* position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); */
  display: flex;
}

.wrapper .sidebar .social_media a{
  display: block;
  width: 40px;
  background: #ffffff;
  height: 40px;
  line-height: 45px;
  text-align: center;
  margin: 0 5px;
  color: #000000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.wrapper .main_content{
  width: 100%;
  /* margin-left: 200px; */
}

.wrapper .main_content .header{
  padding: 20px;
  background: #fff;
  color: #717171;
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info{
  margin: 20px;
  color: #717171;
  line-height: 25px;
}

.wrapper .main_content .info div{
  margin-bottom: 20px;
}

.v-application .info{
  background-color: #ffffff !important;
    border-color: #ffffff !important;
}

@media (max-height: 500px){
  .social_media{
    display: none !important;
  }
}
.social_media{
  display: flex;
}
.margin-all-40{
  margin: 40px;
}
.tlb-margin-40{
  margin: 40px 0 40px 40px;
}
/*  */

</style>

