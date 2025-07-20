<template>
  <n-input
    v-bind="$attrs"
    size="large"
    :class="customClass"
    :type="type"
    :placeholder="placeholder"
    :minlength="maxlength"
    :maxlength="maxlength"
    :show-password-on="showPasswordOn"
    :autosize="multiRow ? { minRows: 1, maxRows: 2 } : undefined"
    :status="localError ? 'error' : ''"
    @update:value="(value) => emit('update:modelValue', value)"
    @blur="props.onBlur?.()"
  />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  multiRow?: boolean;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'password';
  minlength?: number;
  maxlength?: number;
  showPasswordOn?: 'click' | 'mousedown';
  error?: boolean;
  onBlur?: () => void;
}>();

console.log(props.multiRow);

const customClass = props.multiRow && props.type === 'textarea' ? 'h-fit' : undefined;

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: string): void;
}>();

const localValue = ref(props.modelValue);
const localError = computed(() => props.error);

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  },
);

watch(localValue, (val) => {
  emit('update:modelValue', val);
});
</script>
