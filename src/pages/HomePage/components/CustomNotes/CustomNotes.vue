<template>
  <div class="my-3! flex h-fit w-fit gap-2 rounded-2xl! bg-slate-200 px-3! py-2!">
    <QuestionMarkRound class="size-5 rounded-full bg-slate-600! p-0.5! text-slate-200!" />
    <p class="text-base! text-slate-600">
      Для указания нескольких меток для одной пары логин/пароль используйте разделитель
      `;`
    </p>
  </div>
</template>

<script setup lang="ts">
import { QuestionMarkRound } from '../../../../assets/svg/icons';
</script>
