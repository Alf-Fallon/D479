import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home';
import HomeNav from './views/HomeNav';
import Attractions from './views/Attractions';
import Lodging from './views/Lodging';
import Transportation from './views/Transportation';
import ResourceNav from './views/ResourceNav';

const routes = [
    { 
        path: '/', 
        components: { 
            default: Home, 
            navigation: HomeNav 
        } 
    },
    { 
        path: '/resource/attractions', 
        components: { 
            default: Attractions, 
            navigation: ResourceNav 
        }
    },
    { 
        path: '/resource/lodging', 
        components: { 
            default: Lodging, 
            navigation: ResourceNav 
        }
    },
    { 
        path: '/resource/transportation', 
        components: { 
            default: Transportation, 
            navigation: ResourceNav 
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
});

export default router;