import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	//跳转路由自动滚动顶部
	scrollBehavior(to, from, savedPosition) {
		return {y: 0}
	}
})

//重写编程式导航(防止重复跳转路由报错)
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve = ()=>{}, reject = ()=>{}) {
	return originPush.call(this, location, resolve, reject)
}
VueRouter.prototype.replace = function (location, resolve = ()=>{}, reject = ()=>{}) {
	return originReplace.call(this, location, resolve, reject)
}

export default router