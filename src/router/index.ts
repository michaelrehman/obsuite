import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/calendar',
			component: () => import('@/views/CalendarView.vue'),
		},
		{
			path: '/tasks',
			component: () => import('@/views/TaskList.vue'),
		},
	],
});

export default router;
