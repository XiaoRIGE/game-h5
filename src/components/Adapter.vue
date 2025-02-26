<template>
  <!-- 暂时没用 -->
  <Teleport to="body">
    <!-- 中等屏幕显示 -->

    <div class="adapter d-none d-sm-block">
      modal
      <Modal v-model="showModal">
        <h1>modal</h1>
      </Modal>
    </div>

    <div class="adapter d-block d-sm-none">
      <h1>抽屉</h1>
    </div>
  </Teleport>
</template>
<script setup>
import Modal from "./Modal.vue";
import { ref, watch } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
watch(
  () => props.show,
  (newVal) => {
    showModal.value = newVal;
  }
  //   {
  //     immediate: true,
  //   }
);

const showModal = ref(false);
</script>

<style lang="scss" scoped></style>
