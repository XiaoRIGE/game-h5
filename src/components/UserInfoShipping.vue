<template>
  <a-table
    :dataSource="dataSource"
    :columns="columns"
    :bordered="false"
    :pagination="false"
    :customRow="customCell"
    :customHeaderRow="customHeaderCell"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'information'">
        <div>
          <span> Name:{{ record.name }} </span>
          <span> Phone:{{ record.phone }} </span>
        </div>
        <div class="row">
          <div class="col-12 text-truncate">Address:{{ record.address }}</div>
        </div>
      </template>

      <template v-if="column.key === 'content'">
        <span @click="showDetail(record)" style="color: #3052fa">Detail</span>
      </template>
    </template>
  </a-table>

  <!-- 订单详情弹窗 -->
  <Modal v-model="showContentModal">
    <div class="order-content-title">Order No. {{ currentOrder.orderNo }}</div>
    <a-table
      :dataSource="currentOrder.listData"
      :columns="columns2"
      :bordered="false"
      :pagination="false"
      :customRow="customCell"
      :customHeaderRow="customHeaderCell"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'item'">
          <img src="../assets/item1.png" alt="" />
          <span class="item-desc">{{ record.item }}</span>
        </template>
      </template>
    </a-table>
  </Modal>
</template>
<script setup>
import { ref, reactive } from "vue";
import Modal from "@/components/Modal.vue";
import { customHeaderCell, customCell } from "@/utils";

const columns = [
  {
    title: "ORDER NO.",
    dataIndex: "orderNo",
    key: "orderNo",
    ellipsis: true,
    // width: "60%",
  },
  {
    title: "SHIPPING INFORMATION",
    dataIndex: "information",

    key: "information",
    width: "50%",
    ellipsis: true,
  },
  {
    title: "POSTAGE CONTENT",
    dataIndex: "content",
    key: "content",
    ellipsis: true,
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    ellipsis: true,
  },
];

const dataSource = [
  {
    key: "1",
    orderNo: "416584854",
    name: "Jone Doe",
    phone: "01000xxx",
    address:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ",
    id: "4534484",
    status: "Shipping",
  },
  {
    key: "2",
    orderNo: "416584854",
    name: "Jone Doe",
    phone: "01000xxx",
    address:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ",
    id: "4534484",
    status: "Shipping",
  },
  {
    key: "3",
    orderNo: "416584854",
    name: "Jone Doe",
    phone: "01000xxx",
    address:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ",
    id: "4534484",
    status: "Shipping",
  },
  {
    key: "4",
    orderNo: "416584854",
    name: "Jone Doe",
    phone: "01000xxx",
    address:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ",
    id: "4534484",
    status: "Shipping",
  },
  {
    key: "5",
    orderNo: "416584854",
    name: "Jone Doe",
    phone: "01000xxx",
    address:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam ",
    id: "4534484",
    status: "Shipping",
  },
];

const showContentModal = ref(false);
const currentOrder = reactive({
  orderNo: "010101010",
  listData: [
    {
      key: "1",
      item: "2022 Panini NBA Hoops Jam-...",
      rarity: "SSR",
      quantity: 1,
    },
    {
      key: "2",
      item: "2022 Panini NBA Hoops Jam-...",
      rarity: "SSR",
      quantity: 1,
    },
    {
      key: "3",
      item: "2022 Panini NBA Hoops Jam-...",
      rarity: "SSR",
      quantity: 1,
    },
  ],
});

const showDetail = (record) => {
  console.log(record);
  showContentModal.value = true;
};

const columns2 = [
  {
    title: "ITEM",
    dataIndex: "item",
    key: "item",
    ellipsis: true,
  },
  {
    title: "RARITY",
    dataIndex: "rarity",

    key: "rarity",
    ellipsis: true,
    width: 80,
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
    ellipsis: true,
    width: 120,
  },
];

const dataSource2 = ref([
  {
    key: "1",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    quantity: 1,
  },
  {
    key: "2",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    quantity: 1,
  },
  {
    key: "3",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    quantity: 1,
  },
]);
</script>

<style lang="scss">
.ant-table-wrapper .ant-table-thead > tr > th {
  background: #1e1e1e !important;
  color: #fff;
  border-bottom: 1px solid #3f3f3f;
}

.ant-table-wrapper .ant-table-tbody > tr > td {
  background: #1f0c27 !important;
  color: #fff;
  border-bottom: 1px solid #3f3f3f;
}
</style>
<style lang="scss" scoped>
.order-content-title {
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 20px;
  /* identical to box height, or 83% */
  text-align: center;

  color: #ffffff;
}
@media (max-width: 738px) {
  .product-name {
    display: none;
  }
  .item-desc {
    display: none;
  }
}
</style>
