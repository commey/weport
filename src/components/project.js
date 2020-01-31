import task from "./task.js";
var project = Vue.component("project", {
	props: ["index"],
	data(){
		return { projectTitle: null }
	},
	template: `
		<div class="project">
			<div class="row">
				<div class="col-sm-10 col-sm-offset-1">
					<h3 class="project-title text-center text-success-darker" v-if="projectTitle"> {{ projectTitle }}</h3>
					<h3 class="project-title text-center" v-else>Project {{ index }}</h3>
					<div class="form-group">
						<input type="text" class="form-control" name="project[]" v-model="projectTitle" placeholder="Project Name">
					</div>
				</div>
			</div>
			<div class="row">
				<task 
					v-for="i in 3"
					v-bind:index="i"
					v-bind:project="index -1"
					v-bind:key="i">
				</task>
			</div>
			<hr style="border: none; border-bottom: 1px dashed rgba(0, 0, 0, 0.6)">	
		</div>
	`
})

export default project;