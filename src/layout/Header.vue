<template>
  <div class="header">
    <div class="img-box">
      <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
      <img
        @click="handleShowPanel"
        src="../assets/menu.svg"
        class="d-none d-sm-block"
        alt=""
      />
      <!-- 在小屏幕（<576px）上显示 -->
      <img
        @click="handleShowPanel"
        src="../assets/menu.svg"
        class="d-block d-sm-none"
        alt=""
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
      />

      <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
      <Transition class="d-none d-sm-block" name="fade">
        <div v-if="showPanel" class="panel">
          <!-- 用户信息 -->

          <!-- <img
            @click="showLogin"
            v-if="!isLogin"
            src="../assets/login.svg"
            alt=""
          /> -->
          <login v-if="!isLogin" />

          <div v-else class="user-box">
            <img src="../assets/avatar.svg" alt="" />
            <div>
              <div class="userName">{{ userInfo.userName }}</div>
              <div class="userId">UID:{{ userInfo.userId }}</div>
            </div>
          </div>

          <div class="menu-box">
            <div class="menu-item border-bo">GACHA GAMES</div>
            <div class="menu-item border-bo">MARKETPLACE</div>
            <div class="menu-item border-bo">LIVE WINNERS HOSTORY</div>
            <div class="menu-item">FAQ</div>
          </div>
          <div class="desc">ABOUT US</div>
        </div>
      </Transition>

      <!-- 在小屏幕（<576px）上显示 -->
      <div
        class="offcanvas offcanvas-start d-block d-sm-none left-panel w-100"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header flex-center">
          <img
            @click="showPanel = false"
            src="../assets/close.svg"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />

          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            TOKYO STUPID GAMES
          </h5>
          <div></div>
        </div>
        <div class="offcanvas-body">
          <!-- <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div> -->
          <div v-if="showPanel" class="panel-small">
            <!-- 用户信息 -->

            <!-- <img v-if="!isLogin" src="../assets/login.svg" alt="" /> -->

            <login v-if="!isLogin" />

            <div v-else class="user-box">
              <img src="../assets/avatar.svg" alt="" />
              <div>
                <div class="userName">{{ userInfo.userName }}</div>
                <div class="userId">UID:{{ userInfo.userId }}</div>
              </div>
            </div>

            <div class="menu-box">
              <div class="menu-item border-bo">GACHA GAMES</div>
              <div class="menu-item border-bo">MARKETPLACE</div>
              <div class="menu-item border-bo">LIVE WINNERS HOSTORY</div>
              <div class="menu-item">FAQ</div>
            </div>
            <div class="desc">ABOUT US</div>
          </div>
        </div>
      </div>
    </div>

    <span class="title">TOKYO $TUPID GAMES</span>

    <div>
      <!-- <img class="d-none d-sm-block" src="../assets/login.svg" alt="" /> -->
      <div class="d-none d-sm-block">
        <login />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import login from "@/components/login.vue";

// 是否展示面板
const showPanel = ref(false);
const handleShowPanel = () => {
  showPanel.value = !showPanel.value;
};

// 是否已经登录
const isLogin = ref(false);
const userInfo = reactive({
  userName: "Player678",
  userId: "12487124098",
});

const isShowLogin = ref(false);
const showLogin = () => {
  isShowLogin.value = true;
};
</script>

<style lang="scss" scoped>
.header {
  height: 76px;
  text-align: center;
  line-height: 76px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-box {
    position: relative;
    .panel {
      position: absolute;
      top: 80px;
      padding: 40px;
      width: 390px;
      height: 544px;
      background: #1f0c27;
      border-radius: 32px;
      border: 1px solid #3f3f3f;
      text-align: left;
      z-index: 9;
      .user-box {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          margin-right: 24px;
        }
        .userName {
          margin-bottom: 16px;
          font-size: 24px;
          font-weight: 600;
          line-height: 20px;
        }
        .userId {
          font-size: 16px;
          line-height: 20px;
        }
      }
      .menu-box {
        margin-top: 40px;
        font-size: 24px;
        color: #fff;
        line-height: 36px;

        .menu-item {
          padding-bottom: 16px;
          padding-top: 16px;
        }
        .border-bo {
          border-bottom: 1px solid #3f3f3f;
        }
      }

      .desc {
        margin-top: 40px;
        font-size: 14px;
        color: #606060;
      }
    }
    .left-panel {
      background: #1f0c27;
      color: #fff;
      .flex-center {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    // 小屏样式
    .panel-small {
      text-align: left;
      .user-box {
        display: flex;
        align-items: center;
        color: #fff;
        img {
          margin-right: 24px;
        }
        .userName {
          margin-bottom: 16px;
          font-size: 18px;
          font-weight: 600;
          line-height: 20px;
        }
        .userId {
          font-size: 14px;
          line-height: 20px;
        }
      }
      .menu-box {
        margin-top: 40px;
        font-size: 14px;
        color: #fff;
        line-height: 20px;

        .menu-item {
          padding-bottom: 16px;
          padding-top: 16px;
        }
        .border-bo {
          border-bottom: 1px solid #3f3f3f;
        }
      }

      .desc {
        margin-top: 40px;
        font-size: 14px;
        color: #606060;
      }
    }
  }
  .title {
    color: #fff;
    font-size: 18px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
