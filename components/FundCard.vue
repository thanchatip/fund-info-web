<template>
  <div class="fund-card">
    <div class="content-left">
      <div class="name">{{ data.thailand_fund_code }}</div>
      <Tag class="nav-date" severity="secondary" rounded>
        {{ dayjs(data.nav_date).format("DD MMM YYYY") }}
      </Tag>
    </div>
    <div class="content-right">
      <div class="rank">{{ data.nav_return }}</div>

      <div>
        {{ data.nav }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

interface Props {
  data?: any;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.fund-card {
  padding: 10px 20px;
  background: #ffffff;
  color: #334155;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.content {
  //flex-direction: coloumn;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.nav-date {
  margin-top: 5px;
}
</style>
