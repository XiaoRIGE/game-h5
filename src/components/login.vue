<template>
  <div>
    <!-- 触发登录按钮 -->
    <img src="../assets/login.svg" @click="showLogin = true" />

    <!-- 大屏：模态框 -->
    <div v-if="showLogin && !showVerificationModal" class="d-none d-sm-block">
      <div class="modal" :class="{ 'd-block': showLogin }" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content login-box">
            <div class="modal-header flex-end">
              <img
                @click="handleClose"
                src="../assets/simpleClose.svg"
                alt=""
              />
            </div>
            <!-- <div class="title">TOKYO STUPID GAME$</div> -->
            <div class="title">
              <img src="../assets/title.png" class="title-img" />
            </div>
            <div class="modal-body form-box">
              <!-- by email -->
              <div class="email-form base-form">
                <div class="base-form__title">Login using email</div>
                <input
                  class="form-control email-input"
                  type="text"
                  placeholder="Enter your email "
                  aria-label="default input example"
                />

                <div @click="handleNext" class="round-btn base-round-border">
                  Continue
                </div>

                <div class="flex-center">
                  <div class="google-btn">
                    <img src="../assets/google.svg" alt="" />
                    Sign in with Google
                  </div>
                </div>
              </div>

              <div class="line column">
                <div class="line-item"></div>
                <span>OR</span>
                <div class="line-item"></div>
              </div>

              <!-- by web3 -->
              <div class="web3-form base-form">
                <div class="base-form__title">
                  Choose your web3 wallet to log in
                </div>
                <div class="d-flex flex-column">
                  <img src="../assets/button-soft-p.svg" alt="" />
                  <img src="../assets/button-soft-s.svg" alt="" />
                  <img src="../assets/button-soft-b.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="footer">
              By logging in I agree with
              <span style="color: #3052fa">Terms & Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 小屏：底部抽屉 -->
    <div
      v-if="!showVerificationModal"
      class="drawer d-block d-sm-none"
      :class="{ open: showLogin }"
    >
      <div class="drawer-content login-box-small">
        <div class="drawer-header">
          <div class="modal-header flex-end">
            <img @click="handleClose" src="../assets/simpleClose.svg" alt="" />
          </div>
          <!-- <div class="title">TOKYO STUPID GAME$</div> -->
          <div class="title">
            <img src="../assets/title.png" class="title-img" />
          </div>
        </div>
        <div class="drawer-body">
          <!-- by email -->
          <div class="email-form base-form">
            <div class="base-form__title">Login using email</div>
            <input
              class="form-control email-input"
              type="text"
              placeholder="Enter your email "
              aria-label="default input example"
            />

            <div @click="handleNext" class="round-btn base-round-border">
              Continue
            </div>

            <div class="flex-center">
              <div class="google-btn">
                <img src="../assets/google.svg" alt="" />
                Sign in with Google
              </div>
            </div>
          </div>

          <div class="line">
            <div class="line-item"></div>
            <span>OR</span>
            <div class="line-item"></div>
          </div>

          <!-- by web3 -->
          <div class="web3-form base-form">
            <div class="base-form__title">
              Choose your web3 wallet to log in
            </div>

            <div class="d-flex justify-content-between">
              <img src="../assets/button-soft-mini-p.svg" alt="" />
              <img src="../assets/button-soft-mini-s.svg" alt="" />
              <img src="../assets/button-soft-mini-b.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="footer">
          By logging in I agree with Terms & Privacy Policy
        </div>
      </div>
    </div>

    <!-- 蒙层 -->
    <div v-if="showLogin" class="overlay" @click="handleClose"></div>

    <!-- 安全验证弹框 -->
    <div v-show="showVerificationModal" class="verification-modal">
      <div class="d-flex align-items-center justify-content-end">
        <img @click="handleCancel" src="../assets/simpleClose.svg" alt="" />
      </div>
      <div class="modal-title">Security verification</div>
      <!-- 第一步验证 -->
      <div v-show="!showCodeModal">
        <div class="content"></div>
        <div @click="handleVerify" class="base-round-border m-40">Verify</div>
      </div>
      <!-- 第二步验证 -->
      <div v-show="showCodeModal">
        <div class="tips">Please enter the code we’ve sent to your email</div>
        <VerificationCodeInput />
        <div @click="handleSubmit" class="base-round-border m-40">Submit</div>
        <div class="blue-text">Resend code</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VerificationCodeInput from "@/components/VerificationCodeInput.vue";

const showLogin = ref(false);
const handleClose = () => {
  showLogin.value = false;
  showVerificationModal.value = false;
  showCodeModal.value = false;
};

// 安全验证弹框
const showVerificationModal = ref(false);
const handleNext = () => {
  showVerificationModal.value = true;
};
const handleCancel = () => {
  showVerificationModal.value = false;
};

// 验证码表单
const showCodeModal = ref(false);
const handleVerify = () => {
  showCodeModal.value = true;
};
const handleSubmit = () => {
  handleClose();
};
</script>

<style lang="scss" scoped>
// 大屏样式
.login-box {
  background: #1f0c27;
  border: 1px solid #3f3f3f;
  border-radius: 32px;
  padding: 24px;
  width: 800px;
  height: 492px;
  margin: 120px auto;

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }
  .modal-header {
    border: none;
  }
  .title {
    color: #fff;
    font-weight: 600;
    margin-top: 16px;
    font-size: 24px;
    text-align: center;
  }
  .title-img {
    width: 400px;
  }
  .form-box {
    display: flex;
    justify-content: space-between;
  }
  .email-form {
    margin-right: 40px;
  }
  .web3-form {
    margin-left: 40px;
    img {
      margin-top: 24px;
    }
  }
  .base-form {
    flex: 1;
    &__title {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 12px;
      text-align: center;

      color: #ffffff;
    }
    .email-input {
      margin: 24px 0;
      background-color: #200d2b;
      border-color: #3f3f3f;
      color: #717680;
      height: 48px;
      box-sizing: border-box;

      &::placeholder {
        color: #717680;
      }
      &:focus {
        outline: none;
        border-color: #3f3f3f;
      }
    }
    .round-btn {
      height: 48px;
      line-height: 48px;
    }
    .flex-center {
      display: flex;
      justify-content: center;
    }
    .google-btn {
      img {
        margin-right: 16px;
      }
      display: inline-block;
      margin: 0 auto;
      margin-top: 24px;
      border: 1px solid #3f3f3f;
      text-align: center;
      border-radius: 65px;
      padding: 0 24px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      height: 48px;
      line-height: 48px;
    }
  }
  .footer {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 12px;

    text-align: center;

    color: #606060;
  }
}

// 小屏样式
.login-box-small {
  background: #1f0c27;
  border: 1px solid #3f3f3f;
  border-radius: 32px 32px 0 0;
  padding: 24px;
  min-height: 628px;

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
  .title-img {
    width: 68%;
  }
  .form-box {
    display: flex;
    justify-content: space-between;
  }
  .email-form {
    margin-bottom: 32px;
  }
  .web3-form {
    img {
      margin-top: 24px;
      height: 40px;
    }
  }
  .base-form {
    flex: 1;
    &__title {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      text-align: center;

      color: #ffffff;
    }
    .email-input {
      margin: 24px 0;
      background-color: #200d2b;
      border-color: #3f3f3f;
      color: #717680;
      height: 48px;

      &::placeholder {
        color: #717680;
      }
      &:focus {
        outline: none;
        border-color: #3f3f3f;
      }
    }
    .round-btn {
      height: 48px;
      line-height: 48px;
    }
    .flex-center {
      display: flex;
      justify-content: center;
    }
    .google-btn {
      img {
        margin-right: 16px;
      }
      display: inline-block;
      margin: 0 auto;
      margin-top: 24px;
      border: 1px solid #3f3f3f;
      text-align: center;
      border-radius: 65px;
      padding: 0 24px;
      color: #fff;
      font-size: 12px;
      font-weight: 500;

      height: 48px;
      line-height: 48px;
    }
  }
  .footer {
    margin-top: 40px;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;

    text-align: center;

    color: #606060;
  }
}
// 分割线
.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  &-item {
    height: 1px;
    width: 1px;
    background: #3f3f3f;
    flex: 1;
  }
  span {
    margin: 12px;
    color: #3f3f3f;
    font-size: 14px;
  }
}
.column {
  flex-direction: column;
}
// /* 模态框样式 */
// .modal {
//   background-color: rgba(0, 0, 0, 0.5);
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// /* 底部抽屉样式 */
// .drawer {
//   position: fixed;
//   bottom: -100%;
//   left: 0;
//   width: 100%;
//   //   background-color: white;
//   transition: bottom 0.3s ease;
//   z-index: 1050;
// }

// .drawer.open {
//   bottom: 0;
// }

// .drawer-content {
//   padding: 24px 40px;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
// }

// /* 蒙层样式 */
// .overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 1040;
// }

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 100vw;
  }
}

// 安全验证弹框
.verification-modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 480px;
  //   height: 548px;
  padding: 24px;

  z-index: 9999;

  border-radius: 32px;
  background: #1f0c27;
  border: 1px solid #3f3f3f;

  .modal-title {
    margin-bottom: 40px;
    font-size: 24px;

    font-weight: 600;
    color: #fff;
    text-align: center;
  }
  .content {
    margin: 0 auto;
    width: 320px;
    height: 320px;
    background: #36253d;
    border-radius: 16px;
    border: 1px solid #3f3f3f;
  }
  .tips {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    font-weight: 400;
  }
  .blue-text {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #3052fa;
    text-align: center;
  }
}
.m-40 {
  margin: 40px;
}
</style>
