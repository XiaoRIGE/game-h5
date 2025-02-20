<template>
  <div class="userInfo">
    <div class="header">
      <div class="header-left">
        <img src="../assets/header-avatar.svg" class="avatar" />
        <div class="detailInfo">
          <div class="name">{{ userInfo.userName }}</div>
          <div class="id">UID:{{ userInfo.userId }}</div>
        </div>
      </div>
      <div class="header-right">
        <div class="round-btn">
          <span>Edit profile</span>
          <img src="../assets/edit.svg" class="edit" />
        </div>

        <img src="../assets/share.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const userInfo = reactive({
  userName: "Player678",
  userId: "12487124098",
});
</script>

<style lang="scss" scoped>
.userInfo {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      align-items: center;
      .avatar {
        width: 120px;
        height: 120px;

        margin-right: 24px;
      }
      .detailInfo {
        color: #fff;
        .name {
          margin-bottom: 16px;
          font-weight: 600;
          font-size: 24px;
          line-height: 20px;
        }
        .id {
          font-weight: 400;
          font-size: 16px;
          line-height: 21px;
        }
      }
    }

    .header-right {
      display: flex;
      justify-content: flex-end;
      .round-btn {
        display: flex;
        align-items: center;
        margin-right: 24px;
        border: 1px solid #3f3f3f;
        padding: 0 22px;
        border-radius: 32px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        .edit {
          margin-left: 24px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

@media (max-width: 738px) {
  .userInfo {
    .header {
      display: block;
    }
  }
}
</style>
