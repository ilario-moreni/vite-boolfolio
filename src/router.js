import { createRouter, createWebHistory } from 'vue-router';


import ProjectMain from './components/ProjectMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'projects',
            component: ProjectMain
        },
    ]
});


export { router };