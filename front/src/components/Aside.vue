<template>
  <div>
    <el-menu
        @select="menuClick"
        style="width: 200px; min-height: calc(100vh - 50px)"
        default-active="theLayout"
        router
    >
      <el-menu-item index="theGpt" ><span>Chatgpt</span></el-menu-item>
      <el-menu-item index="AI-draw"><span>AI绘画</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script >
export  default {
  name:"theAside",
  methods: {
    //index 就是要跳转的路由
    menuClick(index)
    {
      this.$router=index;
    },
  }
}

</script>


<style scoped>

</style>