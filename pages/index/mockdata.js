// 模拟的数据
export default {
  status: 200,
  code: "ok",
  data: [{
      id: 'table001',
      name: '资产',
      value: null,
      children: [{
          id: 'table0011',
          name: '流动资产',
          value: null,
          children: [{
            id: 'table00111',
            name: '现金',
            value:'4000',
            children:[],
          },
          {
            id: 'table00112',
            name: '活期存款',
            value:'8000',
            children:[],
          },
          {
            id: 'table00113',
            name: '货币基金',
            value:'50000',
            children:[],            
          },  
          {
            id: 'table00114',
            name: '定期存款',
            value:'30000',
            children:[],            
          },
          {
            id: 'table00115',
            name: '一年期债券',
            value:'15000',
            children:[],            
          },      
        ]
      },
        {
          id: 'table0012',
          name: '非流动资产',
          value: null,
          children: [
            {
              id:'table00121',
              name:'股票',
              value:'100000',
              children:[],
            },
            {
              id:'table00122',
              name:'基金',
              value:'60000',
              children:[],
            },
            {
              id:'table00123',
              name:'P2P',
              value:'50000',
              children:[],
            },
            {
              id:'table00124',
              name:'住房',
              value:'240000',
              children:[],
            },
          ]
        },
      ]
    },
    {
      id: 'table002',
      name: '负债',
      value: null,
      children: [{
          id: 'table0021',
          name: '流动负债',
          value: null,
          children: [
            {
              id:'table00211',
              name:'信用卡账单',
              value: 1200,
              children:[],
            },
            {
              id:'table00212',
              name:'股票配资',
              value: 40000,
              children:[],
            },
            {
              id:'table00213',
              name:'银行消费贷',
              value: 50000,
              children:[],
            }
          ]
        },
        {
          id: 'table0022',
          name: '非流动负债',
          value: null,
          children: [
            {
              id:'table00221',
              name:'公积金房贷',
              value: 800000,
              children:[],
            },
          ]
        },
      ]
    },
  ]
}