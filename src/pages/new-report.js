import projects from "../components/project.js";

var newReportPage = Vue.component("new-report-page", {
	data(){
		return {
			projectsCount: 1
		}
	},
	methods: {
		addProject(){
			this.projectsCount++;
		},
		sendProject(event){
			let formData = new FormData(event.target);
			formData.append("process", "send");
			fetch("processor/reports.php", {
				method: "POST",
				body: formData
			}).then(res => console.log(res))
		},
		saveReport(event){
			console.log(event.target)
			let formData = new FormData(event.target);
			formData.append("process", "save");
			this.showPageLoader = true;
			fetch("processor/reports.php", {
				method: "POST",
				body: formData
			}).then(res => console.log(res))
		}
	},
	template: `
		<form id="mainForm" class="pv30" v-on:submit.prevent="sendProject">
		<div class="row">
			<div class="col-sm-3 col-sm-offset-3">
				<div class="form-group">
					<input type="text" name="from" class="form-control" placeholder="From">
				</div>			
			</div>
			<div class="col-sm-3">
				<div class="form-group inline">
					<input type="text" name="to" class="form-control" placeholder="To">
				</div>			
			</div>
		</div>

			<div class="projects">
				<project 
				v-for="p in projectsCount"
				v-bind:key="p"
				v-bind:index="p"
				></project>
			</div>
			<div class="text-center mb50">
				<button type="button" class="btn btn-primary" @click="addProject"><i class="imoon imoon-plus"></i> Add New Project</button>
				<button type="button" name="save" class="btn btn-info ml70" @click="saveReport">Save Report <i class="imoon imoon-download2"></i></button>
				<button type="submit" name="send" class="btn btn-alert">Send Report <i class="imoon imoon-arrow-right2"></i></button>
			</div>
		</form>		
	`
})

export default newReportPage;