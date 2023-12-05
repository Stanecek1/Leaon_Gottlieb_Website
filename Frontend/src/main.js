import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueNavigationBar from 'vue-navigation-bar';
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import "bootstrap/dist/css/bootstrap.css"
import AboutTheAuthor from './views/AboutTheAuthor.vue'
import Home from './views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router';
import PageNotFound from './views/PageNotFound.vue'
import  Books from './views/Books.vue'
import './assets/style.css'
import Excerpts from './views/Excerpts.vue'
import Contact from './views/Contact.vue'


const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: '', component: Home },
    { path: '/home', name: 'home', component: Home },
    { path: '/books', name: 'books', component: Books },
    { path: '/about', name: 'about', component: AboutTheAuthor },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/shop', name: 'shop', component: AboutTheAuthor },
    { path: '/excerpts', name: 'excerpts', component: Excerpts },
    { path: "/:pathMatch(.*)*", name: 'not-found', component: PageNotFound}
  ],
});

    // { path: '/share', name: 'share', component: AboutTheAuthor },

app.use(router);

app.component('vue-navigation-bar', VueNavigationBar);
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"