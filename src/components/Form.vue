<template>
  <form action="#" class="calc__main">
    <Button @click="btnClick.clickZero()" class="btn_command" id="btn_zeroing" value="C"/>
    <Button @click="btnClick.clickMath" class="math-action" id="btn_percent" :disabled=!mathState.btnValue value="%" />
    <Button @click="btnClick.clickMath" class="math-action" value="/" />
    <Button @click="btnClick.refValue" class="btn_number" value="7" />
    <Button @click="btnClick.refValue" class="btn_number" value="8" />
    <Button @click="btnClick.refValue" class="btn_number" value="9" />
    <Button @click="btnClick.clickMath" class="math-action" value="*" />
    <Button @click="btnClick.refValue" class="btn_number" value="4" />
    <Button @click="btnClick.refValue" class="btn_number" value="5" />
    <Button @click="btnClick.refValue" class="btn_number" value="6" />
    <Button @click="btnClick.clickMath" class="math-action" value="-" />
    <Button @click="btnClick.refValue" class="btn_number" value="1" />
    <Button @click="btnClick.refValue" class="btn_number" value="2" />
    <Button @click="btnClick.refValue" class="btn_number" value="3" />
    <Button @click="btnClick.clickMath" class="math-action" value="+" />
    <Button @click="btnClick.refValue" class="btn_number" value="0" />
    <Button @click="btnClick.refValue" class="btn_number" value="." />
    <Button @click="btnClick.btnEqual()" class="equal" id="btn_equal" value="=" />
  </form>
</template>

<script setup lang="ts">
  import Button from './Button.vue';
  import { btnClick } from '../composables/calculator';
  import { mathState } from '../constants';
</script>

<style lang="scss" scoped>
  .calc {
    &__main {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 5px;
      grid-row-gap: 5px;
    }
  }

  .btn.btn_command,
  #btn_percent {
    background-color: #C8C8C8;
    color: #000;
  }

  .btn.btn_number {
    background-color: #505050;
    color: #fff;
  }

  #btn_zeroing {
    grid-area: 1/1/2/3;
  }

  #btn_equal {
    grid-area: 5/3/6/5;
  }
</style>