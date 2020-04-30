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
import NewEvento from '@/components/Evento/NewEvento'
import DeleteEvento from '@/components/Evento/DeleteEvento'
import EditEvento from '@/components/Evento/EditEvento'

Vue.use(Router)

export default new Router({
  routes: [
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
    ,
    {
      path: '/Evento/:eventoId/edit',
      name: 'EditEvento',
      component: EditEvento
    },
    {
      path: '/Evento/:eventoId/delete',
      name: 'DeleteEvento',
      component: DeleteEvento
    },
    {
      path: '/Books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/',
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
      path: '/Evento/NewEvento',
      name: 'NewEvento',
      component: NewEvento
    },


  ],
  mode: 'history'

})
