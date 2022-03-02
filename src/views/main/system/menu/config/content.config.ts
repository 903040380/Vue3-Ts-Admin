export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { property: 'name', label: '菜单名称', minWidth: '100' },
    {
      property: 'type',
      label: '类型',
      minWidth: '60'
    },
    { property: 'url', label: '菜单url', minWidth: '100' },
    {
      property: 'icon',
      label: '菜单icon',
      minWidth: '100'
    },
    {
      property: 'permisson',
      label: '按钮权限',
      minWidth: '100'
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
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
