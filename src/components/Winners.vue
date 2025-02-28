<template>
  <div class="winner-box">
    <div class="winner">
      <div class="title base-border">LIVE WINNERS</div>

      <a-table
        :dataSource="tableList"
        :columns="columns"
        :bordered="false"
        :pagination="false"
        :customRow="customCell"
        :customHeaderRow="customHeaderCell"
        :scroll="{ y: scrollYHeight }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'item'">
            <div class="d-flex align-items-center">
              <img src="../assets/item1.png" alt="" />
              <div>
                <div class="item-desc d-none d-md-block">
                  {{ record.itemName }}
                </div>
                <div class="item-desc d-none d-md-block">
                  {{ record.itemType }}
                </div>
              </div>
            </div>
          </template>
        </template>
      </a-table>

      <div v-if="showBottomBtn" class="right-btn">
        <div @click="goPage" class="round-btn">
          See all <img src="../assets/link.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import useWindow from "@/hooks/useWindow";
import { customHeaderCell, customCell } from "@/utils";

import item1 from "@/assets/item1.png";
import item2 from "@/assets/item2.png";
import item3 from "@/assets/item3.png";

const { isLargeWindow } = useWindow();
const columns = ref([
  {
    title: "ITEM",
    dataIndex: "item",
    key: "item",
    width: "60%",
  },
  {
    title: "RARITY",
    dataIndex: "rarityType",
    key: "rarityType",
  },
  {
    title: "PRICE",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "WINNER",
    key: "winner",
    dataIndex: "winner",
  },
  {
    title: "TIME",
    key: "time",
    dataIndex: "time",
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
          width: "60%",
        },
        {
          title: "RARITY",
          dataIndex: "rarityType",
          key: "rarityType",
        },
        {
          title: "PRICE",
          dataIndex: "price",
          key: "price",
        },
        {
          title: "WINNER",
          key: "winner",
          dataIndex: "winner",
        },
        {
          title: "TIME",
          key: "time",
          dataIndex: "time",
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
          title: "RARITY",
          dataIndex: "rarityType",
          key: "rarityType",
        },

        {
          title: "WINNER",
          key: "winner",
          dataIndex: "winner",
        },
      ];
    }
  },
  {
    immediate: true,
  }
);

defineProps({
  tableList: {
    type: Array,
    default: () => {
      return [
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item1,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item2,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item3,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item1,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item1,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
        {
          id: Math.random(),
          itemName: "2022 Panini NBA Hoops Jam-...",
          itemType: "GACHA",
          itemImg: item1,
          rarityType: "SSR",
          price: "300 USDC",
          winner: "Suyanne",
          time: "02/17/2025 09:19:29",
        },
      ];
    },
  },
  showBottomBtn: {
    type: Boolean,
    default: true,
  },
  scrollYHeight: {
    type: Number,
    default: 400,
  },
});

const router = useRouter();
const goPage = () => {
  router.push({
    name: "liveWinners",
  });
};
</script>

<style lang="scss" scoped>
.winner-box {
  margin: 32px 0;
}
.winner {
  margin: 0;
  padding: 40px;
  background: rgba(45, 16, 57, 0.3);
  border: 1px solid #3f3f3f;
  border-radius: 32px;

  color: #fff;
  .title {
    display: inline-block;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 600;
  }
  //   表格样式
  thead {
    font-size: 16px;
    border-color: #000000;
    // background: #1e1e1e;
  }
  thead tr {
    height: 35px;
    font-size: 14px;
    text-align: center;
    line-height: 80px;
    border-color: #000000;
  }
  thead th {
    background: none;
    height: 35px;
    padding: 0;
  }
  tbody td {
    height: 80px;
    font-size: 14px;
    text-align: center;
    line-height: 80px;
    border-color: #000000;
    background: #1e1e1e;
  }
  .table_body {
    height: 550px;
    overflow: auto;
  }

  .flex-box {
    height: 80px;
    display: flex;
    align-items: center;
    line-height: 20px;
    text-align: left;
    img {
      margin-right: 16px;
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .item-name {
      font-size: 14px;
      font-weight: 600;
    }
    .item-type {
      font-size: 12px;
      font-weight: 400;
      color: #cccccc;
    }
    .user-icon {
      width: 32px;
      height: 32px;
    }
  }

  .right-btn {
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .round-btn {
    font-size: 0.8rem;
    padding: 6px 10px;
    display: inline-block;
    border-radius: 20px;
    border: 1px solid #fff;
  }
}

@media (max-width: 576px) {
  .winner {
    .title {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
}
</style>
