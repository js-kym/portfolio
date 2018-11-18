import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/pages/Top';
import Profile from '@/pages/Profile';
import Skill from '@/pages/Skill';
import Product from '@/pages/Product';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TOP',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
