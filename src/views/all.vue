<style lang="less">
  .home{
    width: 100%;
    .statistics{
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      height: 100px;
      .item{
        padding: 10px 10px 10px 20px;
        display: flex;
        align-items: center;
        width: 24%;
        min-width: 220px;
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        box-sizing: border-box;
        &:nth-child(1) {
          .icon{
            background-color: #DF99CA;
          }
        }
        &:nth-child(2) {
          .icon{
            background-color: #7CF29C;
          }
        }
        &:nth-child(4) {
          .icon{
            background-color: #FFC36D;
          }
        }
        .icon{
          margin-right: 10px;
          width: 50px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          font-size: 28px;
          color: #fff;
          background-color: #4C84FF;
          border-radius: 50%;
        }
        .content{
          .des{
            margin-top: 5px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
    .el-card__header{
      padding: 10px 20px;
      height: 36px;
      box-sizing: border-box;
    }
    .box-card{
      box-sizing: border-box;
      background-color: #fff;
      border: none;
    }
    .orderStatus{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
      .box-card:nth-child(1) {
        width: 59%;
        min-width: 520px;
      }
      .box-card:nth-child(2) {
        width: 40%;
        min-width: 360px;
      }
      .chart{
        height: 164px;
      }
      .count{
        height: 164px;
      }
    }
    .info{
      display: flex;
      justify-content: space-between;
      .box-card{
        width: 49.5%;
        min-width: 445px;
        height: 400px;
        .el-card__body{
          height: 364px;
          .detail{
            margin: 0 20px;
            border-bottom: 1px dotted #ccc;
            .text{
              color: #ccc;
            }
            li{
              height: 30px;
              line-height: 30px;
            }
            .msg{
              height: 364px;
              padding-bottom: 10px;
              box-sizing: border-box;
              li{
                height: 35px;
                line-height: 35px;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
              }
            }
          }
          .order{
            padding-top: 20px;
            padding-bottom: 10px;
            h3{
              margin: 0 20px 7px 20px;
            }
            .toDo{
              display: flex;
              padding: 0 10px;
              justify-content: space-between;
              align-content: space-around;
              flex-wrap: wrap;
              height: 190px;
              font-size: 14px;
              .list{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding-left: 10px;
                width: 49%;
                min-width: 197px;
                height: 85px;
                background-color: #ccc;
                box-sizing: border-box;
                a{
                  color: #000;
                }
                span{
                  i{
                    padding-right: 5px;
                    font-size: 16px;
                    font-weight: bolder;
                    color: #EF6770;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
</style>

<template>
  <div class="home">
    <ul class="statistics">
      <li class="item">
        <i class="iconfont icon-jine icon"></i>
        <div class="content">
          <span>1000元</span>
          <p class="des">今日订单金额</p>
        </div>
      </li>
      <li class="item">
        <i class="iconfont icon-yigoushuliang icon"></i>
        <div class="content">
          <span>100件</span>
          <p class="des">今日订单数量</p>
        </div>
      </li>
      <li class="item">
        <i class="iconfont icon-liulan icon"></i>
        <div class="content">
          <span>2000人</span>
          <p class="des">今日用户浏览数量</p>
        </div>
      </li>
      <li class="item">
        <i class="iconfont icon-6xiaoliang icon"></i>
        <div class="content">
          <span>20000元</span>
          <p class="des">本月总销售额</p>
        </div>
      </li>
    </ul>
    <div class="orderStatus">
      <el-card class="box-card" :body-style="{padding: '0',backgroundColor: '#fff'}">
        <div slot="header">
          <span>本周订单金额(单位：万元)</span>
        </div>
        <div  class="chart">
          <div ref="chart1" :style="{height: '200px'}"></div>
        </div>
      </el-card>
      <el-card class="box-card" :body-style="{padding: '0',backgroundColor: '#fff'}">
        <div slot="header">
          <span>本周订单数量</span>
        </div>
        <div class="count">
          <div ref="chart2" :style="{height: '200px'}"></div>
        </div>
      </el-card>
    </div>
    <div class="info">
      <el-card class="box-card" :body-style="{padding: '0',backgroundColor: '#fff'}">
        <div slot="header">
          <span>商家信息</span>
        </div>
        <ul class="detail">
          <li><span class="text">店铺名称：</span>橘子红了</li>
          <li><span class="text">创建时间：</span>2019-1-1</li>
          <li><span class="text">店铺状态：</span>正常</li>
          <li><span class="text">店铺等级：</span>五星</li>
        </ul>
        <div class="order">
          <h3>待处理事项</h3>
          <ul class="toDo">
            <li class="list">
              <a href="#">等待发货订单</a>
              <span><i class="bold">4</i>笔</span>
            </li>
            <li class="list">
              <a href="#">等待退货审核订单</a>
              <span><i class="bold">1</i>笔</span>
            </li>
            <li class="list">
              <a href="#">等待确认结算单</a>
              <span><i class="bold">24</i>笔</span>
            </li>
            <li class="list">
              <a href="#">待上架商品</a>
              <span><i class="bold">4</i>件</span>
            </li>
          </ul>
        </div>
      </el-card>
      <el-card class="box-card" :body-style="{padding: '0',backgroundColor: '#fff'}">
        <div slot="header">
          <span>最新公告</span>
          <a href="#" style="float:right;font-size:12px;line-height:20px;color:#000;">更多></a>
        </div>
        <div class="detail">
          <ul class="msg">
            <li v-for="(item, i) in news" :key="i">
              <p>{{item.title}}</p>
              <span>{{item.time}}</span>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'},
        {title: '新功能上线',time: '2019-1-1'}
      ],
      chart1: {
        color: ['#EF6770'],
        xAxis: {
          boundaryGap: false,
          data: ["Mon","Tues","Wed","Thur","Fri","Sat",'Sun']
        },
        yAxis: {
          splitLine: {show: false}
        },
        tooltip: {
          trigger: 'axis',
          position: 'top'
        },
        series: [{
          name: '金额',
          type: 'line',
          data: [1.5, 2, 3.6, 1.0, 1.0, 2.0, 2.5],
          areaStyle:{},
          smooth: true
        }]
      },
      chart2: {
        color: ['#3BCCE1'],
        xAxis: {
          data: ["Mon","Tues","Wed","Thur","Fri","Sat",'Sun']
        },
        yAxis: {
          splitLine: {show: false}
        },
        tooltip: {
          position: 'top'
        },
        series: [{
          name: '金额',
          type: 'bar',
          data: [150, 250, 360, 120, 190, 200, 250],
          barWidth: 15
        }],
      }
    }
  },
  mounted() {
    this.drowLine()
  },
  updated() {
  },
  methods: {
    drowLine() {
      var myEchart1 = this.$echarts.init(this.$refs.chart1)
      myEchart1.setOption(this.chart1)
      var myEchart2 = this.$echarts.init(this.$refs.chart2)
      myEchart2.setOption(this.chart2)
      window.addEventListener("resize", () => {
        myEchart1.resize()
        myEchart2.resize()
      })
    }
  }
}
</script>