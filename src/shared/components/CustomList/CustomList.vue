<template>
  <n-list class="flex! h-fit w-fit min-w-200 flex-col gap-3 rounded-md p-6! shadow-md">
    <template v-if="isEmpty">
      <div class="py-4 text-center text-slate-600">Нет данных</div>
    </template>
    <template v-else>
      <slot />
    </template>
  </n-list>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  isEmpty: boolean;
}>();
</script>
