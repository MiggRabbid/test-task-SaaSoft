<template>
  <n-space align="start">
    <div class="flex w-110 gap-4">
      <CustomInput
        type="text"
        placeholder="Введите метки"
        modelValue=""
        maxlength="100"
        multiRow
      />
      <!-- По хорошему, нужно тоже вынести в отдельный компонент -->
      <n-select
        :options="options"
        size="large"
        style="width: 200px !important"
        placeholder="Выберете тип"
        class="shrink-0!"
      />
    </div>
    <div class="flex w-110 gap-4">
      <CustomInput type="text" placeholder="Логин" modelValue="" maxlength="100" />

      <template v-if="true">
        <CustomInput
          type="password"
          placeholder="Пароль"
          modelValue=""
          minlength="4"
          maxlength="200"
          width="200px"
          show-password-on="mousedown"
        />
      </template>
    </div>

    <n-button quaternary class="size-10! p-2!"
      ><DeleteForeverRound class="size-8 text-slate-600!"
    /></n-button>
  </n-space>
</template>

<script setup lang="ts">
import { CustomInput } from '../../shared/ui/CustomInput';
import { DeleteForeverRound } from '../../assets/svg/icons';
import { options } from './config/constants.ts';
</script>
