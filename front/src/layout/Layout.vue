<template>
  <div>
    <div style="display:flex">
      <theAside />
      <router-view  style="flex: 1"/>
    </div>
  </div>
</template>

<style>
</style>

<script>
import theAside from "@/components/Aside";

export default {
  name:"theLayout",
  components :{
    theAside

  }
}
</script>