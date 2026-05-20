<script lang="ts" setup>
  import { history } from '../constants';
</script>

<template>
  <section class="history">
    <h2>История операций</h2>
    <div class="output">
      <ul>
        <li v-for="item in history">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style>

</style>