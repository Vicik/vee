<style lang="less" scoped>
  .order{
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
  .order .el-table {
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
  .order .el-date-editor.el-input{
    width: 178px;
  }
  .order .el-table .cell{
    overflow: normal;
  }
  .order .el-table .el-checkbox{
    margin-bottom: 5px;
  }
  .order .edit{
    margin-top: 5px;
  }
  .order .edit .el-link{
    margin-right: 30px;
  }
</style>
<template>
  <div class="order">
    <el-form  ref="form" :model="formData" :inline="true" class="inline-form" label-width="110px" size="mini">
      <el-row>
        <el-col :span="8">
          <el-form-item label="商品名称：">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开始时间：">
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
          <el-form-item label="结束时间：">
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
          <el-form-item label="买家昵称：">
            <el-input v-model="formData.buyer"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单状态：">
            <el-select v-model="formData.status" placeholder="请选择">
              <el-option v-for="item in orderStatus" :key="item.label" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="评价状态：">
            <el-select v-model="formData.evaluate" placeholder="请选择">
              <el-option v-for="item in evaluation" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="订单编号：">
            <el-input v-model="formData.numbers"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: center">
          <el-button type="primary" size="small">搜索</el-button>
          <el-button size="small">重置</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="edit">
      <el-checkbox v-model="allChecked">全选</el-checkbox>
      <el-link type="primary" :underline="false">批量发货</el-link>
      <el-link type="primary" :underline="false">批量免运费</el-link>
      <el-checkbox v-model="showChecked">不显示已关闭订单</el-checkbox>
    </div>
    <el-table :data="tableData">
      <el-table-column label="商品" class="">
        <template  slot-scope="scope">
          <el-checkbox v-model="scope.row.checked">
            订单编号：{{ scope.row.orderCode}}&nbsp;&nbsp;&nbsp;&nbsp;成交时间：{{scope.row.buyTime}}
          </el-checkbox>
          <div class="block">
            <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.pic"
            fit="fit"></el-image>
            <span class="title">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="单价(元)" width="100px">
        <template slot-scope="scope">
          <span>&yen; </span>
          <span>{{scope.row.price}} </span>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="数量(件)" width="100px"></el-table-column>
      <el-table-column prop="buyer" label="买家" width="100px"></el-table-column>
      <el-table-column label="交易状态" width="100px">
        <template slot-scope="scope">
          <div>{{scope.row.status}}</div>
          <el-link type="primary" :underline="false">详情</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="received" label="实收(元）" width="100px"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template>
          <el-button size="mini" type="primary" @click="handleDeliver">发货</el-button>
          <el-button size="mini" type="danger" @click="handleRefund">退款</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allChecked: false,
      showChecked: false,
      formData: {
        name: '',
        startTime: '',
        endTime: '',
        buyer: '',
        status: '',
        evaluate: '',
        numbers: '',
        service: ''
      },
      orderStatus: [
        {value: '0', label: '全部订单'},
        {value: '1', label: '交易成功'},
        {value: '2', label: '交易关闭'},
        {value: '3', label: '已发货'},
        {value: '4', label: '等待发货'},
        {value: '5', label: '退款中'},
        {value: '6', label: '退款成功'}
      ],
      evaluation: [
        {value: '0', label: '已评价'},
        {value: '1', label: '未评价'}
      ],
      tableData: [
        {
          checked: false,
          orderCode: 201902010202,
          buyTime: '2019-1-2 02:30:20',
          name: '化妆刷',
          pic: require('../assets/img/1.jpg'),
          count: 1,
          price: 20,
          buyer: 'xx',
          status: '交易成功',
          received: 20
        },
        {
          checked: false,
          orderCode: 201902010203,
          buyTime: '2019-1-2 02:30:00',
          name: '冷风机',
          pic: require('../assets/img/2.jpg'),
          price: 1200,
          count: 2,
          buyer: 'yy',
          status: '交易关闭',
          received: 2400
        },
        {
          checked: false,
          orderCode: 201902010203,
          buyTime: '2019-1-2 04:30:20',
          name: '雪地靴',
          pic: require('../assets/img/3.jpg'),
          price: 200,
          count: 3,
          buyer: 'xzx',
          status: '交易成功',
          received: 600,
        },
        {
          checked: false,
          orderCode: 201902010204,
          buyTime: '2019-1-2 02:45:20',
          name: '整装方案',
          pic: require('../assets/img/4.jpg'),
          price: 20000,
          count: 1,
          buyer: 'ax',
          status: '交易成功',
          received: 20000,
        },
        {
          checked: false,
          orderCode: 201902010205,
          buyTime: '2019-1-2 12:30:20',
          name: '电采暖器',
          pic: require('../assets/img/5.jpg'),
          price: 1500,
          count: 1,
          buyer: 'xxx',
          status: '交易成功',
          received: 1500,
        }
      ]
    }
  },
  methods: {
    handleDeliver() {
      this.$confirm('是否确认发货？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '发货成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '发货失败'
        })         
      })
    },
    handleRefund() {
      this.$confirm('是否确认退款？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退款成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '退款失败'
        })      
      })
    }
  }
}
</script>
