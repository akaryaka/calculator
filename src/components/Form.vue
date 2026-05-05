<template>
  <form action="#" class="calc__main">
    <Button v-for="button in buttons" @click='button.method' :class='button.class' :id="button.id" :value='button.value'/>
  </form>
</template>

<script setup lang="ts">
  import Button from './Button.vue';
  import { click } from '../composables/calculator';
  import { mathState } from '../constants';
  import { ref } from 'vue';

  const buttons = ref([
    {method: click.clickZero, class: 'btn_command', id: 'btn_zeroing', value: 'C'},
    {method: click.clickMath, class: 'math-action percent', id: 'btn_percent', value: '%'},
    {method: click.clickMath, class: 'math-action', id: '', value: '/'},
    {method: click.refValue, class: 'btn_number', id: '', value: '7'},
    {method: click.refValue, class: 'btn_number', value: '8'},
    {method: click.refValue, class: 'btn_number', value: '9'},
    {method: click.clickMath, class: 'math-action', value: '*'},
    {method: click.refValue, class: 'btn_number', value: '4'},
    {method: click.refValue, class: 'btn_number', value: '5'},
    {method: click.refValue, class: 'btn_number', value: '6'},
    {method: click.clickMath, class: 'math-action', value: '-'},  
    {method: click.refValue, class: 'btn_number', value: '1'},
    {method: click.refValue, class: 'btn_number', value: '2'},
    {method: click.refValue, class: 'btn_number', value: '3'},
    {method: click.clickMath, class: 'math-action', value: '+'},  
    {method: click.refValue, class: 'btn_number', value: '0'},
    {method: click.refValue, class: 'btn_number', value: '.'},
    {method: click.btnEqual, class: 'equal', id: 'btn_equal', value: '='},  
  ])
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