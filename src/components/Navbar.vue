<template>
  <header class="site-header">
      <div class="wrapper site-header__wrapper">
        <div class="black-hover">
        <a href="/" class="brand"><h1>pgfinder</h1></a>
        </div>
        <div class="search">
            <!-- <button class="search__toggle" aria-label="Open search">
              Search
            </button> -->
            <form class="search__form" action="">
              <label class="sr-only" for="search">Search</label>
              <v-icon color="white">mdi-magnify</v-icon>
              <input
                type="search"
                name=""
                id="search"
                class="input-search"
                placeholder ="What's on your mind?"
              />
            </form>
          </div>
        <nav class="nav">
          <button class="nav__toggle" aria-expanded="false" type="button">
            menu
          </button>
          <ul class="nav__wrapper">
            <li class="nav__item"><a href="/">Home</a></li>
            <li class="nav__item"><a href="#">About</a></li>
            <li class="nav__item"><a href="#">Services</a></li>
            
            <li class="nav__item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
.brand {
  font-weight: bold;
  font-size: 30px; }

.site-header {
  position: relative;
  background-color: rgb(29, 28, 28); 
  }

.black-hover{
  transition: transform .5s;
}

.black-hover:hover{
  transform: scale(1.1);
  }

.site-header__wrapper {
  padding-top: 1rem;
  padding-bottom: 1rem; }
  @media (min-width: 600px) {
    .site-header__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0;
      padding-bottom: 0; } }
@media (min-width: 600px) {
  .nav__wrapper {
    display: flex; } }

@media (max-width: 599px) {
  .nav__wrapper {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: -1;
    background-color: #d9f0f7;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-out, opacity 0.3s ease-out; }
    .nav__wrapper.active {
      visibility: visible;
      opacity: 1;
      transform: translateY(0); } }

.nav__item a {
  display: block;
  padding: 1.5rem 1rem; }

.nav__toggle {
  display: none; }
  @media (max-width: 599px) {
    .nav__toggle {
      display: block;
      position: absolute;
      right: 1rem;
      top: 1rem; } }

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
.wrapper {
  max-width: 1140px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: "Roboto", sans-serif;
}


.sr-only {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 10px;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.input-search{
  width: 300px;
  background-color: #fff;
  padding: 5px 30px;
}

/* .button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  color: #fff;
  background-color: #2fa0f6;
  min-width: 120px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
} */

/* .button svg {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  fill: #fff;
} */


*{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section
{display:block}
body
{line-height:1}
ol,ul
{list-style:none}
blockquote,q
{quotes:none}
blockquote:before,blockquote:after,q:before,q:after
{content:'';content:none}
table
{border-collapse:collapse;border-spacing:0}

</style>
