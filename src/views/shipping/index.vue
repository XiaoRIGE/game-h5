<template>
  <div class="shipping modal-border">
    <div class="title base-border">SHIPPING INFORMATION</div>

    <div class="content-box">
      <div class="row">
        <div class="left col-12 col-md-6">
          <a-form
            :model="formState"
            name="horizontal_login"
            autocomplete="off"
            class="content-box__form"
          >
            <div class="form-title">CONTACT</div>

            <!-- email -->
            <div class="row">
              <div class="col-12">
                <a-form-item name="email">
                  <a-input
                    v-model:value="formState.email"
                    placeholder="Email *"
                  >
                  </a-input>
                </a-form-item>
              </div>
            </div>

            <div class="form-title">Delivery</div>

            <!-- country -->
            <div class="row">
              <div class="col-12">
                <a-form-item name="country">
                  <a-select
                    v-model:value="formState.country"
                    placeholder="Country/Region *"
                    custom-class="custom-select"
                  >
                    <a-select-option value="shanghai"
                      >country 1</a-select-option
                    >
                    <a-select-option value="beijing">country 2</a-select-option>
                  </a-select>
                </a-form-item>
              </div>

              <div class="col-6">
                <a-form-item name="Name">
                  <a-input v-model:value="formState.name" placeholder="Name *">
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-6">
                <a-form-item name="Phone">
                  <a-input
                    v-model:value="formState.phone"
                    placeholder="Phone *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-6">
                <a-form-item name="RegionCode">
                  <a-input
                    v-model:value="formState.regionCode"
                    placeholder="Region Code *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-6">
                <a-form-item name="PostalCode">
                  <a-input
                    v-model:value="formState.PostalCode"
                    placeholder="Postal Code *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-12">
                <a-form-item name="city">
                  <a-input v-model:value="formState.city" placeholder="City *">
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-12">
                <a-form-item name="prefecture">
                  <a-input
                    v-model:value="formState.prefecture"
                    placeholder="Prefecture *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-12">
                <a-form-item name="address">
                  <a-input
                    v-model:value="formState.address"
                    placeholder="Address *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="col-12">
                <a-form-item name="address2">
                  <a-input
                    v-model:value="formState.address2"
                    placeholder="address2 *"
                  >
                  </a-input>
                </a-form-item>
              </div>

              <div class="form-title">Payment Method *</div>

              <div class="form-title__desc">
                Which currency would you like to take to pay for your logistic?
              </div>

              <div class="col-12 mt-2">
                <a-form-item name="payment">
                  <a-radio-group v-model:value="formState.payment">
                    <a-radio value="1">
                      <img src="../../assets/payment1.png" alt="" />
                    </a-radio>
                    <a-radio value="2"
                      ><img src="../../assets/payment2.png" alt=""
                    /></a-radio>
                  </a-radio-group>
                </a-form-item>
              </div>
            </div>
          </a-form>
        </div>
        <div class="right col-12 col-md-6">
          <div class="form-title">POSTAGE CONTENT</div>
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
                  <img src="../../assets/item1.png" alt="" />
                  <span class="item-desc d-none d-xl-block">{{
                    record.item
                  }}</span>
                </div>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </div>

    <div class="footer-btns">
      <div class="btn1 base-round-border">Submit</div>
      <div class="btn2">Cancel</div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const formState = reactive({
  email: "",
  country: null,
  name: "",
  phone: "",
  city: "",
  prefecture: "",
  address: "",
  address2: "",
});

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
    title: "RARITY",
    dataIndex: "rarity",
    key: "rarity",
  },
  {
    title: "QUANTITY",
    key: "quantity",
    dataIndex: "quantity",
  },
]);

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
</script>

<style lang="scss" scoped>
.shipping {
  margin: 60px 110px;
  color: #fff;
  text-align: center;
  .title {
    margin-bottom: 20px;
    display: inline-block;
    color: #fff;
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
  }
  .form-title {
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 24px;
    color: #fff;
  }
  .form-title__desc {
    font-size: 16px;
    color: #717680;
  }
  .content-box__form {
    text-align: left;
  }
  .footer-btns {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    .btn1 {
      margin-right: 16px;
      padding: 0 64px;
      font-weight: 600;
      color: #ffffff;
      font-size: 20px;
      display: inline-block;
      background-image: linear-gradient(to right, #1f0c27, #1f0c27),
        linear-gradient(90deg, #1e58fc, #a427eb, #d914e4, #e10fa3, #f10419);
    }
    .btn2 {
      padding: 0 64px;
      height: 48px;
      line-height: 48px;
      display: inline-block;
      border-radius: 48px;
      border: 1px solid #3f3f3f;
    }
  }
}
@media (max-width: 576px) {
  .shipping {
    margin: 12px 24px;
    .title {
      font-size: 16px;
    }
    .footer-btns {
      display: block;
      .btn1 {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
  }
}
</style>

<style lang="scss">
.ant-input,
.ant-select {
  background: #1f0c27;
  color: #fff;
}

.ant-input::placeholder {
  color: #717680;
}

// 单选框样式
.ant-radio-wrapper-in-form-item {
  border: 1px solid #3f3f3f;
  height: 56px;
  line-height: 56px;
  border-radius: 16px;
  padding: 0 16px;
  margin-right: 4px;
}

@media (max-width: 576px) {
  .ant-radio-wrapper-in-form-item {
    margin-bottom: 8px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
