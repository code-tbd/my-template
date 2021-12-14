<template>
  <el-dialog v-model="visible" destroy-on-close @closed="$emit('update:modelValue', false)">
    <slot></slot>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps<{ modelValue: boolean }>()
defineEmits<{
  (e: 'update:modelValue', visible: boolean): void
}>()
const visible = ref(false)
watch(
  () => props.modelValue,
  (modelValue) => {
    visible.value = modelValue
  }
)
</script>
