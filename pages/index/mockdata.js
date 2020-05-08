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
          name: '基本工资',
          value: 3000.0,
          children: []
        },
        {
          id: 'table0012',
          name: '绩效工资',
          value: 1200.0,
          children: []
        },
        {
          id: 'table0013',
          name: '基本工作量',
          value: null,
          children: [{
              id: 'table00131',
              name: '课时工资',
              value: 800.0,
              children: []
            },
            {
              id: 'table00132',
              name: '超课时工资',
              value: 200.0,
              children: []
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
          name: '工作日加班',
          value: 1000.0,
          children: []
        },
        {
          id: 'table0022',
          name: '周末加班',
          value: 600.0,
          children: []
        },
      ]
    },
  ]
}