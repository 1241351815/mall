import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Order from '../pages/order'
import OrderList from '../pages/orderList'
import OrderConfirm from '../pages/orderConfirm'
import OrderPay from '../pages/orderPay'
import OrderAlipay from '../pages/orderAlipay'
import Cart from '../pages/cart'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/',
        name: 'index',
        componten: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        componten: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        componten: Detail
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: '/list',
        name: 'order-list',
        componten: OrderList
      },
      {
        path: '/confirm',
        name: 'order-confirm',
        componten: OrderConfirm
      },
      {
        path: '/pay',
        name: 'order-pay',
        componten: OrderPay
      },
      {
        path: '/Alipay',
        name: 'order-Alipay',
        componten: OrderAlipay
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new Router({
  routes
})

export default router
