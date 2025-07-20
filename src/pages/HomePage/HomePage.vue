<template>
  <div class="flex min-h-dvh! w-full! flex-col items-center! justify-start! gap-4">
    <CustomHeader />
    <CustomNotes />

    <CustomList>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
    </CustomList>
  </div>
</template>

<script setup lang="ts">
import { CustomHeader } from './components/CustomHeader';
import { CustomNotes } from './components/CustomNotes';
import { CustomList } from '../../shared/components/CustomList';
import { AccountItem } from '../../features/AccountItem';
</script>
