import { IForm } from '@/common/common-form/src/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id',
      rules: []
    },
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
      rules: []
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        ['start-placeholder']: '开始时间',
        ['end-placeholder']: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
