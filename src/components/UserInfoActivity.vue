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

// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record) => ({
//     disabled: record.name === "Disabled User", // Column configuration not to be checked
//     name: record.name,
//   }),
// };
function customCell(record, rowIndex) {
  return {
    style: {
      backgroundColor: "#1F0C27", // 设置 body 背景色
      color: "#fff", // 设置 body 文字颜色
    },
  };
}
const customHeaderCell = (column) => {
  console.log("column", column);

  return {
    style: {
      backgroundColor: "#1E1E1E", // 设置 header 背景色
      color: "#fff", // 设置 header 文字颜色
    },
  };
};
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
