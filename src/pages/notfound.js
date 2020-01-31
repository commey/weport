export default Vue.component("notfound-page", {
	template: `
			<div class="text-center mb50 mt100 pv50">
			<h1 class="fs100">404</h1>
			<h3>Page Not Found</h3>
				<a href="#/dashboard" class="btn btn-alert"
					@click="$emit('render-page', 'dashboard')">Go to Dashboard</a>
			</div>
	`
});