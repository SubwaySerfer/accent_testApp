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
    <div class="modal-wrapper">
      <div class="modal-window">
        <h3 class="modal-window_txt">Заказ оформлен!</h3>
        <figure class="modal-window_across" @click="isModal">
          <span class="cross-top"></span>
          <span class="cross-bot"></span>
        </figure>
      </div>
    </div>
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
        // console.log('true submit');
        // console.log(JSON.stringify(this.nameClient));

        let data = { clientName: this.nameClient, clientPhone: this.phone };
        fetch('https://app.aaccent.su/js/confirm.php', {
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify(data),
        }).then((response) => {
          if (response.ok) {
            // this.isValid = false;
            // this.isValidPhone = false;
            // this.phone = '';
            // this.nameClient = '';
          } else {
            console.log('error');
          }
        });
      }
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
    //TODO: close modal
    isModal() {},
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
.modal-wrapper {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
}
.modal-window {
  width: 30rem;
  align-self: center;
  background: #75d5ce;
  height: 20rem;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr) 30px;
}
.modal-window_txt {
  grid-area: 1 / 1 / end/ end;
  align-self: center;
  justify-self: center;
  font-size: 1.8rem;
}

.cross-top {
  width: 10px;
  height: 1px;
  background-color: black;
  display: block;
  position: absolute;
  transform: rotate(135deg);
}
.cross-bot {
  width: 10px;
  height: 1px;
  display: block;
  background-color: black;
  position: absolute;
  transform: rotate(45deg);
}
.modal-window_across {
  grid-area: 1 / 7 /2 / 8;
  position: relative;
  justify-self: center;
  cursor: pointer;
}
</style>
