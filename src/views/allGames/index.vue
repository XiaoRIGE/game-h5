<template>
  <div class="all">
    <div class="title base-border">ALL GAMES</div>
    <div class="game-list container">
      <div class="row">
        <div
          v-for="game in games"
          :key="game.id"
          class="col-12 col-sm-6 col-md-4 mb-4"
        >
          <GameItem :game="game"> </GameItem>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import GameItem from "./components/GameItem.vue";
import game1 from "@/assets/game1.gif";
import game2 from "@/assets/game2.gif";
import game3 from "@/assets/game3.gif";

const games = ref([
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game1,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game2,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game3,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game1,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game2,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game3,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game1,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game2,
  },
  {
    id: 1,
    gameName: "DRAGON BALL FIGURE COLLECTION",
    timeLeft: "x days x hours",
    ticketValue: 100,
    gameImageUrl: game3,
  },
]);
</script>

<style lang="scss" scoped>
.all {
  text-align: center;
  .title {
    margin: 60px 0;
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;

    color: #ffffff;
  }
  .game-list {
    margin: 0 auto;
  }
}
</style>
