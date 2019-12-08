<style lang="less">
.bg{
  height: 100vh;
  background: #316594 url('../assets/img/bg.png') no-repeat 0 100%;
  .login{
    .title{
      font-size: 24px;
    }
    padding: 80px 40px 40px 40px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 290px;
    height: 300px;
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    color: #D3D7F7;
    text-align: center;
    .form{
      div{
        margin: 0;
      }
      margin-top: 40px;
      input{
        background-color: transparent;
        border: none;
        outline: none;
        color: #316594
      }
      button{
        margin-top: 10px;
        padding: 12px 40px;
        background: transparent;
        border: 1px solid #409EFF;
        color: #409EFF;
        &:hover{
          color: #fff;
          background: #409EFF;
        }
      }
    }
    span.welcome{
      position: relative;
      bottom: -70px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="bg">
    <div class="login">
      <h2 class="title">管理员登录</h2>
      <el-form :model="form" label-position="left" class="form" :rules="rules" ref="forms" :status-icon="true" :show-message="false">
        <el-form-item prop="name">
          <el-col :span="1">
            <i class="el-icon-user"></i>
          </el-col>
          <el-col :span="21">
            <el-input placeholder='用户名' autofocus v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-col :span="1">
            <i class="el-icon-unlock"></i>
          </el-col>
          <el-col :span="21">
            <el-input placeholder='密码' v-model="form.pwd"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="code">
          <el-col :span="1">
            <i class="el-icon-key"></i>
          </el-col>
          <el-col :span="21">
            <el-input placeholder='验证码' v-model="form.code"></el-input>
          </el-col>
        </el-form-item>
        <el-button  round @click="submit">登录</el-button>
      </el-form>
      <span class="welcome">欢迎登录后台管理系统</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        pwd: '',
        code: ''
      },
      rules: {
        name: [{required: true, trigger: 'blur'}],
        pwd: [{required: true, trigger: 'blur'}],
        code: [{required: true, trigger: 'blur'}]
      }
    }
  },
  methods: {
    submit() {
      let that = this
      this.$refs.forms.validate(function(valite){
        if(valite) {
          that.$router.push({
            path: '/index'
          })
        }
      })
    }
  }
}
</script>
