<template>
  <div>
    <el-button @click="popup">弹窗测试</el-button>
    <p v-highlight="'yellow'">高亮显示此文本亮黄色</p>
    <el-dialog
      width="30%"
      title="提示"
      class="qwer"
      v-model="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      v-highlight="'yellow'"
    >
      <div class="pou" v-highlight="'yellow'">
        <span>这是一段信息</span>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
// import {
//   onMounted,
//   onUpdated,
//   onBeforeUpdate,
//   ref, // 定义响应式基本类型
//   reactive, // 定义响应式对象
// } from 'vue'

export default {
  name: 'About',
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    popup() {
      console.log("popup")
      this.dialogVisible = true
    },
  },
  setup() {},
}
</script>

<style lang="scss" scoped>

</style>