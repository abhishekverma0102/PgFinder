<template>
  <div class="header-container">
    <ul class="header" id="navbar">
      <li>
        <a class="navlinks active" href="#home" onclick="changeActive(0)"
          >Home</a
        >
      </li>
      <li>
        <div id="drop-type">
          <a class="navlinks" href="#type-page" onclick="changeActive(1)"
            >Features</a>
        </div>
      </li>
      <li>
        <a class="navlinks" href="#evil-page" onclick="changeActive(2)"
          >How it works</a>
      </li>
      <li>
        <a class="navlinks" href="#demons" onclick="changeActive(3)">Help</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Navigation bar */
.header-container {
  display: flex;
  justify-content: flex-end;
  background-color: #838af0;
  position: relative;
  z-index: 500;
}

#navbar {
  margin: 0px;
  position: relative;
  z-index: 600;
  top: 0%;
  width: max-content;
  padding-left: 10px;
}

/* #navbar:hover {
  transition: box-shadow 0.3s; */
  /* box-shadow: 0px 2px 10px 0px #000000b2; */
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.75), #ffffff00); */
/* } */

#navbar li {
  list-style-type: none;
  float: left;
  text-shadow: 0.4px 0.4px #000;
}

#navbar li:hover {
  background-color: #00000038;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0px 2px 10px 0px #00000049;
}
#navbar a {
  display: block;
  color: rgb(255, 255, 255);
  padding: 14px 16px;
  text-decoration: none;
  font-size: 125%;
  font-weight: bold;
}
#navbar a:hover {
  border-bottom: solid 2px rgba(255, 255, 255, 0);
}
#navbar a.active {
  /* background-color: #000000b0; */
  font-weight: bold;
  border-bottom: solid 2px #ffffff;
}

/* type dropdown */
.dropdown-type {
  display: none;
  position: absolute;
  top: 100%;
  z-index: 500;
  background: #00000088;
  box-shadow: 0px 5px 10px 0px #0000004a;
}
.dropdown-type a {
  display: block;
  border-left: solid 2px rgba(0, 0, 0, 0) !important;
}
.dropdown-type a:hover {
  border-color: rgb(255, 255, 255) !important;
  border-bottom: none !important;
}

#drop-type {
  position: relative;
}

#drop-type:hover .dropdown-type {
  display: block;
}

.dropdown-type:hover {
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), #ffffff00); */
  box-shadow: 0px 5px 10px 0px #0000004a;
}
</style>
