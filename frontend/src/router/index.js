import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewBook from '@/components/Book/NewBook'
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'
import DeleteBook from '@/components/Book/DeleteBook'
import Login from '@/components/Login/Login'
import NewUser from '@/components/Login/NewUser'
import Evento from '@/components/Evento/Evento'
import test1 from '@/components/Evento/test1'
import test2 from '@/components/Evento/test2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/Books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/Books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/Books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/Login/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login/newUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/Evento/eventos',
      name: 'Evento',
      component: Evento,
      props: true
    },
    {
      path: '/Evento/test1',
      name: 'test1',
      component: test1,
      props: true
    },
    {
      path: '/Evento/test2',
      name: 'test2',
      component: test2
    }


  ],
  mode: 'history'

})
