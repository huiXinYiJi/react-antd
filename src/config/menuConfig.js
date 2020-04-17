export default [
  {
    title: '首页',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings'
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notification'
      },
      {
        title: '全局message',
        key: '/admin/ui/message'
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tab'
      }
    ]
  },
  {
    title: 'Form表单',
    key: '/admin/form',
    children: [
      {
        title: '登录表单',
        key: '/admin/form/login'
      },
      {
        title: '注册表单',
        key: '/admin/form/reg'
      }
    ]
  }
]