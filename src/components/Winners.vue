<template>
  <div class="market-box">
    <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
    <div class="market d-none d-sm-block">
      <div class="title base-border">LIVE WINNERS</div>

      <!-- 列表 -->
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col" style="text-align: left; margin-left: 16px">
              ITEM
            </th>
            <th scope="col">PARITY</th>
            <th scope="col">PRICE</th>
            <th scope="col">WINNER</th>
            <th scope="col">TIME</th>
          </tr>
        </thead>
        <tbody class="table-dark table_body">
          <tr v-for="(item, index) in tableList" :key="index">
            <td scope="row">
              <div class="flex-box">
                <img :src="item.itemImg" alt="" />
                <div>
                  <div class="item-name">{{ item.itemName }}</div>
                  <div class="item-type">{{ item.itemType }}</div>
                </div>
              </div>
            </td>
            <td>{{ item.rarityType }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="flex-box">
                <img src="../assets/user.png" class="user-icon" />
                <span>{{ item.winner }}</span>
              </div>
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </table>

      <div class="right-btn">
        <div class="round-btn">
          See all <img src="../assets/link.svg" alt="" />
        </div>
      </div>
    </div>

    <!-- 在小屏幕（<576px）上显示 -->
    <div class="market market-small d-block d-sm-none">
      <div class="title base-border">LIVE WINNERS</div>

      <!-- 列表 -->
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col" style="text-align: left; margin-left: 16px">
              ITEM
            </th>
            <th scope="col" style="text-align: left; margin-left: 16px">
              PARITY
            </th>
            <th scope="col" style="text-align: left; margin-left: 16px">
              WINNER
            </th>
          </tr>
        </thead>
        <tbody class="table-dark table_body">
          <tr v-for="(item, index) in tableList" :key="index">
            <td scope="row">
              <img :src="item.itemImg" alt="" />
            </td>
            <td>{{ item.rarityType }}</td>
            <td>
              <span>{{ item.winner }}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="right-btn">
        <div class="round-btn">
          See all <img src="../assets/link.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import item1 from "@/assets/item1.png";
import item2 from "@/assets/item2.png";
import item3 from "@/assets/item3.png";

const tableList = ref([
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item1,

    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item2,
    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item3,

    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item2,
    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item1,
    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item1,
    rarityType: "SSR",
    price: "300 USDC",
    winner: "Bob",
    time: "02/17/2025 09:19:29",
  },
]);
</script>

<style lang="scss" scoped>
.market-box {
  margin: 32px 0;
}
.market {
  margin: 0 32px;
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

.market-small {
  .title {
    display: inline-block;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 600;
  }

  //   表格样式
  thead {
    font-size: 16px;
    border-color: #000000;
    // background: #1e1e1e;
  }
  thead tr {
    height: 24px;
    font-size: 14px;
    text-align: left;
    line-height: 24px;
    border-color: #000000;
  }
  thead th {
    background: none;
    height: 24px;
    padding: 0;
  }

  tbody td {
    height: 24px;
    font-size: 14px;
    text-align: left;
    line-height: 80px;
    border-color: #000000;
    background: #1e1e1e;
    padding-top: 0;
    padding-bottom: 0;
  }
  .table_body {
    height: 550px;
    overflow: auto;
  }

  .right-btn {
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .round-btn {
    font-size: 0.6rem;
    padding: 2px 6px;
    display: inline-block;
    border-radius: 20px;
    border: 1px solid #fff;
  }
}
</style>
