<template>
  <router-view v-slot="{ Component: RouterViewComponent }">
    <component
      :is="RouterViewComponent"
      v-if="RouterViewComponent"
      class="app-main"
    />
    <main
      v-else
      class="app-main"
    />
  </router-view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
</style>
