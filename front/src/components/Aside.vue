<template>
  <div>
    <el-menu
        style="width: 200px; min-height: calc(100vh - 50px)"
        default-active="theLayout"
        router
    >
      <el-menu-item index="Gpt" ><span>Chatgpt</span></el-menu-item>
      <el-menu-item index="AI-draw"><span>AI绘画</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script >
export  default {
  name:"theAside"
}
</script>


<style scoped>

</style>