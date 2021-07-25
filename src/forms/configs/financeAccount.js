const financeAccount = [
  {
    type: 'text',
    placeholder: 'Give your account a name.',
    label: 'Account Name'
  },
  {
    type: 'select',
    placeholder: 'Placeholder',
    label: 'Bank',
    options: [
      {
        value: 'bpi',
        label: 'BPI'
      },
      {
        value: 'bdo',
        label: 'BDO'
      }
    ],
    desc: 'Sample'
  }
];

export default financeAccount;
