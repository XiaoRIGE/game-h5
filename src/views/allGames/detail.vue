<template>
  <div class="detail mx-4">
    <div class="row">
      <!-- 图片信息 -->
      <div class="col-12 col-sm-6 col-md-6">
        <div class="img-box">
          <img :src="currentImage" class="big-img" />
          <div class="small-list">
            <div
              v-for="(item, index) in imgList"
              :key="index"
              class="small-img__item"
            >
              <img :src="item" @click="changeCurrentImage(item)" />
            </div>

            <div class="small-img__item border-item">
              <div @click="showFull" class="tips-text">
                Collection's full item list
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 文字信息 + 按钮 -->
      <div class="col-12 col-sm-6 col-md-6">
        <div class="info-box">
          <div class="title">DRAGON BALL FIGURE COLLECTION</div>
          <div class="user-box">
            <div class="left">
              <img src="../../assets/avatar.svg" class="avatar" />
              <span>Player678</span>
            </div>
            <div class="right">FIGURE</div>
          </div>
          <div class="desc">
            This is a gacha collection featuring figures from "Dragon Ball," one
            of the most popular and legendary manga and anime series in the
            world. The collection includes high-quality figures that faithfully
            recreate the characters with detailed sculpting and coloring, as
            well as a wide range of items, including vinyl figures of Dragon
            Ball that are now difficult to find.
          </div>
          <div class="time">
            <div class="time-text">
              <img src="../../assets/event-clock.svg" class="me-1" />
              <span class="fw-bolder me-1">Time left:</span>
              <span>x days x hours</span>
            </div>
            <div class="time-bar">
              <div class="bar"></div>
            </div>
            <div class="ticket-text">
              <div class="left">
                <img src="../../assets/event-candy.svg" class="me-1" />
                <span class="fw-bolder me-1">100</span>
                <span> /ticket</span>
              </div>
              <div class="right">
                <img src="../../assets/event-ticket.svg" class="me-1" />
                <span class="fw-bolder me-1">611</span>
                <span> /1061</span>
              </div>
            </div>
          </div>
          <div class="select">
            <div class="select-title">SELECT TICKET AMOUNT</div>
            <div class="select-box">
              <div
                @click="handleSwitchCurrentTicketValue(1)"
                class="select-item me-2"
                :class="currentTicketValue === 1 ? 'active' : ''"
              >
                <div class="fw-bolder">Ticket x 1</div>
                <div>
                  <img src="../../assets/event-candy.svg" alt="" />
                  <span>100</span>
                </div>
              </div>
              <div
                @click="handleSwitchCurrentTicketValue(10)"
                class="select-item me-2"
                :class="currentTicketValue === 10 ? 'active' : ''"
              >
                <div class="fw-bolder">Ticket x 10</div>
                <div>
                  <img src="../../assets/event-candy.svg" alt="" />
                  <span>1,000</span>
                </div>
              </div>
              <div
                @click="handleSwitchCurrentTicketValue(100)"
                class="select-item"
                :class="currentTicketValue === 100 ? 'active' : ''"
              >
                <div class="fw-bolder">Ticket x 100</div>
                <div>
                  <img src="../../assets/event-candy.svg" alt="" />
                  <span>10,000</span>
                </div>
              </div>
            </div>
            <div class="play_btn border-item">PURCHASING TICKET & PLAY</div>
          </div>
        </div>
      </div>
    </div>

    <Modal v-model="showModal">
      <FullCardList />
    </Modal>
  </div>
</template>
<script setup>
import { ref } from "vue";
import game1 from "@/assets/game1.gif";
import card1 from "@/assets/game-card1.png";
import card2 from "@/assets/game-card2.png";
import card3 from "@/assets/game-card3.png";
import Modal from "@/components/Modal.vue";
import FullCardList from "./components/FullCardList.vue";

const imgList = ref([game1, card1, card2, card3]);

const currentImage = ref(game1);
const changeCurrentImage = (img) => {
  currentImage.value = img;
};

// 当前选中的票数
const currentTicketValue = ref(1);
const handleSwitchCurrentTicketValue = (value) => {
  currentTicketValue.value = value;
};

// 展示全部卡片弹窗
const showModal = ref(false);
const showFull = () => {
  showModal.value = true;
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 40px;
  margin: 0 110px;
  background: #1f0c27;
  border-radius: 32px;
  //   图片信息样式
  .img-box {
    .big-img {
      width: 100%;
      height: auto;
      background-color: #fff;
      border-radius: 12px;
    }
    .small-list {
      margin-top: 32px;
      height: 92px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .small-img__item {
        width: 19%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        background-color: #36253d;
        border-radius: 12px;
        color: #fff;
        // padding: 16px 20px;
        img {
          width: 100%;
          //   height: auto;
          border-radius: 12px;
        }
        .tips-text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          padding: 0 8px;
          word-break: break-all;
        }
      }
    }
  }
  //   右侧文字信息样式
  .info-box {
    .title {
      margin-bottom: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      /* identical to box height */
      text-transform: uppercase;

      color: #ffffff;
    }
    .user-box {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      .left {
        .avatar {
          margin-right: 10px;
          width: 40px;
          height: 40px;
        }
      }
    }
    .desc {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 0.8px;

      color: #ffffff;
    }
    .time {
      color: #fff;
      &-bar {
        position: relative;
        margin-top: 24px;
        height: 8px;
        background: #3f3f3f;
        border-radius: 8px;
        .bar {
          position: absolute;
          left: 0;
          top: 0;
          width: 20%;
          height: 100%;
          border-radius: 8px;
          background-image: linear-gradient(
            90deg,
            #1e58fc,
            #a427eb,
            #d914e4,
            #e10fa3,
            #f10419
          );
        }
      }
      .ticket-text {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .select {
      margin-top: 40px;
      color: #fff;
      &-title {
        margin-bottom: 16px;
        font-size: 16px;
        color: #fff;
        font-weight: 600;
      }
      .select-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .select-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 16px;
        border: 1px solid #3f3f3f;
        border-radius: 16px;
        // height: 72px;
      }
      .active {
        border-color: #fff;
      }
      .play_btn {
        margin-top: 16px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        line-height: 48px;
        border-radius: 24px;
        text-align: center;
      }
    }
  }
  .border-item {
    border: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right, #1f0c27, #1f0c27),
      linear-gradient(90deg, #1e58fc, #a427eb, #d914e4, #e10fa3, #f10419);
  }
}

@media (max-width: 576px) {
  .select-box {
    display: block !important;
  }
  .select-item {
    margin-bottom: 8px;
  }
}
</style>
