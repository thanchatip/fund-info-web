<template>
  <div class="app-layout">
    <div class="card">
      <Menubar :model="items" />
    </div>
    <div class="app-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
  },
]);
</script>

<style lang="scss" scoped>
.app-content {
  padding: 20px 0;
}
</style>
