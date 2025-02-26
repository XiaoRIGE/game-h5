<template>
  <a-table
    :dataSource="dataSource"
    :columns="columns"
    :bordered="false"
    :pagination="false"
    :customRow="customCell"
    :customHeaderRow="customHeaderCell"
    :scroll="{ y: 400 }"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'item'">
        <div class="d-flex align-items-center">
          <img src="../assets/item1.png" alt="" />
          <span class="item-desc d-none d-md-block">{{ record.item }}</span>
        </div>
      </template>

      <template v-if="column.key === 'action'">
        <img src="../assets/delete.svg" alt="" />
      </template>
    </template>
  </a-table>

  <div class="total-count">
    <span>TOTAL</span>
    <span class="d-flex align-items-center px-2">
      <img src="../assets/count.svg" class="me-1" />
      600
    </span>
    <span class="d-flex align-items-center px-2">
      <img src="../assets/candy.svg" class="me-1" />
      6000
    </span>
  </div>

  <div class="btn-groups">
    <div class="btn1">
      <div class="btn me-2">Add to your wallet</div>
      <div>Withdraw the NFTS</div>
    </div>
    <div class="btn2">
      <div class="btn me-2">EXCHANGE for Candy</div>
      <div>Lost the NFTS</div>
    </div>
    <div class="btn3">
      <div @click="goPage" class="btn">SHIP to address</div>
      <div>Burn the NFTS</div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import useWindow from "@/hooks/useWindow";
import { useRouter } from "vue-router";

const { isLargeWindow } = useWindow();

const dataSource = [
  {
    key: "1",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
  {
    key: "2",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
  {
    key: "3",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
  {
    key: "4",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
  {
    key: "5",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
  {
    key: "6",
    item: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    usdcPrice: "100",
    candyPrice: "1000",
    quantity: "1",
  },
];

const columns = ref([
  {
    title: "ITEM",
    dataIndex: "item",
    key: "item",
  },

  {
    title: "USDC PRICE",
    dataIndex: "usdcPrice",
    key: "usdcPrice",
  },
  {
    title: "CANDY PRICE",
    key: "candyPrice",
    dataIndex: "candyPrice",
  },
  {
    title: "RARITY",
    dataIndex: "rarity",
    key: "rarity",
  },
  {
    title: "QUANTITY",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "ACTION",
    key: "action",
    dataIndex: "action",
  },
]);

watch(
  isLargeWindow,
  (newVal) => {
    if (newVal) {
      columns.value = [
        {
          title: "ITEM",
          dataIndex: "item",
          key: "item",
        },

        {
          title: "USDC PRICE",
          dataIndex: "usdcPrice",
          key: "usdcPrice",
        },
        {
          title: "CANDY PRICE",
          key: "candyPrice",
          dataIndex: "candyPrice",
        },
        {
          title: "RARITY",
          dataIndex: "rarity",
          key: "rarity",
        },
        {
          title: "QUANTITY",
          key: "quantity",
          dataIndex: "quantity",
        },
        {
          title: "ACTION",
          key: "action",
          dataIndex: "action",
        },
      ];
    } else {
      columns.value = [
        {
          title: "ITEM",
          dataIndex: "item",
          key: "item",
        },

        {
          title: "QUANTITY",
          key: "quantity",
          dataIndex: "quantity",
        },
        {
          title: "ACTION",
          key: "action",
          dataIndex: "action",
        },
      ];
    }
  },
  {
    immediate: true,
  }
);
function customCell(record, rowIndex) {
  return {
    style: {
      backgroundColor: "#1F0C27", // 设置 body 背景色
      color: "#fff", // 设置 body 文字颜色
    },
  };
}
const customHeaderCell = (column) => {
  return {
    style: {
      backgroundColor: "#1E1E1E", // 设置 header 背景色
      color: "#fff", // 设置 header 文字颜色
    },
  };
};

const router = useRouter();
const goPage = () => {
  router.push("shipping");
};
</script>

<style lang="scss" scoped>
.total-count {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
}

.btn-groups {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  .btn {
    margin-bottom: 8px;
    border: 1px solid #3f3f3f;
    border-radius: 48px;
    color: #fff;
    line-height: 48px;
    padding: 0 20px;
  }
}

@media (max-width: 576px) {
  .total-count {
    font-size: 14px;
  }
  .btn-groups {
    font-size: 12px;
    display: block;
    .btn1,
    .btn2,
    .btn3 {
      margin-bottom: 16px;
    }
  }
}
</style>
