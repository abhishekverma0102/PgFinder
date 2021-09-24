<template>
  <div class="navbar ">
    <vs-card>
      <template #text>
        <div style="display:flex; margin:-15px;">
          <vs-button shadow color="#000" href="/" >Home</vs-button>
          <vs-button shadow color="black" href="#features" >Features</vs-button>
          <!-- <vs-button shadow color="black">How it works</vs-button> -->
          <vs-button shadow color="black" @click="toPage ">Help</vs-button>


          <!-- <vs-button shadow color="black"> -->
            

          <v-dialog v-model="dialog" width="800" class="login-dialog">
            <template v-slot:activator="{ on, attrs }">
              <vs-button color="#fff" dark v-bind="attrs" v-on="on">
                <span class="color-000"> Login/SignUp</span>
              </vs-button>
            </template>

            <div class="flex">
              <div class="body-image item">
                <img
                  src="https://static-assets-amberstudent.imgix.net/images/login/yuccasofa.jpg"
                  alt=""
                />
              </div>
              <div class="body-main item">
                <div>
                  <h3 class="login-text">Sign Up or Login</h3>
                  <v-text-field
                    label="Email"
                    placeholder="Enter Your Email"
                    outlined
                  >
                  </v-text-field>
                  <v-btn block large color="green" class="login-btn">
                    <span class="color-fff">Continue ></span>
                  </v-btn>
                  <center><p>OR</p></center>
                  <v-btn href="https://www.facebook.com/" block large color="#3f5b96" class="login-btn">
                    <v-icon color="white">mdi-facebook</v-icon>
                    <span class="color-fff">Continue with Facebook</span>
                  </v-btn>
                  <v-btn block large color="#cc392f" class="login-btn">
                    <v-icon color="white" dense>mdi-google</v-icon>
                    <span class="color-fff">Continue with Google</span>
                  </v-btn>
                  <span class="tnc"
                    >By signing in you agree to our <a>privacy policy</a> and
                    <a>Terms & conditions</a></span
                  >
                </div>
              </div>
            </div>
          </v-dialog>
           
          <!-- </vs-button>           -->
        </div>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      
    }
    
  },
  methods: {
    toPage: function(){
    this.$router.push({ name: 'help' });
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 20px 20px;
  transform: translateY(-50%);
  height: max-content;
  position: fixed;
  right: 40px;
  top: 50px;
}

.flex {
  display: flex;
  flex-direction: row;
  /* margin: 150px 200px; */
  border-radius: 10px;
  flex: 50%;
}
.body-main {
  background-color: hsl(0, 0%, 100%);
  width: 50%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex: 50%;
  padding: 40px;
}
.body-image {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  flex: 50%;
  width: 50%;
}
img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex: 50%;
}
.login-dialog {
  filter: blur(10px);
}

.login-text {
  margin: 25px 0px;
}
.login-btn {
  margin-bottom: 20px;
}
.color-fff {
  color: #fff;
}
.tnc {
  font-size: 10px;
}
.color-000 {
  color: #000;
}
</style>
