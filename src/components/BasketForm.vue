<template>
  <section class="basket-info-wrapper">
    <div class="basket-total">
      <h5>Сумма:</h5>
      <span v-text="+this.$store.state.totalPrice.toFixed(2) + '$'"></span>
    </div>
    <form action="" class="basket-form" @submit.prevent="submitHandler">
      <label for="">Имя</label
      ><input
        type="text"
        placeholder="Введите имя"
        @input="validateName"
        v-model="nameClient"
        :class="{ 'valid-name': isValid, 'invalid-name': !isValid }"
      />
      <label for="">Телефон</label>
      <input
        type="tel"
        placeholder="+7(999)-999-99-99"
        v-model="phone"
        :class="{ 'valid-name': isValidPhone, 'invalid-name': !isValidPhone }"
      />
    </form>
    <button class="btn btn-pay" type="submit" @click="submitHandler">
      <span>Оформить заказ</span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'AcvBasketForm',

  data() {
    return {
      nameClient: '',
      phone: '',
      isValid: false,
      isValidPhone: false,
    };
  },
  watch: {
    phone(value) {
      this.validatePhone(value);
    },
    name(value) {
      this.validateName(value);
    },
  },
  methods: {
    submitHandler() {
      if (this.isValid == true && this.isValidPhone == true) {
        console.log('true submit');
        console.log(JSON.stringify(this.nameClient));
        // this.isValid = false;
        // this.isValidPhone = false;
        // this.phone = '';
        // this.nameClient = '';
      }
      fetch('https://app.aaccent.su/js/confirm.php', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(this.nameClient),
      }).then((response) => {
        console.log(response.json());
      });

      //   fetch('https://sergeyem.ru', {
      //     method: 'POST',

      //     headers: {
      //       'Content-Type': 'application/json',
      //     },

      //     body: JSON.stringify({
      //       name: this.nameClient,

      //       // rating: this.rating,
      //     }),
      //   })
      //     .then((response) => {
      //       /* eslint-disable no-console */

      //       console.log(response);

      //       /* eslint-enable no-console */
      //     })

      //     .catch((error) => {
      //       /* eslint-disable no-console */

      //       console.log(error);

      //       /* eslint-enable no-console */
      //     });
    },

    validateName() {
      let val = event.target.value;
      if (val.length >= 3 && val.length < 15) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },

    validatePhone(value) {
      //TODO: доделать валидатор форм (не хватает сообщений об ошибках)
      let testSymbols = /^[\d\+][\d\(\)\ -]{10,14}\d$/; // eslint-disable-line
      if (testSymbols.test(value)) {
        this.isValidPhone = true;
      } else {
        this.isValidPhone = false;
      }
    },
  },
};
</script>

<style></style>
<style scoped>
input {
  border-radius: 5px;
  padding-left: 5px;
}
.basket-info-wrapper {
  display: flex;
  width: 22rem;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: min-content;
  border: 1px solid black;
  gap: 2rem;
  padding: 2rem 1rem;
  border-radius: 5px;
}
.basket-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
}
.basket-total {
  font-weight: 600;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.btn-pay {
  width: auto;
  height: 5rem;
  border-radius: 10px;
  border: 2px solid #75d5ce;
  background: #98c9c5;
  box-sizing: border-box;
  color: #fff;
}

.invalid-name {
  border: 2px solid red;
}

.valid-name {
  border: 2px solid green;
}
</style>
