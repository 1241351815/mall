import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/home'
import Index from './../views/index'
import Product from './../views/product'
import Detail from './../views/detail'
import Order from './../views/order'
import OrderList from './../views/orderList'
import OrderConfirm from './../views/orderConfirm'
import OrderPay from './../views/orderPay'
import alipay from './../views/alipay'
import Cart from './../views/cart'

Vue.use(Router)




export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        }, {
          path: '/product/:id',
          name: 'product',
          component: Product,
        }, 
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'list',
          name: 'orderList',
          component: OrderList,
        },
        {
          path: 'confirm',
          name: 'orderConfirm',
          component: OrderConfirm,
        },
        {
          path: 'pay',
          name: 'orderPay',
          component: OrderPay,
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: alipay,
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
