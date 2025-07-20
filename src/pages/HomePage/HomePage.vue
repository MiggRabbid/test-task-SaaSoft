<template>
  <n-space vertical size="large" class="bg-sky-200 px-5! py-3!">
    <div class="flex w-full items-center justify-between">
      <h1 class="grow-1 text-center text-xl font-semibold">Учётные записи</h1>
      <n-button type="info" size="large">Добавить</n-button>
    </div>
  </n-space>
  <div class="flex h-fit w-fit gap-2 rounded-md! bg-slate-200 px-3! py-2!">
    <QuestionMarkRound class="size-5 rounded-full bg-slate-600 p-0.5! text-slate-200" />
    <p class="text-base! text-slate-600">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель
      `;`
    </p>
  </div>

  <n-space size="large" class="px-5! py-3!">
    <CustomList>
      <AccountItem />
      <AccountItem />
    </CustomList>
  </n-space>
</template>

<script setup lang="ts">
import QuestionMarkRound from '../../assets/svg/icons/QuestionMarkRound.vue';
import CustomList from '../../shared/components/CustomList/CustomList.vue';
import AccountItem from '../../features/AccountItem/AccountItem.vue';
</script>
