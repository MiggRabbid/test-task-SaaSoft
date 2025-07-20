<template>
  <n-space align="start">
    <n-input placeholder="Метка" :maxlength="50" style="width: 200px" />

    <n-select
      :options="[
        { label: 'Локальная', value: 'Локальная' },
        { label: 'LDAP', value: 'LDAP' },
      ]"
      style="width: 200px"
      placeholder="Выберете тип записи"
    />

    <n-input placeholder="Логин" :maxlength="100" style="width: 200px" />

    <template v-if="true">
      <n-input
        type="password"
        placeholder="Пароль"
        :maxlength="100"
        style="width: 200px"
        show-password-on="mousedown"
      />
    </template>
  </n-space>
</template>

<script setup lang="ts"></script>
