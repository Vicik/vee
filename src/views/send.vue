<template>
  <div class="order send">
    <customize-form :formData="formData" :orderStatus="orderStatus"></customize-form>
    <customize-table :tableData="send" :edit="edit"></customize-table>
  </div>
</template>

<script>
import customizeForm from '../components/customizeForm'
import customizeTable from '../components/customizeTable'
export default {
  components: {
    customizeForm,
    customizeTable
  },
  data() {
    return {
      edit:{
        editable: "发货",
        noEditable: '已发货',
        delete: "删除"
      },
      formData: {
        name: '',
        startTime: '',
        endTime: '',
        buyer: '',
        status: '',
        numbers: '',
        service: ''
      },
      orderStatus: [
        {value: '0', label: '全部订单'},
        {value: '1', label: '已发货'},
        {value: '2', label: '等待发货'}
      ],
      send: [
        {
          checked: false,
          orderCode: 201902010202,
          buyTime: '2019-1-2 02:30:20',
          goods: [
            {
              name: '化妆刷',
              pic: require('../assets/img/1.jpg'),
              count: 1,
              price: 20,
              received: 20,
            },
            {
              name: '冷风机',
              pic: require('../assets/img/2.jpg'),
              price: 1200,
              count: 2,
              received: 2400
            }
          ],
          buyer: 'xx',
          status: '交易成功',
          editStatus: '0' //0表示未发货， -1表示已发货
        },
        {
          checked: false,
          orderCode: 201902010203,
          buyTime: '2019-1-2 02:30:00',
          goods: [
            {
              name: '冷风机',
              pic: require('../assets/img/2.jpg'),
              price: 1200,
              count: 2,
              received: 2400
            }
          ],
          buyer: 'yy',
          status: '交易关闭',
          editStatus: '0'
        },
        {
          checked: false,
          orderCode: 201902010203,
          buyTime: '2019-1-2 04:30:20',
          goods: [
            {
              name: '雪地靴',
              pic: require('../assets/img/3.jpg'),
              price: 200,
              count: 3,
              received: 600
            }
          ],
          buyer: 'xzx',
          status: '交易成功',
          editStatus: '0'
        },
        {
          checked: false,
          orderCode: 201902010204,
          buyTime: '2019-1-2 02:45:20',
          goods: [
            {
              name: '整装方案',
              pic: require('../assets/img/4.jpg'),
              price: 20000,
              count: 1,
              received: 20000
            }
          ],
          buyer: 'ax',
          status: '交易成功',
          editStatus: '0'
        },
        {
          checked: false,
          orderCode: 201902010205,
          buyTime: '2019-1-2 12:30:20',
          goods: [
            {
              name: '电采暖器',
              pic: require('../assets/img/5.jpg'),
              price: 1500,
              count: 1,
              received: 1500
            }
          ],
          buyer: 'xxx',
          status: '交易成功',
          editStatus: '0'
        }
      ]
    }
  }
}
</script>