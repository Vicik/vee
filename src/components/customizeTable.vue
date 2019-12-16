<style lang="less" scoped>
.el-table {
  margin: 20px 0;
  width: 1000px;
  .el-table__row {
    td {
      padding-top: 40px;
      &:first-of-type {
        padding-top: 12px;
      }
      .cell {
        overflow: visible !important;
        text-overflow: clip;
        .el-checkbox {
          margin-bottom: 5px;
        }
        .block {
          overflow: hidden;
          margin-top: 5px;
          height: 50px;
          line-height: 50px;
          .el-image {
            float: left;
          }
          .title {
            margin-left: 5px;
          }
        }
      }
      &:first-of-type {
        .block {
          padding-left: 10px;
          .title {
            position: relative;
            top: -15px;
          }
        }
      }
    }
  }
}
</style>
<template>
  <el-table :data="tableData">
    <el-table-column label="商品">
      <template slot-scope="scope">
        <el-checkbox
          v-model="scope.row.checked"
        >订单编号：{{ scope.row.orderCode}}&nbsp;&nbsp;&nbsp;&nbsp;成交时间：{{scope.row.buyTime}}</el-checkbox>
        <div class="block" v-for="(item, i) in scope.row.goods" :key="i">
          <el-image style="width: 50px; height: 50px" :src="item.pic" fit="fit"></el-image>
          <span class="title">{{ item.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="单价(元)" width="100px">
      <template slot-scope="scope">
        <div class="block" v-for="(item, i) in scope.row.goods" :key="i">
          <span>&yen;</span>
          <span class="title">{{ item.price }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="数量(件)" width="100px">
      <template slot-scope="scope">
        <div class="block" v-for="(item, i) in scope.row.goods" :key="i">
          <span class="title">{{ item.count }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="buyer" label="买家" width="100px"></el-table-column>
    <el-table-column label="交易状态" width="100px">
      <template slot-scope="scope">
        <div>{{scope.row.status}}</div>
        <el-link type="primary" :underline="false">详情</el-link>
      </template>
    </el-table-column>
    <el-table-column label="实收(元）" width="100px">
      <template slot-scope="scope">
        <div class="block" v-for="(item, i) in scope.row.goods" :key="i">
          <span>&yen;</span>
          <span class="title">{{ item.received }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="160px">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          :disabled="scope.row.editStatus=='-1'"
          @click="handleDeliver(scope.row)"
        >{{scope.row.editStatus!=='-1'?edit.editable:edit.noEditable}}</el-button>
        <el-button size="mini" type="danger" @click="handleDelete">{{edit.delete}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["tableData", "edit"],
  methods: {
    handleDeliver(row) {
      if (this.edit.editable == "发货") {
        this.confirmMsg("是否确认发货", "发货成功", "取消发货", row);
      } else {
        this.confirmMsg("是否确认退款", "退款成功", "取消退款", row);
      }
    },
    handleDelete() {
      this.confirmMsg("是否确认删除", "删除成功", "取消删除");
    },
    confirmMsg(msg, successMsg, failMsg, row) {
      this.$confirm(msg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          if(row) {
            if (row.editStatus == "-1") {
              return;
            } else {
              row.editStatus = "-1"; //-1表示已发货|已退款，0表示未发货|未退款
            }
          }
          this.$message({
            type: "success",
            message: successMsg
          });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: failMsg
          });
        });
    }
  }
};
</script>