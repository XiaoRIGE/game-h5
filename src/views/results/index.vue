<template>
  <div class="result-box modal-border">
    <Result />

    <div class="footer-btns">
      <div @click="handleAgain" class="btn1 base-round-border">Spin again</div>
      <div @click="goPage" class="btn2">My Inventory</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

import Result from "@/components/Result.vue";

const router = useRouter();

const handleAgain = () => {
  router.push({
    name: "play",
  });
};

const goPage = () => {
  router.push({
    name: "userInfo",
    query: {
      type: 4,
    },
  });
};
</script>

<style lang="scss" scoped>
.result-box {
  margin: 60px 110px;
}

@media (max-width: 576px) {
  .result-box {
    margin: 12px 24px;
  }
}
</style>

<style lang="scss">
.footer-btns {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  .btn1 {
    margin-right: 16px;
    padding: 0 16px;
    font-weight: 600;
    color: #ffffff;
    font-size: 20px;
    display: inline-block;
    background-image: linear-gradient(to right, #1f0c27, #1f0c27),
      linear-gradient(90deg, #1e58fc, #a427eb, #d914e4, #e10fa3, #f10419);
  }
  .btn2 {
    padding: 0 16px;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    border-radius: 48px;
    border: 1px solid #3f3f3f;
  }
}

@media (max-width: 576px) {
  .footer-btns {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .btn1 {
      margin-bottom: 16px;
    }
  }
}
</style>
