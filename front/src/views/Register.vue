<template>
  <div style="width:100%; height: 100vh;background-color: darkslateblue;overflow: hidden">
    <div style="width: 400px;margin: 100px auto">
      <div style="color: #cccccc;font-size: 30px;text-align: center;padding: 30px 0">欢迎注册</div>
      <el-form ref="form" :model="form" size="normal">
        <el-form-item>
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password "></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.confirm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "theRegister",
  data()
  {
    return{
      form:{}
    }
  },
  methods:{
    register(){
      if(this.form.password!==this.form.confirm)
      {
        this.$message(
            {
              type:"error",
              message:"密码不一致"
            })
        return
      }
      request.post("/api/user/register",this.form).then(res =>{
        if(res.code==='0')
        {
          this.$message(
              {
                type:"success",
                message:"注册成功"
              })
          this.$router.push("/login")
        }
        else {
          this.$message(
              {
                type:"error",
                message:res.msg
              })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>