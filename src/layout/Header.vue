<template>
  <div class="header">
    <!-- 左侧按钮 -->
    <div class="img-box w-172">
      <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
      <img
        @click="handleShowPanel"
        src="../assets/menu.svg"
        class="d-none d-sm-block"
        alt=""
        ref="targetElement2"
      />
      <!-- 在小屏幕（<576px）上显示 -->
      <img
        @click="handleShowPanel"
        src="../assets/menu.svg"
        class="d-block d-sm-none"
        alt=""
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        ref="targetElement3"
      />

      <!-- 在中等屏幕（≥576px 且 <992px）上显示 面板信息-->
      <Transition class="d-none d-sm-block" name="fade">
        <div v-if="showPanel" class="panel" ref="targetElement">
          <!-- 用户信息 -->

          <login v-if="!isLogin" />

          <div v-else class="user-box">
            <img src="../assets/avatar.svg" alt="" />
            <div>
              <div class="userName">{{ userInfo.userName }}</div>
              <div class="userId">UID:{{ userInfo.userId }}</div>
            </div>
          </div>

          <div class="menu-box">
            <div @click="goPage('allGames')" class="menu-item border-bo">GACHA GAMES</div>
            <div class="menu-item border-bo">MARKETPLACE</div>
            <div class="menu-item border-bo">LIVE WINNERS HOSTORY</div>
            <div class="menu-item">FAQ</div>
          </div>
          <div @click="goPage('about')" class="desc">ABOUT US</div>
        </div>
      </Transition>

      <!-- 在小屏幕（<576px）上显示 面板信息-->
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

          <h5 class="offcanvas-title" id="offcanvasExampleLabel">TOKYO STUPID GAMES</h5>
          <div></div>
        </div>
        <div class="offcanvas-body">
          <div v-if="showPanel" class="panel-small">
            <!-- 用户信息 -->

            <div v-if="!isLogin" ref="loginElement">
              <login />
            </div>

            <div v-else class="user-box">
              <img src="../assets/avatar.svg" alt="" />
              <div>
                <div class="userName">{{ userInfo.userName }}</div>
                <div class="userId">UID:{{ userInfo.userId }}</div>
              </div>
            </div>

            <div class="menu-box" data-bs-toggle="offcanvas" href="#offcanvasExample">
              <div @click="goPage('allGames')" class="menu-item border-bo">
                GACHA GAMES
              </div>
              <div class="menu-item border-bo">MARKETPLACE</div>
              <div class="menu-item border-bo">LIVE WINNERS HOSTORY</div>
              <div class="menu-item">FAQ</div>
            </div>
            <div
              @click="goPage('about')"
              class="desc"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              ABOUT US
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="title">TOKYO $TUPID GAMES</span>

    <!-- 右侧按钮 -->
    <div class="w-172 d-flex justify-content-end">
      <div class="d-none d-sm-block right-box">
        <!-- 登录按钮 -->
        <login v-if="!isLogin" />
        <!-- 个人账户信息 -->
        <div v-else class="userInfo">
          <!-- 钱包余额 -->
          <div class="d-none d-lg-block">
            <div class="userInfo-item">
              <img src="../assets//header-wallet.svg" class="userInfo-item__img" />
              <span class="userInfo-item__text">10000</span>
              <img src="../assets/header-plus.svg" alt="" />
            </div>
          </div>
          <!-- candy数量 -->
          <div class="d-none d-lg-block">
            <div class="userInfo-item">
              <img src="../assets//header-candy.svg" class="userInfo-item__img" />
              <span class="userInfo-item__text">6868</span>
              <img src="../assets/header-plus.svg" alt="" />
            </div>
          </div>
          <!-- 用户头像 -->
          <img @click="handleShowUserInfo" src="../assets/header-avatar.svg" alt="" />

          <!-- 个人信息弹窗  弹窗面板展示-->
          <Account v-if="showUserInfoModal" />
        </div>
      </div>

      <!-- 用户头像 小屏显示 -->
      <img
        v-if="isLogin"
        @click="handleShowUserInfo"
        src="../assets/header-avatar.svg"
        class="d-block d-sm-none"
      />

      <!-- 个人信息弹窗 底部抽屉展示 -->
      <div
        v-if="showUserInfoModal"
        class="drawer d-block d-sm-none"
        :class="{ open: showUserInfoModal }"
      >
        <div class="drawer-content userInfo-box-small">
          <div class="drawer-header">
            <div class="modal-header flex-end">
              <img @click="handleClose" src="../assets/simpleClose.svg" alt="" />
            </div>
          </div>
          <div class="drawer-body">
            <Account />
          </div>
        </div>
      </div>

      <!-- 蒙层 -->
      <div
        v-if="showUserInfoModal || showPanel"
        class="overlay"
        @click="handleClose"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import login from "@/components/login.vue";

import Account from "@/components/Account.vue";

import { useRouter } from "vue-router";

const router = useRouter();
const goPage = (path) => {
  router.push({ name: `${path}` });
  showPanel.value = false;
};

// 是否展示面板
const showPanel = ref(false);
const handleShowPanel = () => {
  showPanel.value = !showPanel.value;
};

const targetElement = ref(null);
const targetElement2 = ref(null);
const targetElement3 = ref(null);
const loginElement = ref(null);
// 点击区域外事件处理函数
const handleClickOutside = (event) => {
  if (
    targetElement.value &&
    !targetElement.value.contains(event.target) &&
    targetElement2.value &&
    !targetElement2.value.contains(event.target) &&
    targetElement3.value &&
    !targetElement3.value.contains(event.target) &&
    loginElement.value &&
    !loginElement.value.contains(event.target)
  ) {
    console.log("点击了区域外");
    // showPanel.value = false;
  }
};
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.addEventListener("click", handleClickOutside);
});

// 是否已经登录(后续可以使用pinia管理该值)
const isLogin = ref(true);
const userInfo = reactive({
  userName: "Player678",
  userId: "12487124098",
});

// 展示个人信息弹窗
const showUserInfoModal = ref(false);
const handleShowUserInfo = () => {
  showUserInfoModal.value = !showUserInfoModal.value;
};
const handleClose = () => {
  showUserInfoModal.value = false;
  showPanel.value = false;
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
      z-index: 1050;
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
    line-height: 24px;
  }
  .right-box {
    position: relative;
  }
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 8px;
      position: relative;
      background-color: #212121;
      border-radius: 65px;
      height: 48px;
      padding-left: 48px;
      padding-right: 16px;
      text-align: center;
      color: #fff;
      line-height: 48px;
      &__img {
        position: absolute;
        left: 0;
        top: 0;
      }
      &__text {
        margin: 0 8px;
        font-weight: 400;
        font-size: 20px;

        color: #ffffff;
      }
    }
  }
}

// 底部抽屉样式
// 小屏样式
.userInfo-box-small {
  background: #1f0c27;
  border: 1px solid #3f3f3f;
  border-radius: 32px 32px 0 0;
  padding: 24px;
  min-height: 650px;

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .modal-header {
    border: none;
  }
  .title {
    margin-bottom: 40px;
    color: #fff;
    font-weight: 600;
    margin-top: 16px;
    font-size: 16px;
    text-align: center;
  }
}
@media (max-width: 576px) {
  .w-172 {
    width: 72px;
  }
}
@media (min-width: 576px) {
  .w-172 {
    width: 172px;
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
