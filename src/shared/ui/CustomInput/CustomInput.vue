<template>
  <n-input
    v-bind="$attrs"
    size="large"
    :type="type"
    :placeholder="placeholder"
    :minlength="maxlength"
    :maxlength="maxlength"
    :show-password-on="showPasswordOn"
    :value="modelValue"
    :autosize="
      multiRow
        ? {
            minRows: 3,
            maxRows: 5,
          }
        : undefined
    "
    style="width: 100%"
    @update:value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui';

defineProps<{
  multiRow?: boolean;
  modelValue: string;
  placeholder?: string;
  type?: 'text' | 'password';
  minlength?: number;
  maxlength?: number;
  showPasswordOn?: 'click' | 'mousedown';
}>();

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: string): void;
}>();
</script>
