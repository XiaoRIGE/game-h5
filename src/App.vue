<script setup>
import Header from "./layout/Header.vue";
import Footer from "./layout/Footer.vue";
</script>

<template>
  <div class="main">
    <Header />
    <div class="main-box container">
      <router-view></router-view>
    </div>
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;

  background: #000000;

  background: url("./assets/bg.png") no-repeat 100% 100%;
  background-size: cover;
  min-height: 100vh;
  min-width: 100%;
  .main-box {
    flex: 1;
  }
}

@media (min-width: 1200px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1200px;
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
