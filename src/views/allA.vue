<style lang="less">
  .allA{
    padding: 20px;
    height: 100%;
    background: #fff;
  }
</style>
<template>
  <div class="allA">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="联系电话"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改收货地址" :visible.sync="show">
      <el-form :model="currentData">
        <el-form-item label="收货人">
          <el-input v-model="currentData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="l=联系电话">
          <el-input v-model="currentData.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="currentData.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: '王小虎',
        phone: '123456',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        name: '王小虎',
        phone: '123456',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        name: '王小虎',
        phone: '123456',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        name: '王小虎',
        phone: '123456',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      show: false,
      deleteShow: false,
      currentData: [],
      formLabelWidth: '120px',
      currentIndex: 0
    }
  },
  methods: {
    handleEdit(index, row) {
      this.show = true
      this.currentData = row
      this.currentIndex = index
    },
    handleDelete(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tableData.splice(index, 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    submit() {
      this.show = false
      this.currentData.date = this.currentTime
    }
  }
}
</script>
