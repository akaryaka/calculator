<script lang="ts" setup>
  import { history } from '../constants';
</script>

<template>
  <section class="history">
    <h2>История операций</h2>
    <div class="output">
      <table class="table">
        <thead>
          <tr class="table__header">
            <th>№</th>
            <th>операция</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__row" v-for="(item, index) in history" :key="index"> 
            <td>{{ Number(index) + 1 }}</td>
            <td>{{ item }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
  td, th {
    color: #000;
    padding: 10px 15px; 
}
</style>