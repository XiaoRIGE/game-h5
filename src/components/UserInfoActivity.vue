<template>
  <!-- :row-selection="rowSelection" -->
  <a-table
    :dataSource="dataSource"
    :columns="columns"
    :bordered="false"
    :pagination="false"
    :customRow="customCell"
    :customHeaderRow="customHeaderCell"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <img src="../assets/item1.png" alt="" />
        <span class="product-name"> {{ record.name }}</span>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { customHeaderCell, customCell } from "@/utils";

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    ellipsis: true,
    // width: "60%",
  },
  {
    title: "RARITY",
    dataIndex: "rarity",
    key: "rarity",
  },
  {
    title: "TIME",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "TYPE",
    key: "type",
    dataIndex: "type",
  },
];

const dataSource = [
  {
    key: "1",
    name: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    time: "2025-02-07",
    type: "Gacha Win",
  },
  {
    key: "2",
    name: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    time: "2025-02-07",
    type: "Gacha Win",
  },
  {
    key: "3",
    name: "2022 Panini NBA Hoops Jam-...",
    rarity: "SSR",
    time: "2025-02-07",
    type: "Gacha Win",
  },
];
</script>

<style lang="scss">
.ant-table-wrapper .ant-table-thead > tr > th {
  background: #1e1e1e;
  color: #fff;
  border-bottom: 1px solid #3f3f3f;
}
</style>
<style lang="scss" scoped>
@media (max-width: 738px) {
  .product-name {
    display: none;
  }
}
</style>
