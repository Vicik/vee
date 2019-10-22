<style lang="less">
  .fl{
    float: left;
    margin-right: 10px;
    border: 1px solid lightseagreen;
  }
</style>
<template>
  <div class="home">
    <div ref="echart1" style="width: 600px;height:400px;" class="fl"></div>
    <div ref="echart2" style="width: 600px;height:400px;" class="fl"></div>
  </div>
</template>

<script>
import {data1, data2} from '../assets/data.js'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  mounted() {
    this.drawLine(this.$refs.echart1, data1)
    this.drawLine(this.$refs.echart2, data2)
  },
  methods: {
    drawLine(el,data) {
      var myecharts = this.$echarts.init(el)
      var option = data
      myecharts.setOption(option)
    }
  },
}
</script>
