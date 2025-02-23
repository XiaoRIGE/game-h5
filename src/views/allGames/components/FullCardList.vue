<template>
  <div class="full">
    <div class="title base-border">Collection’s full item list</div>

    <div v-for="(item, index) in imgData" :key="index" class="type-item">
      <div>
        <img :src="item.typeImage" class="item-type__image" />
        <span>{{ item.typeName }}</span>
      </div>
      <div class="card-list">
        <div
          v-for="(imgItem, imgIndex) in item.cardList"
          :key="imgIndex"
          class="p-1"
        >
          <div class="img-box mb-3">
            <img :src="imgItem" class="card-list__img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import circle1 from "@/assets/circle1.png";
import circle2 from "@/assets/circle2.png";
import circle3 from "@/assets/circle3.png";
import circle4 from "@/assets/circle4.png";
import circle5 from "@/assets/circle5.png";
import card1 from "@/assets/game-card1-full.png";

const imgData = ref([
  {
    typeName: "SUPER RARE",
    typeImage: circle1,
    cardList: [card1, card1],
  },
  {
    typeName: "RARE",
    typeImage: circle2,
    cardList: [card1, card1, card1],
  },
  {
    typeName: "LESS COMMON",
    typeImage: circle3,
    cardList: [card1, card1, card1, card1],
  },
  {
    typeName: "NORMAL RARE",
    typeImage: circle4,
    cardList: [card1, card1, card1, card1, card1, card1],
  },
  {
    typeName: "LAST ONE",
    typeImage: circle5,
    cardList: [card1, card1],
  },
]);
</script>

<style lang="scss" scoped>
.full {
  text-align: center;
  height: 90vh;
  padding: 20px 0;
  overflow: auto;
  .title {
    // margin: 0 auto;
    margin-bottom: 40px;

    display: inline-block;

    font-weight: 600;
    font-size: 32px;
    line-height: 42px;

    color: #ffffff;
    text-transform: uppercase;
  }
  .type-item {
    color: #fff;
    .item-type__image {
      width: 120px;
    }
    .card-list {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .img-box {
        border-radius: 16px;
        background: #36253d;
        padding: 16px;
        width: 186px;
      }
      .card-list__img {
        width: 100%;
        // width: 154px;
      }
    }
  }
}
@media (max-width: 576px) {
  .full {
    .title {
      display: inline-block;
      font-weight: 600;
      font-size: 20px;
      color: #ffffff;
    }
  }
}
</style>
