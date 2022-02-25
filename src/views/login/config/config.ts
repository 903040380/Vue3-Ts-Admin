export const rules = {
  account: [
    {
      required: true,
      message: 'Please input account',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: 'Length should be 5 to 10',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: 'Length should be 3 to 10',
      trigger: 'blur'
    }
  ],
  phone: [
    {
      required: true,
      message: 'Please input phone number',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{8,12}$/,
      message: 'Length should be 8 to 12',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: 'Please input code',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,6}$/,
      message: 'Length should be 4 to 6',
      trigger: 'blur'
    }
  ]
}
