<script lang="ts" setup>
  import { click } from '../composables/calculator';
  import { mathState } from '../constants';
  import Form from './Form.vue';
  import HistoryActions from './HistoryActions.vue';
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <h1 class="title">Калькулятор</h1>
      <div class="calc">
        <div class="output">{{ mathState.mathOutput }}</div>
        <header class="calc__header">
          <div class="calc__header-input">{{ mathState.btnValue }}</div>
          <button v-if="mathState.btnValue" @click="click.removeNumber" class="btn delete">Удалить</button>
        </header>
        <Form />
      </div>
      <HistoryActions />
    </div>
  </div>
  
</template>

<style lang="scss">
  .wrapper {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    margin-bottom: 30px;
  }

  .calc {
    width: 450px;
    background-color: #000;
    padding: 35px;
    border-radius: 30px;
    display: grid;
    margin-bottom: 30px;
    &__header {
      width: 100%;
      height: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: space-between;
      &-input {
        width: 100px;
        padding: 0 10px;
        background: transparent;
        color:#fff;
        font-size: 40px;
        line-height: 120%;
        border: none;
        text-align: left;
      }
    }
  }

  .btn{
    cursor: pointer;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 25px;
    line-height: 120%;
    border: transparent;
    &.delete{
      cursor: pointer;
      padding: 10px;
      font-size: 20px;
    }
  }

  .output {
    color: #fff;
    font-size: 23px;
  }
</style>
