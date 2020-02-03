import task from "./task.js";
var project = Vue.component("project", {
	props: ["index"],
	data(){
		return { 
			projectTitle: null,
			projectStyle: {
				backgroundColor: ["#c9d4c4", "#c4cbd4", "#c9c4d4", "#d4c4c4", "#d4d4c4", "#c4d4d4"][this.$props.index%6]
			}
		}
	},
	template: `
		<div class="project" :style="projectStyle">
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
					v-for="i in 4"
					v-bind:index="i"
					v-bind:project="index -1"
					v-bind:key="i">
				</task>
			</div>
			<hr class="mn mt40" style="border: none; border-bottom: 1px dashed rgba(0, 0, 0, 0.6)">	
		</div>
	`
})

export default project;