<style lang="less">
  .addAddress{
    padding: 20px;
    height: 100%;
    background: #fff;
  }
</style>
<template>
  <div class="addAddress">
    <el-form ref="form" :model="formData" label-width="80px" :rules="rules">
      <el-form-item label="收货人" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="formData.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData:{
        name: '',
        phone: '',
        address: ''
      },
      rules: {
        name: {required: true,message: '姓名必填',trigger: 'blur'},
        phone: {required: true,message: '联系电话必填',trigger: 'blur'},
        address: {required: true,message: '地址必填',trigger: 'blur'}
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if(valid) {
          this.$message({
            type: 'success',
            message: '创建成功!'
          })
        }else{
          this.$message({
            type: 'error',
            message: '创建失败!'
          })
        }
      })
    }
  }
}
</script>
