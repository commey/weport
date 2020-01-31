var task = Vue.component("task", {
	props: ["index", "project"],
	data: function(){
		return {
			taskName: `task[${this.$props.project}][]`,
			startStateName: `start[${this.$props.project}][]`,
			taskDoneName: `done[${this.$props.project}][]`,
			currentStateName: `current[${this.$props.project}][]`,
			taskTitle: null
		}
	},
	template: `
		<div class="col-sm-4">
			<div class="row">
				<div class="col-sm-10 offset-sm-1">
					<h3 class="task-title text-center" v-if="taskTitle">{{ taskTitle }}</h3>
					<h3 class="task-title text-center" v-else>Task {{ index }}</h3>
					<div class="form-group">
						<input type="text" class="form-control" :name="taskName" v-model="taskTitle" value="" placeholder="Task">
					</div>
					<div class="form-group">
						<textarea :name="startStateName" class="form-control" placeholder="State of the Task When Beginning"></textarea>
					</div>
					<div class="form-group">
						<textarea :name="taskDoneName" class="form-control" placeholder="What You Did on the Task"></textarea>
					</div>
					<div class="form-group">
						<textarea :name="currentStateName" class="form-control" placeholder="Current State of the Task"></textarea>
					</div>
				</div>
			</div>
		</div>
	`
})

export default task;