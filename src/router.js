import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Magazine from "@/pages/Magazine.vue";
import FullArticle from "@/pages/FullArticle.vue";
import Authors from "@/pages/Authors.vue";
import FullAuthor from "@/pages/FullAuthor.vue";
import Podcasts from "@/pages/Podcasts.vue";
import FullPodcast from "@/pages/FullPodcast.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/magazine',
        name: 'magazine',
        component: Magazine
    },
    {
        path: '/article/:title',
        name: 'article',
        component: FullArticle
    },
    {
        path: '/authors',
        name: 'authors',
        component: Authors
    },
    {
        path: '/author/:id',
        name: 'author',
        component: FullAuthor
    },
    {
        path: '/podcasts',
        name: 'podcasts',
        component: Podcasts
    },
    {
        path: '/podcast/:id',
        name: 'podcast',
        component: FullPodcast
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
