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
      <div @click="handleSubmit" class="btn1 base-round-border">Submit</div>
      <div class="btn2">Cancel</div>
    </div>

    <!-- confirm弹窗 -->
    <Modal v-model="showModal" :width="width">
      <div class="confirm-box">
        <div class="confirm-title">Confirm your order</div>
        <div class="confirm-desc">
          Please recheck your information before continuing the order process
        </div>

        <div class="confirm-content">
          <div class="confirm-content-title">ORDER SUMMARY</div>
          <div class="confirm-content-item">
            <span class="label">Email:</span>
            <span class="value">abc@qq.com</span>
          </div>
          <div class="confirm-content-item">
            <span class="label">Name:</span>
            <span class="value">Jone Doe</span>
          </div>
          <div class="confirm-content-item">
            <span class="label">Phone:</span>
            <span class="value">01000xxx</span>
          </div>
          <div class="confirm-content-item">
            <span class="label">Address:</span>
            <span class="value">xxxxxxxxxxxxxx</span>
          </div>
          <div class="confirm-content-item">
            <span class="label">Shipping fee:</span>
            <span class="value fw-bolder">10 USDC</span>
          </div>
        </div>

        <div class="confirm-desc">
          After confirming the information,
          <span class="fw-bolder">10 USDC</span>
          will be deducted from your wallet.
        </div>

        <div class="footer-btn__modal">
          <div @click="handleConfirm" class="btn1 base-round-border">
            Confirm
          </div>
          <div @click="handleCancel" class="btn2">Cancel</div>
        </div>
      </div>
    </Modal>

    <!-- 结果弹窗 -->
    <Modal v-model="showResult" width="400px">
      <!-- Error -->

      <div class="result-box">
        <div v-if="isSuccess">
          <div class="result-title">Success</div>
          <img src="../../assets/result-success.svg" class="result-img" />
          <div class="result-tips">
            Payment for your shipping order was executed successfully, track
            your package delivery process in
            <span class="blue-text">Shipping Inventory</span>
          </div>
        </div>
        <div v-else>
          <div class="result-title">Error</div>
          <img src="../../assets/result-err.svg" class="result-img" />
          <div class="result-tips">
            You don’t have enough USDC balance in your wallet, please increase
            your wallet balance, then try again.
          </div>
        </div>
        <div v-if="!isSuccess" class="footer-btn__modal footer-btn__modal2">
          <div @click="closeResultModal" class="btn1 base-round-border">
            Try Again
          </div>
          <div @click="closeResultModal" class="btn2">Cancel</div>
        </div>
      </div>

      <!-- Success -->
    </Modal>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from "vue";
import Modal from "@/components/Modal.vue";

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

// 确认弹窗
const showModal = ref(false);
const width = computed(() => {
  if (window.innerWidth < 768) return "100%";
  return "500px";
});

const handleSubmit = () => {
  console.log("formState", formState);

  showModal.value = true;
};
const handleCancel = () => {
  showModal.value = false;
};
// 结果弹窗
const isSuccess = ref(true);
const showResult = ref(false);
const handleConfirm = () => {
  showModal.value = false;
  showResult.value = true;
};
const closeResultModal = () => {
  showModal.value = false;
  showResult.value = false;
};

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

//   弹窗1样式
.confirm-box {
  color: #fff;
  .confirm-title {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  .confirm-desc {
    margin: 24px 0;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  .confirm-content {
    padding: 24px;
    border-radius: 24px;
    background-color: #36253d;
    color: #fff;
    .confirm-content-title {
      font-size: 16px;
      font-weight: 600;
    }
    .confirm-content-item {
      margin-top: 24px;
      display: flex;
      align-items: center;
      font-size: 14px;
      .label {
        font-weight: 600;
        min-width: 100px;
      }
    }
  }
}
// 弹窗2 样式
.result-box {
  color: #fff;
  text-align: center;
  .result-title {
    font-size: 24px;
    font-weight: 600;
  }
  .result-img {
    margin: 40px 0;
    width: 120px;
    height: 120px;
  }
  .result-tips {
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 400;
  }
  .blue-text {
    color: #3052fa;
    font-weight: 600;
  }
}
.footer-btn__modal {
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

.footer-btn__modal2 {
  text-align: center;
  .btn1 {
    font-size: 20px;
    padding: 0 20px;
    width: 140px;
  }
  .btn2 {
    font-size: 20px;
    padding: 0 20px;
    width: 140px;
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
  .confirm-box {
    .footer-btn__modal {
      display: block;
      text-align: center;
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
