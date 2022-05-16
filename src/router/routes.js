export default [
	// 首页
	{
		name: 'Home',
		path: '/',
		component: () => import('@/views/Home')
	},
	// 账号
	{
		name: 'User',
		path: '/User',
		component: () => import('@/views/User'),
		children: [
			{
				name: 'Login',
				path: 'Login',
				components: () => import('@/views/User/UserLogin')
			},
			{
				name: 'Register',
				path: 'Register',
				components: () => import('@/views/User/UserRegister')
			},
		]
	},
	{
		path: '*',
		redirect: '/',
	}
]