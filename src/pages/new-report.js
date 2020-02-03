import projects from "../components/project.js";

var newReportPage = Vue.component("new-report-page", {
	data(){
		return {
			projectsCount: 1,
			monday: computedStartDate,
			friday: computedEndDate
		}
	},
	mounted:function(){
		$(".datepicker").datepicker({
			prevText: '<i class="fa fa-chevron-left"></i>',
			nextText: '<i class="fa fa-chevron-right"></i>',
			dateFormat: "dd-mm-yy",
			showButtonPanel: false,
			beforeShow: function(input, inst) {
				var newclass = 'allcp-form';
				var themeClass = $(this).parents('.allcp-form').attr('class');
				var smartpikr = inst.dpDiv.parent();
				if (!smartpikr.hasClass(themeClass)) {
					inst.dpDiv.wrap('<div class="' + themeClass + '"></div>');
				}
			}
		});
	},
	methods: {
		addProject(){
			this.projectsCount++;
		},
		processReport(process){
			let formData = new FormData(this.$refs.reportsForm);
			formData.append("process", process);
			this.$root.pageloader.show = true;
			switch(process){
				case "preview":
					this.$root.pageloader.content = "Generating Preview";
				break;
			}
			fetch("processor/reports.php", {
				method: "POST",
				body: formData
			}).then(res => {
				console.log(res)
				this.$root.pageloader.show = false;
			})
		}
	},
	template: `
		<form id="mainForm" class="pv30" ref="reportsForm">
			<div class="row">
				<div class="col-sm-3 col-sm-offset-3">
					<div class="form-group">
						<input type="text" v-model="monday" name="from" class="form-control datepicker cursor" readonly placeholder="From">
					</div>			
				</div>
				<div class="col-sm-3">
					<div class="form-group inline">
						<input type="text" v-model="friday" name="to" class="form-control datepicker cursor" readonly placeholder="To">
					</div>			
				</div>
			</div>
			<hr class="mn mt15" style="border: none; border-bottom: 1px dashed rgba(0, 0, 0, 0.6)">	
			<div class="projects">
				<project 
				v-for="p in projectsCount"
				v-bind:key="p"
				v-bind:index="p"
				></project>
			</div>
			<div class="text-center mt30">
				<button type="button" class="btn btn-primary" @click="addProject"><i class="imoon imoon-plus"></i> Add New Project</button>
				<button type="button" class="btn btn-primary ml70" @click.prevent="processReport('preview')">Preview <i class="imoon imoon-eye"></i></button>
				<button type="button" class="btn btn-info" @click.prevent="processReport('save')">Save Report <i class="imoon imoon-download2"></i></button>
				<button type="submit" class="btn btn-alert" @click.prevent="processReport('send')">Send Report <i class="imoon imoon-arrow-right2"></i></button>
			</div>
		</form>		
	`
})

export default newReportPage;