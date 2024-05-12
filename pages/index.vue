<template>
  <div class="grid-container">
    <div class="fund-list" v-for="fund in funds.data">
      <FundCard class="col-6" :data="fund" />
    </div>

    <Button label="submit" />
  </div>
</template>

<script lang="ts" setup>
import funds from "~/public/jsonMockups/funds/list-1Y.json";

onMounted(() => console.log(funds.data));
</script>

<style lang="scss" scoped>
.fund-list {
  margin: 10px 0;
}
/* .grid-container {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
} */
</style>
