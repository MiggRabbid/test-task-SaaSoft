<template>
  <n-space align="start">
    <CustomInput type="text" placeholder="Введите метки" modelValue="" maxlength="100" />

    <n-select :options="options" style="width: 200px" placeholder="Выберете тип" />

    <CustomInput type="text" placeholder="Логин" modelValue="" maxlength="100" />

    <template v-if="true">
      <CustomInput
        type="password"
        placeholder="Пароль"
        modelValue=""
        minlength="4"
        maxlength="200"
        show-password-on="mousedown"
      />
    </template>
  </n-space>
</template>

<script setup lang="ts">
import { options } from './config/constants.ts';
import { CustomInput } from '../../shared/ui/CustomInput';
</script>
