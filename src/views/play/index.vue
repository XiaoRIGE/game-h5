<template>
  <div class="play">
    <div>
      <video width="100%" class="video-box" autoplay>
        <source src="../../assets/game.mp4" type="video/webm" autoplay />
      </video>
    </div>

    <div class="right-btns">
      <div class="skip">Skip</div>
      <img src="../../assets/mute.svg" alt="" />
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.play {
  padding-top: 80px;

  background-image: url("../../assets/play-bg.png");
  background-size: 100% 100%;
  background: url("../../assets/play-bg.png") 100% 100% cover;
  height: calc(100vh - 152px);
  .video-box {
    max-height: 400px;
  }
  .right-btns {
    margin-top: 60px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .skip {
      margin-right: 16px;
      //   width: 180px;
      padding: 0 40px;
      height: 48px;
      border: 1px solid #ffffff;
      color: #ffffff;
      border-radius: 48px;
      line-height: 48px;
      text-align: center;
    }
  }
}
</style>
