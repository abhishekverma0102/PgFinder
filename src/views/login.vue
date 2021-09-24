<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800" class="login-dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Login/SignUp
        </v-btn>
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
            <v-text-field label="Email" placeholder="Enter Your Email" outlined>
            </v-text-field>
            <v-btn block large color="green" class="login-btn">
              <span class="color-fff">Continue ></span>
            </v-btn>
            <center><p>OR</p></center>
            <v-btn
              block
              large
              color="#3f5b96"
              class="login-btn"
              href="https://www.facebook.com"
            >
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
            <vs-button>hello my name is abhishek</vs-button>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
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
  height: 200px;
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
</style>
