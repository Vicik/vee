<style lang="less">
  .index{
    margin: 0 auto;
    // width: 1120px;
    height: 100%;
    background-color: rgb(247, 247, 247);
    overflow: hidden;
    .nav{
      padding-right: 30px;
      height: 50px;
      line-height: 50px;
      text-align: right;
      background-color: #fff;
      a{
        margin-left: 10px;
      }
    }
    .main{
      display: flex;
      width: 100%;
      height: 100%;
      .asideNav{
        position: relative;
        top: -50px;
        padding-top: 50px;
        width: 200px;
        height: 100%;
        box-sizing: border-box;
        .el-menu-item{
          min-width: 199px;
        }
      }
      .container{
        padding: 20px;
        flex: 1;
        min-width: 940px;
        box-sizing: border-box;
        background-color: #F8F9FB;
        .tabs{
          padding: 0 10px;
          background: #fff;
          .el-tabs__header{
            margin-bottom: 0;
          }
          .el-tabs__nav{
            padding: 0 10px;
            .el-tabs__active-bar{
              padding: 0 10px !important;
            }
          }
        }
      }
    }
   }
</style>
<template>
  <div class="index">
    <div class="nav">
      <span>欢迎！</span>
      <router-link to="/">退出账号</router-link>
    </div>
    <div class="main">
      <el-menu background-color="#545c64" text-color="#fff" class="asideNav" :unique-opened="true" :default-active="active"  :default-openeds="openeds">
        <el-menu-item index="1" @click="backToIndex">
          <span  slot="title">首页</span >
        </el-menu-item>
        <el-submenu v-for="(list, i) in lists" :key="i" :index="list.index">
          <template slot="title">
            <span>{{list.title}}</span>
          </template>
          <el-menu-item v-for="(item, i) in list.children" :key="i" :index='item.index' @click="addTab">{{item.content}}</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="container">
        <el-tabs v-model="editableTabsValue" closable @tab-remove="handleTabsEdit" class="tabs" v-if="editableTabs.length">
          <el-tab-pane
            :key="item.name"
            v-for="item in editableTabs"
            :label="item.title"
            :name="item.name"
          >
          </el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      openeds: [],
      lists: [
        {
          index: 'goods',
          title: '商品管理',
          children: [
            {
              index: 'addG',
              content: '添加商品'
            },
            {
              index: 'allG',
              content: '商品列表'
            }
          ]
        },
        {
          index: 'address',
          title: '收货地址管理',
          children: [
            {
              index: 'addA',
              content: '添加收货地址'
            },
            {
              index: 'allA',
              content: '收货地址列表'
            }
          ]
        },
        {
          index: 'orders',
          title: '订单管理',
          children: [
            {
              index: 'send',
              content: '物流管理'
            },
            {
              index: 'refund',
              content: '退款管理'
            },{
              index: 'order',
              content: '全部订单'
            }
          ]
        }
      ],
      editableTabsValue: '1',
      editableTabs: [],
      tabIndex: '1',
      active: ''
    }
  },
  mounted() {
    this.$router.push({path:'/index'})
    this.tabIndex = this.editableTabs.length
  },
  methods: {
    backToIndex() {
      this.openeds = []
      this.editableTabs = []
      this.$router.push({
        path: '/all'
      })
    },
    addTab(e) {
      var content = this.getArray('index', 'index', e)
      var tabs = this.editableTabs;
      var tab = tabs.filter(item => {
        return item.title === content[0].content
      })
      var newTabName = ''
      if(tab.length > 0){
        newTabName = tab[0].name
      }else {
          newTabName = ++this.tabIndex + ''
          this.editableTabs.push({
            title: content[0].content,
            name: newTabName,
          })
      }
      this.editableTabsValue = newTabName
      this.$router.push({
        path: '/' + e.index
      })
    },
    handleTabsEdit(targetName) {
      let tabs = this.editableTabs;
      window.console.log(tabs)
      if(tabs.length === 1) {
        this.editableTabsValue = targetName
        return
      }else{
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
              for(var i = 0; i < this.lists.length; i++) {
                var list = this.lists[i].children
                this.active = list.filter(item => item.content === nextTab.title)[0].index
                this.$router.push({
                  path: '/' + this.active
                })
                break
              }
            }
          })
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    },
    getArray(target, origin, event) {
      var content = []
      for(var i = 0; i< this.lists.length; i++) {
        var list = this.lists[i]
        content = list.children.filter(item => {
          return item[target] == event[origin]
        })
        if(content.length>0){
          break
        }
      }
      return content
    }
  }
}
</script>
