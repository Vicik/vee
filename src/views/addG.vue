<style lang="less">
  .addG{
    padding: 20px;
    height: 100%;
    background: #fff;
  }
  .input_inner{
    width: 80px;
  }
</style>
<template>
  <div class="addG">
    <el-form ref="form" :model="formData" label-width="100px" :rules="rules">
      <el-form-item label="标题:" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="当前价格:" prop="currentPrice">
        <el-input v-model="formData.currentPrice" class="input_inner"></el-input> 元/件
      </el-form-item>
      <el-form-item label="原有价格:" prop="oldPrice">
        <el-input v-model="formData.oldPrice" class="input_inner"></el-input> 元/件
      </el-form-item>
      <el-form-item label="规格:">
        <el-radio-group v-model="radio">
          <el-radio :label="1">1件装</el-radio>
          <el-radio :label="2">2件装</el-radio>
          <el-radio :label="3">3件装</el-radio>
          <el-radio :label="4">4件装</el-radio>
          <el-radio :label="5">5件装</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品数量:" prop="count">
        <el-input v-model="formData.count" class="input_inner"></el-input> 件
      </el-form-item>
      <el-form-item label="商家编码:" prop="code">
        <el-input v-model="formData.code" class="input_inner"></el-input>
      </el-form-item>
      <el-form-item label="商品描述:" prop="desc">
        <el-input type="textarea" v-model="formData.desc" :rows="20" resize="none"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即添加</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        currentPrice: '',
        oldPrice: '',
        specs: '',
        count: '',
        code: '',
        desc: ''
      },
      radio: 1,
      rules: {
        name: {required: true,message: '标题必填',trigger: 'blur'},
        currentPrice: {required: true,message: '当前必填',trigger: 'blur'},
        oldPrice: {required: true,message: '原有必填',trigger: 'blur'},
        count: {required: true,message: '商品数量必填',trigger: 'blur'},
        code: {required: true,message: '商家编码必填',trigger: 'blur'},
        desc: {required: true,message: '商品描述必填',trigger: 'blur'}
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if(valid) {
          this.$message({
            type: 'success',
            message: '添加成功!'
          })
        }else{
          this.$message({
            type: 'error',
            message: '添加失败!'
          })
        }
      })
    }
  },
}
</script>
