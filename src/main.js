// import dashboardPage from "./pages/dashboard.js";
import newReportPage from "./pages/new-report.js";
// import sentReportsPage from "./pages/sent-reports.js";
// import savedReportsPage from "./pages/saved-reports.js";
import setingsPage from "./pages/settings.js";
import notfoundPage from "./pages/notfound.js";

import pageHeader from "./components/header.js";
import mainMenu from "./components/main-menu.js";
import loaders from "./components/loaders.js";

import config from "./config.js";

const baseUrl = window.location.origin+config.appUrl;

const routes = {
	"sent-reports": "sent-reports",
	"saved-reports": "saved-reports",
	"new-report": "new-report",
	"settings": "settings",
	"dashboard": "dashboard",
	"": "dashboard",
	"notfound": "notfound"
}
var vm = new Vue({
	el: "#main",
	data: {
		baseUrl: baseUrl,
		page: routes[window.location.hash.replace("#/", "")] || routes["notfound"],
		notfound: routes["notfound"],
		showPageLoader: false
	},
	methods: {
		renderPage(page, nopush){
			this.page = routes[page] || routes["notfound"];
			if(!nopush) window.history.pushState({page: this.page}, "", baseUrl+"/#/"+this.page)
		}
	}
})
window.addEventListener("popstate", (e) => {
 vm.renderPage(e.state.page, true)
})