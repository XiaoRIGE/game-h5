<template>
  <!-- todo 重写样式和交互 需要包含选中效果和后续交互 -->
  <div class="market-box">
    <!-- 在中等屏幕（≥576px 且 <992px）上显示 -->
    <div class="market">
      <!-- 列表 -->
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col" style="text-align: left; padding-left: 16px">
              ITEM
            </th>
            <th scope="col">PARITY</th>
            <th scope="col">USDC PRICE</th>
            <th scope="col">CANDY PRICE</th>
            <th scope="col">QUANTITY</th>
          </tr>
        </thead>
        <tbody class="table-dark table_body">
          <tr v-for="(item, index) in tableList" :key="index">
            <td scope="row">
              <div class="flex-box">
                <img :src="item.itemImg" alt="" />
                <div>
                  <div class="item-name">{{ item.itemName }}</div>
                </div>
              </div>
            </td>
            <td>{{ item.rarityType }}</td>
            <td>{{ item.price }}</td>
            <td>
              {{ item.candyPrice }}
            </td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>

      <!-- <div class="right-btn">
        <div class="round-btn">
          See all <img src="../assets/link.svg" alt="" />
        </div>
      </div> -->
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
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item2,
    rarityType: "SSR",
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item3,

    rarityType: "SSR",
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item2,
    rarityType: "SSR",
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item1,
    rarityType: "SSR",
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
  {
    id: Math.random(),
    itemName: "2022 Panini NBA Hoops Jam-...",
    itemType: "GACHA",
    itemImg: item1,
    rarityType: "SSR",
    price: "300",
    candyPrice: "100",
    quantity: "10",
  },
]);
</script>

<style lang="scss" scoped>
.market {
  height: 30vh;
  overflow: scroll;

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
  td {
    border: 1px solid #3f3f3f;
  }
  thead {
    font-size: 16px;
    border-color: #000000;
    background: #1e1e1e;
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
    line-height: 35px;
    padding: 0;
  }
  tbody td {
    height: 80px;
    font-size: 14px;
    text-align: center;
    line-height: 80px;
    border-color: #000000;
    background: #1f0c27;
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

@media (max-width: 738px) {
  .market {
    .table {
      .table_body {
        .flex-box {
          .item-name {
            display: none;
          }
        }
      }
    }
    //   表格样式
    thead {
      font-size: 14px;
      border-color: #000000;
      background: #1e1e1e;
    }
    thead tr {
      height: 24px;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      border-color: #000000;
    }
    thead th {
      background: none;
      height: 24px;
      line-height: 24px;
      padding: 0;
    }
    tbody td {
      height: 80px;
      font-size: 14px;
      text-align: center;
      line-height: 80px;
      border-color: #000000;
      background: #1f0c27;
    }
  }
}
</style>
