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
        :modelValue="local.login"
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
import { reactive, toRaw } from 'vue';
import { defineProps, defineEmits, watch } from 'vue';

import { getLabelStr } from './utils/getLabelStr.ts';
import { getLabelsArr } from './utils/getLabelsArr.ts';
import { options } from './config/constants.ts';

import { CustomInput } from '../../shared/ui/CustomInput';
import { DeleteForeverRound } from '../../assets/svg/icons';
import { useAccountsStore } from '../../features/AccountItem/store/useAccountsStore';

import { TypeRecord } from './types/index.ts';
import type { IAccount, IAccountListItem } from './types/index.ts';

const store = useAccountsStore();

const props = defineProps<{ account: IAccount }>();

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update', acc: IAccountListItem): void;
}>();

const local: IAccountListItem = reactive<IAccountListItem>({
  ...toRaw({
    ...props.account,
    labels: getLabelStr(props.account.labels),
  }),
});

const validateDataAndSave = () => {
  /* Тут также желательна валидация по "левые" символы/знаки */
  let errors = false;

  local.errors.login = false;
  local.errors.password = false;

  if (!local.login.length) {
    local.errors.login = true;
    errors = true;
  }

  if (local.type === TypeRecord.LOCAL && !local.password?.length) {
    local.errors.password = true;
    errors = true;
  }

  emit('update', toRaw(local));

  if (!errors) {
    const prepareDataForStore: IAccount = {
      ...local,
      labels: getLabelsArr(local.labels),
    };
    store.update(toRaw(prepareDataForStore));
  }
};

const handelOnBlurLabels = () => {
  emit('update', toRaw(local));
  validateDataAndSave();
};

const handelTypeChange = () => {
  if (local.type === TypeRecord.LDAP) {
    local.password = null;
  }

  if (local.type === TypeRecord.LOCAL) {
    local.password = '';
  }

  emit('update', toRaw(local));
  validateDataAndSave();
};

const handelOnBlurInput = () => {
  emit('update', toRaw(local));
  validateDataAndSave();
};

const handelDelete = () => {
  store.remove(props.account.id);
};

watch(
  () => props.account,
  (newVal) => {
    Object.assign(
      local,
      toRaw({
        ...newVal,
        labels: getLabelStr(newVal.labels),
      }),
    );
  },
);
</script>
