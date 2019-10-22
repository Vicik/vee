module.exports = {
  data1: {
    title: {
      text: 'ECharts 入门示例',
      textAlign: 'left'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  },
  data2: {
    backgroundColor: '#2c343c',
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data:[
          {value:235, name:'视频广告'},
          {value:274, name:'联盟广告'},
          {value:310, name:'邮件营销'},
          {value:335, name:'直接访问'},
          {value:400, name:'搜索引擎'}
        ],
        roseType: 'angle',
        itemStyle: {
          color: '#c23531',
          shadowBlur: 200,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        label: {
          color: '#666'
        },
        labelLine: {
          lineStyle:{
            color: '#666'
          }
        }
      }
    ],
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    }
  }
}