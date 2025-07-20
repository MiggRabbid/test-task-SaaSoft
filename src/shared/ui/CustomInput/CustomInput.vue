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
    @blur="props.onBlur?.()"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

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

const customClass = props.multiRow && props.type === 'textarea' ? 'h-fit' : undefined;

const localError = computed(() => props.error);
</script>
