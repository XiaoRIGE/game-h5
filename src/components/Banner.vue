<template>
  <!-- 在中等屏幕（≥576px ）上显示 -->

  <div
    id="carouselExample"
    class="carousel slide banner d-none d-sm-block"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="bannerList[0].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text">
          <div>{{ bannerList[0].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[1].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text">
          <div>{{ bannerList[1].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[2].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text">
          <div>{{ bannerList[2].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[3].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text">
          <div>{{ bannerList[3].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 切换按钮 -->
    <!-- 在中等屏幕（≥576px ）上显示 -->
    <button
      class="carousel-control-prev d-none d-sm-block"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next d-none d-sm-block"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- 在小屏幕（<576px）上显示 -->
  <div
    id="carouselExample2"
    class="carousel slide banner d-block d-sm-none"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="bannerList[0].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text--sm">
          <div>{{ bannerList[0].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[1].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text--sm">
          <div>{{ bannerList[1].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[2].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text--sm">
          <div>{{ bannerList[2].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img :src="bannerList[3].url" class="d-block w-100" alt="..." />
        <div class="carousel-item__text--sm">
          <div>{{ bannerList[3].title }}</div>
          <div class="round-btn">
            Learn More <img src="../assets/link.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import banner_1 from "@/assets/banner_1.png";
import banner_2 from "@/assets/banner_2.png";
import banner_3 from "@/assets/banner_3.png";
import banner_4 from "@/assets/banner_4.png";

const bannerList = ref([
  {
    url: banner_4,
    title: "EVENT #4",
    id: Math.random(),
  },
  {
    url: banner_3,
    title: "EVENT #3",
    id: Math.random(),
  },
  {
    url: banner_2,
    title: "EVENT #2",
    id: Math.random(),
  },
  {
    url: banner_1,
    title: "EVENT #1",
    id: Math.random(),
  },
]);
</script>

<style lang="scss" scoped>
.banner {
  margin: 2% 32px;
}

// RESET
.carousel-control-prev,
.carousel-control-next {
  opacity: 1;
}
.carousel-item {
  position: relative;
  .carousel-item__text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    font-size: 1.5rem;
    &--sm {
      width: 100%;
      position: absolute;
      text-align: center;
      bottom: 10px;
      left: 0;
      color: #fff;
      font-size: 1.5rem;
    }
  }
  .round-btn {
    font-size: 0.8rem;
    padding: 6px 10px;
    display: inline-block;
    border-radius: 20px;
    border: 1px solid #fff;
  }
}
</style>
