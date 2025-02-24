<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay">
      <div class="modal-content" :style="{ width }">
        <!-- 关闭按钮 -->
        <!-- <button class="close-button" @click="closeModal">×</button> -->
        <img
          src="../assets/close.svg"
          class="close-button"
          @click="closeModal"
          alt=""
        />
        <!-- 插槽内容 -->
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
// 定义 props
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  width: {
    default: "90%",
  },
});

// 定义 emits
const emit = defineEmits(["update:modelValue"]);

// 关闭弹窗
const closeModal = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss" scoped>
/* 蒙层样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 弹窗内容样式 */
.modal-content {
  background-color: #1f0c27;
  border: 1px solid #3f3f3f;
  padding: 40px;
  border-radius: 32px;
  position: relative;
  max-width: 1220px;
  width: 90%;

  color: #fff;
}

/* 关闭按钮样式 */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 738px) {
  .modal-content {
    width: 100%;
  }
}
</style>
