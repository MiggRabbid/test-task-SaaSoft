<template>
  <div class="flex min-h-dvh! w-full! flex-col items-center! justify-start! gap-4">
    <CustomHeader />
    <CustomNotes />

    <CustomList :isEmpty="!accounts || !accounts.length">
      <AccountItem v-for="item in accounts" :key="item.id" :account="item" />
    </CustomList>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { CustomHeader } from './components/CustomHeader';
import { CustomNotes } from './components/CustomNotes';
import { CustomList } from '../../shared/components/CustomList';
import { AccountItem } from '../../features/AccountItem';

import { useAccountsStore } from '../../features/AccountItem/store/useAccountsStore';

const store = useAccountsStore();
const accounts = computed(() => store.list);

onMounted(() => store.load());
</script>
