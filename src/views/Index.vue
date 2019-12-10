<style lang="less">
.el-container{
  height: 100%;
  .el-aside{
    height: 100%;
    background: rgb(84, 92, 100);
    li{
      width: 200px;
    }
  }
  .el-header{
    background-color: #fff;
    line-height: 60px;
    text-align: right;
  }
  .el-main{
    background-color: rgb(247, 247, 247);
  }
  .el-container{
    min-width: 940px;
    .tabs{
      padding: 0 10px;
      background: #fff;
      .el-tabs__header{
        margin-bottom: 0;
        .el-tabs__nav-wrap::after{
          height: 0;
        }
        .el-tabs__nav{
          padding: 0 10px;
          .el-tabs__active-bar{
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
<template>
  <el-container>
    <el-aside width="200px">
      <el-menu background-color="#545c64" @select="handleSelect" text-color="#fff" class="asideNav" :unique-opened="true" :default-active="active" :default-openeds="openeds">
        <el-menu-item index="0" @click="backToIndex">
          <span  slot="title">首页</span >
        </el-menu-item>
        <el-submenu v-for="(list, i) in lists" :key="i" :index="list.index">
          <template slot="title">
            <span>{{list.title}}</span>
          </template>
          <el-menu-item v-for="item in list.children" :key="item.name" :index='item.index'>{{item.content}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>欢迎！</span>
        <router-link to="/">退出账号</router-link>
      </el-header>
      <el-main>
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
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      openeds: [],
      lists: [
        {
          index: '1',
          name: 'goods',
          title: '商品管理',
          children: [
            {
              index: '1-1',
              name: 'addG',
              content: '添加商品'
            },
            {
              index: '1-2',
              name: 'allG',
              content: '商品列表'
            }
          ]
        },
        {
          index: '2',
          name: 'address',
          title: '收货地址管理',
          children: [
            {
              index: '2-1',
              name: 'addA',
              content: '添加收货地址'
            },
            {
              index: '2-2',
              name: 'allA',
              content: '收货地址列表'
            }
          ]
        },
        {
          index: '3',
          name: 'orders',
          title: '订单管理',
          children: [
            {
              index: '3-1',
              name: 'send',
              content: '物流管理'
            },
            {
              index: '3-2',
              name: 'refund',
              content: '退款管理'
            },
            {
              index: '3-3',
              name: 'order',
              content: '全部订单'
            }
          ]
        }
      ],
      editableTabsValue: '1',
      editableTabs: [], //name: 选项卡在选项卡列表中的顺序值， label：选项卡标题， path：对应路径
      tabIndex: '0',
      active: ''
    }
  },
  mounted() {
    this.$router.push({path:'/index'})
  },
  methods: {
    backToIndex() {
      this.openeds = []
      this.editableTabs = []
      this.$router.push({
        path: '/all'
      })
    },
    handleSelect(key, keyPath) {
      var parentPath = this.lists[keyPath[0] - 1].children
      var temPath = key.substr(key.length-1, 1)
      var path = parentPath[temPath - 1]
      var tabs = this.editableTabs
      var tab = tabs.filter(item => {
        return item.title === path.content
      })
      var newTabName = ''
      if(tab.length > 0){
        newTabName = tab[0].name
      }else {
        newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          name: newTabName,  //选项卡在选项卡列表中的顺序值
          title: path.content,  //选项卡标题
          path: path.name  //对应路径
        })
      }
      this.editableTabsValue = newTabName
      this.$router.push({
        path: '/' + path.name
      })
    },
    handleTabsEdit(targetName) {
      let tabs = this.editableTabs
      if(tabs.length === 1) {
        this.editableTabsValue = targetName
        return
      }else{
        let activeName = this.editableTabsValue
        let nextTab = {}
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
        this.$router.push({
          path: '/' + nextTab.path
        })
        for(var i = 0; i < this.lists.length; i++) {
          var list = this.lists[i].children
          for(var j = 0; j < list.length; j++) {
            if(list[j].name == nextTab.path) {
              this.active = list[j].index
              break
            }
          }
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
}
</script>
