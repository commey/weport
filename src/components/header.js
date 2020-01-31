var pageHeader = Vue.component("page-header", {
    template: `
    <header class="navbar navbar-fixed-top bg-system phn">
        <div class="navbar-logo-wrapper">
            <a class="navbar-logo-img" href="index.html">
                <img src="assets/img/logo_small.png" alt="">
            </a>
        </div>
        <span id="sidebar_top_toggle" class="ad ad-lines navbar-nav navbar-left showing-sm"></span>
        <ul class="nav navbar-nav navbar-left">
            <li class="dropdown dropdown-fuse hidden-xs">
                <div class="navbar-btn btn-group phn">
                    <button class="btn-hover-effects dropdown-toggle btn bg-light" data-toggle="dropdown" aria-expanded="false">
                        <span class="fa fa-chevron-down"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </div>
            </li>
            <li class="hidden-xs">
                <div class="navbar-btn btn-group">
                    <button class="btn-hover-effects navbar-fullscreen toggle-active btn si-icons si-icons-default">
                        <span class="si-icon si-icon-maximize-rotate default" data-icon-name="maximizeRotate"></span>
                    </button>
                </div>
            </li>
        </ul>

        <ul class="nav navbar-nav navbar-right bg-system darker mn pv10">
            <li class="dropdown dropdown-fuse navbar-user">
                <a href="#" class="dropdown-toggle mln" data-toggle="dropdown">
                    <img src="assets/img/avatars/profile_avatar.jpg" alt="avatar">
                    <span class="hidden-xs">
                        <span class="name">Doug Adams</span>
                    </span>
                    <span class="fa fa-caret-down hidden-xs"></span>
                </a>
                <ul class="dropdown-menu list-group keep-dropdown w230" role="menu">
                    <li class="dropdown-header clearfix">
                        <div class="pull-left">
                            <select id="user-status">
                                <optgroup label="Current Status:">
                                    <option value="1-1">Away</option>
                                    <option value="1-2">Busy</option>
                                    <option value="1-3" selected="selected">Online</option>
                                    <option value="1-4">Offline</option>
                                </optgroup>
                            </select>
                        </div>

                        <div class="pull-right">
                            <select id="user-role">
                                <optgroup label="Logged in As:">
                                    <option value="1-1" selected="selected">Admin</option>
                                    <option value="1-2">Editor</option>
                                    <option value="1-3">User</option>
                                </optgroup>
                            </select>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <span class="fa fa-envelope"></span>
                        <a href="#" class="">
                            Messages
                            <span class="label label-info">3</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <span class="fa fa-user"></span>
                        <a href="#" class="">
                            Friends
                            <span class="label label-info">6</span>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <span class="fa fa-cog"></span>
                        <a href="#" class="">
                            Account Settings 
                        </a>
                    </li>
                    <li class="list-group-item">
                        <span class="fa fa-bell"></span>
                        <a href="#" class="">
                             Activity
                        </a>
                    </li>
                    <li class="dropdown-footer text-center">
                        <a href="#" class="btn btn-warning">
                            logout 
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    `
})

export default pageHeader;  