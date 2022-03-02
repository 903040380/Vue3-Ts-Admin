export const contentTableConfig = {
  propList: [
    { property: 'name', label: '商品名称', minWidth: '80' },
    {
      property: 'oldPrice',
      label: '原价格',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    { property: 'newPrice', label: '现价格', minWidth: '80' },
    {
      property: 'imageUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
    },
    {
      property: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'enable'
    },
    {
      property: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      property: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '180',
      slotName: 'handler'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  title: '商品列表'
}
