<template>
  <div class="userInfo-box">
    <div class="user-name">
      <img src="../assets/avatar.svg" width="80px" />
      <span class="user-name__text">Player678</span>
      <img src="../assets/gold.svg" alt="" />
    </div>

    <div class="first-modal">
      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-wallet.svg" alt="" />
          <div class="detail-box">
            <div>wallet1</div>
            <div class="desc-info">xxx...</div>
          </div>
        </div>
        <div class="right">1.0001 SOL</div>
      </div>

      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-candy.svg" alt="" />
          <div class="detail-box">
            <div>Candy balance</div>
          </div>
        </div>
        <div class="right">
          <div class="candy-btn d-flex align-items-center">
            <span>6868 </span>

            <img src="../assets/plus-mini.svg" style="margin-left: 8px" />
          </div>
        </div>
      </div>
    </div>

    <div class="second-modal">
      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-nft.svg" alt="" />
          <div class="detail-box">
            <div>My NFTs</div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/arrow-right.svg" alt="" />
        </div>
      </div>
      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-miss.svg" alt="" />
          <div class="detail-box">
            <div>Missions & Rewards</div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/arrow-right.svg" alt="" />
        </div>
      </div>
      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-setting.svg" alt="" />
          <div class="detail-box">
            <div>Setting</div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/arrow-right.svg" alt="" />
        </div>
      </div>
      <div class="money-item d-flex justify-content-between align-items-center">
        <div class="left d-flex justify-content-between align-items-center">
          <img src="../assets/header-warnning.svg" alt="" />
          <div class="detail-box">
            <div>Support (Go to our Discord)</div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="footer-box">
      <span>Logout</span>
      <img src="../assets/log-out.svg" alt="" />
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.userInfo-box {
  position: absolute;
  top: 80px;
  right: 40px;
  padding: 40px;
  background: #1f0c27;
  border-radius: 32px;
  border: 1px solid #3f3f3f;
  z-index: 9999;
  text-align: left;
  .user-name {
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__text {
      font-weight: 600;
      font-size: 24px;
    }
  }
  .first-modal {
    padding-bottom: 40px;
    border-bottom: 1px solid #3f3f3f;
  }
  .money-item {
    margin-bottom: 16px;
    color: #fff;
    width: 360px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 400;
    .detail-box {
      margin-left: 8px;
    }
    .desc-info {
      font-size: 16px;
      color: #606060;
    }
    .candy-btn {
      padding: 14px 12px;
      border-radius: 48px;
      background-color: #212121;
    }
    .left > img {
      width: 48px;
    }
  }
  .second-modal {
    margin-top: 40px;
  }
  .footer-box {
    text-align: center;
    font-size: 14px;
    color: #606060;
    img {
      margin-left: 8px;
    }
  }
}

@media (max-width: 576px) {
  .userInfo-box {
    position: relative;
    top: 0;
    right: 0;
    border: none;
    padding: 0 16px;
    .first-modal {
      margin-bottom: 24px;
      padding-bottom: 0;
    }
    .second-modal {
      margin-top: 24px;
    }
    .money-item {
      width: 100%;
      font-size: 16px;
      .left > img {
        width: 32px;
      }
    }
  }
}
</style>
