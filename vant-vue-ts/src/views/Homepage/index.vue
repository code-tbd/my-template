<template>
  <div class="homepage">
    <span>homepage</span>
    <br />
    <el-button @click="visible = true">点击弹出窗口</el-button>
    <Dialog v-model="visible">
      <div style="height: 300px; font-size: 50px">hello dialog</div>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="less" scoped>
.homepage {
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  text-align: center;
}
</style>
