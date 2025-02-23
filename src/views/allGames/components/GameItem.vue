<template>
  <div class="game-item">
    <img :src="game.gameImageUrl" class="game-img" />
    <div class="game-item-info">
      <div class="game-name">{{ game.gameName }}</div>
      <div class="game-desc">
        <div>
          <span>
            <img src="../../../assets/event-clock.svg" alt="" />
            <span class="fb"> Time left: </span>
            <span> {{ game.timeLeft }} </span>
          </span>
        </div>
        <div>
          <span>
            <img src="../../../assets/event-candy.svg" alt="" />

            <span class="fb"> {{ game.ticketValue }} </span>
            <span>/ticket </span>
          </span>
        </div>
      </div>
      <div @click="goPage" class="btn base-round-border">Play</div>
    </div>
  </div>
</template>
<script setup>
import game1 from "@/assets/game1.gif";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  game: Object,
  default: () => {
    return {
      id: 1,
      gameName: "DRAGON BALL FIGURE COLLECTION",
      timeLeft: "x days x hours",
      ticketValue: 100,
      gameImageUrl: game1,
    };
  },
});

const goPage = () => {
  router.push({
    name: "gameDetail",
    query: { id: props.game.id },
  });
};
</script>

<style lang="scss" scoped>
.game-item {
  border-radius: 24px;
  padding: 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(30, 88, 252, 0.1) 0%,
    rgba(164, 39, 235, 0.1) 20%,
    rgba(217, 20, 228, 0.1) 40%,
    rgba(225, 15, 163, 0.1) 60%,
    rgba(241, 4, 25, 0.1) 100%
  );
  .game-img {
    width: 100%;
    border-radius: 12px;
  }
  &-info {
    text-align: left;
    color: #fff;
    .game-name {
      margin-top: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 31px;
      text-transform: uppercase;
      color: #ffffff;
    }
    .game-desc {
      font-size: 16px;
    }
    .fb {
      font-weight: 600;
    }
    .btn {
      margin-top: 24px;
      width: 100%;
      line-height: 34px;
      box-sizing: border-box;
      background-image: linear-gradient(to right, #1f0c27, #1f0c27),
        linear-gradient(90deg, #1e58fc, #a427eb, #d914e4, #e10fa3, #f10419);
    }
  }
}
</style>
