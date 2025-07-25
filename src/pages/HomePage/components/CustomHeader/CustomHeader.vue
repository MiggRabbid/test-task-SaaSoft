<template>
  <n-space
    vertical
    size="large"
    class="mx-2! h-fit! w-full rounded-b-sm px-5! py-3! shadow-md"
  >
    <div class="flex w-full items-center justify-between">
      <h1 class="grow-1 text-center text-xl font-semibold">Учётные записи</h1>
      <n-button type="info" size="large" @click="addNewAcc">Добавить</n-button>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import { useAccountsStore } from '@/features/AccountItem/store/useAccountsStore';

const store = useAccountsStore();

const addNewAcc = () => store.add();
</script>
