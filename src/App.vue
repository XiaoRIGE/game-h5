<script setup>
import Header from "./layout/Header.vue";
import Content from "./layout/Content.vue";
import Footer from "./layout/Footer.vue";
</script>

<template>
  <div class="main">
    <Header class="header" />
    <Content class="content" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main {
  /* Landing page */

  position: relative;
  width: 100vw;

  display: flex;
  flex-direction: column;

  background: #000000;

  background: url("./assets/bg.png") no-repeat 100% 100%;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  .content {
    flex: 1;
  }
}

// .main::before {
//   content: "";
//   position: absolute;
//   top: 76px;
//   right: 0;
//   // bottom: 90%;
//   bottom: 0;
//   left: 0;
//   background: linear-gradient(
//     30deg,
//     rgb(30, 88, 252) 0%,
//     #a427eb 35%,
//     #d914e4 50%,
//     #e10fa3 100%
//   );
//   opacity: 0.2; /* 只影响背景图像 */
// }
</style>
