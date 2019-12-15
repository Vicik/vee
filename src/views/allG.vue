<style lang="less" scoped>
  .allG{
    padding: 20px;
    height: 100%;
    background: #fff;
  }
  .inline-form{
    width: 1000px;
  }
  .inline-form .el-input__inner{
    padding-right: 15px;
  }
  .inline-form .el-select{
    width: 178px;
  }
  .allG .inline-form .el-row:last-child{
    text-align: center;
  }
  .allG .el-table {
    margin: 20px 0;
    width: 1000px;
  }
  .block .el-image{
    float: left;
  }
  .title{
    float: left;
    margin-left: 5px;
  }
</style>
<template>
  <div class="allG">
    <el-form  ref="form" :model="formData" :inline="true" class="inline-form" label-width="110px" size="mini">
      <el-row>
        <el-col :span="8">
          <el-form-item label="商品名称：">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商家编码：">
            <el-input v-model="formData.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="一级类目：">
            <el-select v-model="formData.topCategories" placeholder="请选择一级类目">
              <el-option label="衣物" value="clothes"></el-option>
              <el-option label="化妆品" value="cosmetics"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="价格：">
            <el-input v-model="formData.price"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="总销量：">
            <el-input v-model="formData.counts"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="店铺中的分类：">
            <el-input v-model="formData.secondeCategories"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="16">
          <el-button type="primary" size="small">搜索</el-button>
          <el-button size="small">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData" border>
      <el-table-column label="商品名称">
        <template  slot-scope="scope">
          <div class="block">
            <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.pic"
            fit="fit"></el-image>
            <span class="title">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格(元)" width="100px">
        <template slot-scope="scope">
          <span>&yen; </span>
          <span>{{scope.row.price}} </span>
          <i class="el-icon-edit"></i>
        </template>
      </el-table-column>
      <el-table-column prop="stocks" label="库存(件)" width="100px"></el-table-column>
      <el-table-column prop="counts" label="总销量(件)" width="100px"></el-table-column>
      <el-table-column prop="time" label="发布时间" width="100px"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        code: '',
        topCategories: '',
        price: '',
        counts: '',
        secondeCategories: ''
      },
      tableData: [
        {
          name: '化妆刷',
          pic: require('../assets/img/1.jpg'),
          price: 20,
          stocks: 300,
          counts: 2000,
          time: '2019-1-2'
        },
        {
          name: '冷风机',
          pic: require('../assets/img/2.jpg'),
          price: 1200,
          stocks: 300,
          counts: 200,
          time: '2019-11-2'
        },
        {
          name: '雪地靴',
          pic: require('../assets/img/3.jpg'),
          price: 200,
          stocks: 30,
          counts: 2000,
          time: '2019-11-22'
        },
        {
          name: '整装方案',
          pic: require('../assets/img/4.jpg'),
          price: 20000,
          stocks: 10,
          counts: 200000,
          time: '2019-1-22'
        },
        {
          name: '电采暖器',
          pic: require('../assets/img/5.jpg'),
          price: 1500,
          stocks: 30,
          counts: 2000,
          time: '2019-11-26'
        }
      ]
    }
  }
}
</script>
