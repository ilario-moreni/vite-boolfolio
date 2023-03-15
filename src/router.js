import { createRouter, createWebHistory } from 'vue-router';


import ProjectMain from './components/ProjectMain.vue';
import HomePage from './components/HomePage.vue';
import SingleProject from './components/SingleProject.vue';
import Contacts from './components/Contacts.vue';
import ThankYou from './components/ThankYou.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectMain
        },
        {
            path: '/projects/:slug',
            name: 'singleproject',
            component: SingleProject 
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts 
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou
        },
    ]
});


export { router };