export default Vue.component("settings-page", {
	data(){
		return {
			// projectsCount: 1
		}
	},
		methods: {
			saveSettings(event){
				let formData = new FormData(event.target);
				fetch("processor/settings.php", {
					method: "POST",
					body:{process: "update", data: formData}
				}).then(res => console.log(res))
			}
		},
	template: `
		<form id="settingsForm" v-on:submit.prevent="saveSettings">
			<div class="form-group">
				<label for="">Send From</label>
				<input name="from" class="form-control">
			</div>
			<div class="text-center mb50">
				<button type="submit" class="btn btn-alert">Save</button>
			</div>
		</form>		
	`
});