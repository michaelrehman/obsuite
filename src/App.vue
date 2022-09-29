<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {
	NConfigProvider, darkTheme,
	NMessageProvider,
	NLayout,
	NLayoutHeader,
	NLayoutContent
} from 'naive-ui';
</script>

<template>
	<n-config-provider :theme="darkTheme">
		<n-message-provider>
			<n-layout>
				<n-layout-header>
					<header>
						<h1>Obsuite</h1>
					</header>
					<ul>
						<li><router-link to="/calendar">Calendar</router-link></li>
						<li><router-link to="/tasks">Tasks</router-link></li>
					</ul>
				</n-layout-header>
				<n-layout-content>
					<router-view />
				</n-layout-content>
			</n-layout>
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped>

</style>
