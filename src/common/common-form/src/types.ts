type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  options?: any[]
  otherOptions?: any
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
