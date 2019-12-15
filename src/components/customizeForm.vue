<style lang="less" scoped>
  .inline-form{
    width: 1000px;
    .el-date-editor.el-input{
      width: 178px;
    }
    .el-select{
      width: 178px;
      .el-input__inner{
        padding-right: 15px;
      }
    }
  }
</style>
<template>
  <el-form  ref="form" :model="formData" :inline="true" class="inline-form" label-width="110px" size="mini">
    <el-row>
      <el-col :span="8">
        <el-form-item label="商品名称：" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="开始时间：" prop="startTime">
          <div class="block">
            <el-date-picker
              type="datetime"
              size="mini"
              v-model="formData.startTime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="结束时间：" prop="endTime">
          <div class="block">
            <el-date-picker
              type="datetime"
              size="mini"
              v-model="formData.endTime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-form-item label="买家昵称：" prop="buyer">
          <el-input v-model="formData.buyer"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="订单状态：" prop="status">
          <el-select v-model="formData.status" placeholder="请选择">
            <el-option v-for="item in orderStatus" :key="item.label" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="订单编号：" prop="numbers">
          <el-input v-model="formData.numbers"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="16" style="text-align: center">
        <el-button type="primary" size="small" @click="onSubmit">搜索</el-button>
        <el-button size="small" @click="resetForm">重置</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  props: ['formData', 'orderStatus'],
  methods: {
    resetForm() {
      this.$refs.form.resetFields()
    },
    onSubmit() {
      window.console.log(this.formData)
      // this.$refs.form.resetFields()
    }
  }
}
</script>