<template>
  <div class="fund-card">
    <div class="content-left">
      <div class="rank" :class="{ 'top-rank': isTopRank }">
        {{ rank + 1 }}
      </div>
      <div class="fund-info">
        <div class="name">
          {{ data.thailand_fund_code }}
        </div>
        <div class="full-name">
          {{ data.thailand_fund_code }}
        </div>
        <Tag class="nav-date" severity="info" rounded>
          ความเสี่ยง {{ dayjs(data.nav_date).format("DD/MM/YYYY") }}
        </Tag>
      </div>
    </div>

    <div class="content-right">
      <div class="nav-return">{{ Number(data.nav_return).toFixed(2) }}</div>
      <div class="nav">{{ Number(data.nav).toFixed(2) }} บาท</div>
      <Tag class="nav-date" severity="secondary" rounded>
        ข้อมูล ณ วันที่ {{ dayjs(data.nav_date).format("DD/MM/YYYY") }}
      </Tag>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

interface FundItem {
  mstar_id: string;
  thailand_fund_code: string;
  nav_return: number;
  nav: number;
  nav_date: number;
  avg_return: number;
}

interface Props {
  data: FundItem;
  rank: number;
}

const props = defineProps<Props>();

const isTopRank = computed(() => {
  if (props.rank < 3) return true;
  else return false;
});
</script>

<style lang="scss" scoped>
.fund-card {
  padding: 10px 15px;
  background: #ffffff;
  color: #334155;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
}

.content-left {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.fund-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.content-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
}

.top-rank {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
}

.rank {
  display: flex;
  align-items: center;
  margin-right: 10px;
  //font-weight: bold;
}

.name {
  font-size: 18px;
  font-weight: bold;
}

.full-name {
  font-size: 14px;
  color: #333;
  //font-weight: bold;
}

.nav-date {
  font-size: 10px;
}

.nav-return {
  font-weight: bold;
  color: green;
}

.nav {
  font-size: 12px;
}
</style>
