<template>
  <n-input
    v-bind="$attrs"
    :type="type"
    :placeholder="placeholder"
    :minlength="maxlength"
    :maxlength="maxlength"
    :show-password-on="showPasswordOn"
    :value="modelValue"
    @update:value="emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import { NInput } from 'naive-ui';

defineProps<{
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
