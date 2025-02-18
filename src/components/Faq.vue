<template>
  <div class="faq-box">
    <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
    <div class="faq d-none d-sm-block">
      <div class="title base-border">FAQ</div>

      <div class="item bo-bottom">
        <span>WHAT ARE CANDY POINTS?</span>
        <img src="../assets/plus.svg" alt="" />
      </div>

      <div class="item bo-bottom">
        <span>CAN I SELL MY NFTS?</span>
        <img src="../assets/plus.svg" alt="" />
      </div>

      <div class="item bo-bottom">
        <span>HOW DO I EXCHANGE NFTS FOR REAL WORLD ASSETS?</span>
        <img src="../assets/plus.svg" alt="" />
      </div>

      <div class="item">
        <span>HOW DO I CREATE A NEW COLLECTION?</span>
        <img src="../assets/plus.svg" alt="" />
      </div>
    </div>

    <!-- 在小屏幕（<576px）上显示 -->
    <div class="faq faq-small d-block d-sm-none">
      <div class="title base-border">FAQ</div>

      <div class="item bo-bottom">
        <span>WHAT ARE CANDY POINTS?</span>
        <img src="../assets/plus.svg" class="icon" alt="" />
      </div>

      <div class="item bo-bottom">
        <span>CAN I SELL MY NFTS?</span>
        <img src="../assets/plus.svg" class="icon" alt="" />
      </div>

      <div class="item bo-bottom">
        <span>HOW DO I EXCHANGE NFTS FOR REAL WORLD ASSETS?</span>
        <img src="../assets/plus.svg" class="icon" alt="" />
      </div>

      <div class="item">
        <span>HOW DO I CREATE A NEW COLLECTION?</span>
        <img src="../assets/plus.svg" class="icon" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.faq-box {
  margin: 32px 0;
}
.faq {
  margin: 0 32px;
  padding: 40px;
  //   height: 466px;
  background: rgba(45, 16, 57, 0.3);
  border: 1px solid #3f3f3f;
  border-radius: 32px;

  color: #fff;
  .title {
    display: inline-block;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 600;

    // border-image: linear-gradient(to right, blue, red) 4;
    // border-width: 4px;
    // border-style: solid;
    // border-top: none;
    // border-left: none;
    // border-right: none;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
    font-size: 24px;
  }
  .bo-bottom {
    border-bottom: 1px solid rgba(63, 63, 63, 1);
  }
}

.faq-small {
  margin: 0 32px;
  padding: 40px;
  //   height: 466px;
  background: rgba(45, 16, 57, 0.3);
  border: 1px solid #3f3f3f;
  border-radius: 32px;

  color: #fff;
  .title {
    display: inline-block;
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 600;

    border-image: linear-gradient(to right, blue, red) 4;
    border-width: 4px;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
    font-size: 14px;
  }
  .bo-bottom {
    border-bottom: 1px solid rgba(63, 63, 63, 1);
  }
  .icon {
    margin-left: 16px;
    width: 32px;
    height: 32px;
  }
}
</style>
