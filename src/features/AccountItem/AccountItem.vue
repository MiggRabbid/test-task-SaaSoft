<template>
  <n-space align="start">
    <div class="flex w-110 gap-4">
      <CustomInput
        v-model:value="local.labels"
        class="w-53!"
        type="textarea"
        placeholder="Введите метки"
        :maxlength="50"
        :multiRow="true"
        :onBlur="handelOnBlurLabels"
      />

      <!-- По хорошему, нужно тоже вынести в отдельный компонент -->
      <n-select
        v-model:value="local.type"
        :options="options"
        size="large"
        style="width: 200px !important"
        placeholder="Выберете тип"
        class="w-53! shrink-0!"
        @update:value="handelTypeChange"
      />
    </div>

    <div class="flex w-110 gap-4">
      <CustomInput
        v-model:value="local.login"
        type="text"
        placeholder="Логин"
        :error="local.errors.login"
        :maxlength="100"
        :onBlur="handelOnBlurInput"
      />

      <template v-if="local.type === 'Локальная'">
        <CustomInput
          v-model:value="local.password"
          type="password"
          placeholder="Пароль"
          :error="local.errors.password"
          :maxlength="100"
          showPasswordOn="mousedown"
          :onBlur="handelOnBlurInput"
        />
      </template>
    </div>

    <n-button quaternary class="size-10! p-2!" @click="handelDelete"
      ><DeleteForeverRound class="size-8 text-slate-600!"
    /></n-button>
  </n-space>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits, watch } from 'vue';

import { useAccountValidation } from '@/hooks';
import { getLabelStr } from './utils/getLabelStr.ts';
import { getLabelsArr } from './utils/getLabelsArr.ts';
import { options } from './config/constants.ts';
import { useAccountsStore } from '../../features/AccountItem/store/useAccountsStore';

import { CustomInput } from '@/shared/ui/CustomInput';
import { DeleteForeverRound } from '@/assets/svg/icons';

import { TypeRecord } from './types';
import type { IAccount, IAccountListItem } from './types';

const store = useAccountsStore();

const props = defineProps<{ account: IAccount }>();

const emit = defineEmits<{
  (e: 'update', acc: IAccount): void;
}>();

const local = reactive<IAccountListItem>({
  id: props.account.id,
  labels: getLabelStr(props.account.labels),
  type: props.account.type,
  login: props.account.login,
  password: props.account.password,
  errors: { login: false, password: false },
});

const errors = reactive(local.errors);

const saveAccountData = () => {
  const result = useAccountValidation(local);
  errors.login = result.errors.login;
  errors.password = result.errors.password;

  if (result.valid) {
    const toStore: IAccount = {
      id: local.id,
      labels: getLabelsArr(local.labels),
      type: local.type,
      login: local.login,
      password: local.password,
    };

    store.update(toStore);
    emit('update', toStore);
  }
};

const handelOnBlurLabels = () => {
  saveAccountData();
};

const handelTypeChange = () => {
  if (local.type === TypeRecord.LDAP) {
    local.password = null;
  }

  if (local.type === TypeRecord.LOCAL) {
    local.password = '';
  }

  saveAccountData();
};

const handelOnBlurInput = () => {
  saveAccountData();
};

const handelDelete = () => {
  store.remove(props.account.id);
};

watch(
  () => props.account,
  (acc) => {
    local.id = acc.id;
    local.labels = getLabelStr(acc.labels);
    local.type = acc.type;
    local.login = acc.login;
    local.password = acc.password;
    errors.login = false;
    errors.password = false;
  },
);
</script>
