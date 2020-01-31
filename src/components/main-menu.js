var mainMenu = Vue.component("main-menu", {
    template: `
    <aside id="sidebar_left" class="">

        <!-- Sidebar Left Wrapper  -->
        <div class="sidebar-left-content nano-content">

            <!-- Sidebar Menu  -->
            <ul class="nav sidebar-menu">
                <li>
                    <a href="#" @click.prevent="$emit('render-page', 'dashboard')">
                        <span class="caret"></span>
                        <span class="sb-menu-icon imoon imoon-dashboard"></span>
                        <span class="sidebar-title">Dashboard</span>
                    </a>
                </li>
                <li class="active">
                    <a href="#" @click.prevent="$emit('render-page', 'new-report')">
                        <span class="caret"></span>
                        <span class="sb-menu-icon imoon imoon-plus"></span>
                        <span class="sidebar-title">New Report</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="$emit('render-page', 'sent-reports')">
                        <span class="caret"></span>
                        <span class="sb-menu-icon imoon imoon-stack"></span>
                        <span class="sidebar-title">Sent Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="$emit('render-page', 'saved-reports')">
                        <span class="caret"></span>
                        <span class="sb-menu-icon imoon imoon-notebook"></span>
                        <span class="sidebar-title">Saved Reports</span>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="$emit('render-page', 'settings')">
                        <span class="caret"></span>
                        <span class="sb-menu-icon imoon imoon-settings"></span>
                        <span class="sidebar-title">Settings</span>
                    </a>
                </li>
            </ul>
            <!-- /Sidebar Menu  -->

        </div>
        <!-- /Sidebar Left Wrapper  -->

    </aside>
    `
})

export default mainMenu;  