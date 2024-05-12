<template>
  <div class="range-selector">
    <div>{{ value }}</div>
    <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
  </div>
  <IconField class="search-input" iconPosition="left">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText v-model="searchKey" placeholder="Search Fund" />
  </IconField>
  <div class="grid-container">
    <div class="fund-list" v-for="(fund, index) in funds.data">
      <FundCard class="col-6" :data="fund" :rank="index" />
    </div>

    <Button label="submit" />
  </div>
</template>

<script lang="ts" setup>
import funds from "~/public/jsonMockups/funds/list-1Y.json";

const value = ref("1Y");
const options = ref(["1D", "1W", "1M", "1Y"]);

const searchKey = ref("");

onMounted(() => console.log(funds.data));
</script>

<style lang="scss" scoped>
.fund-list {
  margin: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: auto;
  gap: 10px;
}

.search-input {
  margin-bottom: 20px;
}

:deep(.p-inputtext) {
  width: 100%;
}

.range-selector {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
