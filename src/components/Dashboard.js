import React, { useEffect } from 'react'
import Profil from '../assets/img/team/profile-picture-5.jpg'
import Logo from '../assets/img/brand/light.svg'
import Swal from 'sweetalert2'
const Dashboard = () => {
    useEffect(() => {
    
    })

    return (
        <div>
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="../../index.html">
                    <img className="navbar-brand-dark" src={Logo} alt="Volt logo" /> <img className="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
                </a>
                <div className="d-flex align-items-center">
                    <button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
                <div className="sidebar-inner px-4 pt-3">
                    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="d-flex align-items-center">
                            <div className="avatar-lg me-4">
                                <img src="../../assets/img/team/profile-picture-3.jpg" className="card-img-top rounded-circle border-white"
                                    alt="Bonnie Green">
                                </img>
                            </div>
                            <div className="d-block">
                                <h2 className="h5 mb-3">Hi, Jane</h2>
                                <a href="../../pages/examples/sign-in.html" className="btn btn-secondary btn-sm d-inline-flex align-items-center">
                                    <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    Sign Out
                                </a>
                            </div>
                        </div>
                        <div className="collapse-close d-md-none">
                            <a href="#sidebarMenu" data-bs-toggle="collapse"
                                data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                                aria-label="Toggle navigation">
                                <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
                    <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="nav-item">
                            <a href="../../index.html" className="nav-link d-flex align-items-center">
                                <span className="sidebar-icon">
                                    <img src={Logo} height="20" width="20" alt="Volt Logo">
                                    </img>
                                </span>
                                <span className="mt-1 ms-1 sidebar-text">Volt Overview</span>
                            </a>
                        </li>
                        <li className="nav-item  active ">
                            <a href="../../pages/dashboard/dashboard.html" className="nav-link">
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                </span>
                                <span className="sidebar-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://demo.themesberg.com/volt-pro/pages/kanban.html" target="_blank" className="nav-link d-flex justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Kanban</span>
                                </span>
                                <span>
                                    <span className="badge badge-sm bg-secondary ms-1 text-gray-800">Pro</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="../../pages/transactions.html" className="nav-link">
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path></svg>
                                </span>
                                <span className="sidebar-text">Transactions</span>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a href="../../pages/settings.html" className="nav-link">
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                </span>
                                <span className="sidebar-text">Settings</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://demo.themesberg.com/volt-pro/pages/calendar.html" target="_blank" className="nav-link d-flex justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Calendar</span>
                                </span>
                                <span>
                                    <span className="badge badge-sm bg-secondary ms-1 text-gray-800">Pro</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://demo.themesberg.com/volt-pro/pages/map.html" target="_blank" className="nav-link d-flex justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Map</span>
                                </span>
                                <span>
                                    <span className="badge badge-sm bg-secondary ms-1 text-gray-800">Pro</span>
                                </span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse" data-bs-target="#submenu-app">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Tables</span>
                                </span>
                                <span className="link-arrow">
                                    <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </span>
                            </span>
                            <div className="multi-level collapse "
                                role="list" id="submenu-app" aria-expanded="false">
                                <ul className="flex-column nav">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/tables/bootstrap-tables.html">
                                            <span className="sidebar-text">Bootstrap Tables</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse" data-bs-target="#submenu-pages">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Page examples</span>
                                </span>
                                <span className="link-arrow">
                                    <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </span>
                            </span>
                            <div className="multi-level collapse " role="list"
                                id="submenu-pages" aria-expanded="false">
                                <ul className="flex-column nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/sign-in.html">
                                            <span className="sidebar-text">Sign In</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/sign-up.html">
                                            <span className="sidebar-text">Sign Up</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/forgot-password.html">
                                            <span className="sidebar-text">Forgot password</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/reset-password.html">
                                            <span className="sidebar-text">Reset password</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/lock.html">
                                            <span className="sidebar-text">Lock</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/404.html">
                                            <span className="sidebar-text">404 Not Found</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="../../pages/examples/500.html">
                                            <span className="sidebar-text">500 Not Found</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link  collapsed  d-flex justify-content-between align-items-center"
                                data-bs-toggle="collapse" data-bs-target="#submenu-components">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    </span>
                                    <span className="sidebar-text">Components</span>
                                </span>
                                <span className="link-arrow">
                                    <svg className="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </span>
                            </span>
                            <div className="multi-level collapse " role="list"
                                id="submenu-components" aria-expanded="false">
                                <ul className="flex-column nav">
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank"
                                            href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/components/accordions/">
                                            <span className="sidebar-text">All Components</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/components/buttons.html">
                                            <span className="sidebar-text">Buttons</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/components/notifications.html">
                                            <span className="sidebar-text">Notifications</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/components/forms.html">
                                            <span className="sidebar-text">Forms</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/components/modals.html">
                                            <span className="sidebar-text">Modals</span>
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="../../pages/components/typography.html">
                                            <span className="sidebar-text">Typography</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
                        <li className="nav-item">
                            <a href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/" target="_blank"
                                className="nav-link d-flex align-items-center">
                                <span className="sidebar-icon">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                </span>
                                <span className="sidebar-text">Documentation <span className="badge badge-sm bg-secondary ms-1 text-gray-800">v1.4</span></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://themesberg.com" target="_blank" className="nav-link d-flex align-items-center">
                                <span className="sidebar-icon">
                                    {/* <img src="../../assets/img/themesberg.svg" height="20" width="28" alt="Themesberg Logo"> */}
                                </span>
                                <span className="sidebar-text">Themesberg</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../pages/upgrade-to-pro.html"
                                className="btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro">
                                <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
                                    <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg>
                                </span>
                                <span>Upgrade to Pro</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="content">

                <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                    <div className="container-fluid px-0">
                        <div className="d-flex justify-content-between w-100" id="navbarSupportedContent">
                            <div className="d-flex align-items-center">
                                {/* <!-- Search form --> */}
                                <form className="navbar-search form-inline" id="navbar-search-main">
                                    <div className="input-group input-group-merge search-bar">
                                        <span className="input-group-text" id="topbar-addon">
                                            <svg className="icon icon-xs" x-description="Heroicon name: solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <input type="text" className="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon">
                                        </input>
                                    </div>
                                </form>
                                {/* <!-- / Search form --> */}
                            </div>
                            {/* <!-- Navbar links --> */}
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-dark notification-bell unread dropdown-toggle" data-unread-notifications="true" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        <svg className="icon icon-sm text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                                        <div className="list-group list-group-flush">
                                            <a href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">Notifications</a>
                                            <a href="#" className="list-group-item list-group-item-action border-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* <!-- Avatar -->
                                                        <img alt="Image placeholder" src="../../assets/img/team/profile-picture-1.jpg" className="avatar-md rounded"> */}
                                                    </div>
                                                    <div className="col ps-0 ms-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="h6 mb-0 text-small">Jose Leos</h4>
                                                            </div>
                                                            <div className="text-end">
                                                                <small className="text-danger">a few moments ago</small>
                                                            </div>
                                                        </div>
                                                        <p className="font-small mt-1 mb-0">Added you to an event "Project stand-up" tomorrow at 12:30 AM.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action border-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* <!-- Avatar -->
                                                        <img alt="Image placeholder" src="../../assets/img/team/profile-picture-2.jpg" className="avatar-md rounded"> */}
                                                    </div>
                                                    <div className="col ps-0 ms-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="h6 mb-0 text-small">Neil Sims</h4>
                                                            </div>
                                                            <div className="text-end">
                                                                <small className="text-danger">2 hrs ago</small>
                                                            </div>
                                                        </div>
                                                        <p className="font-small mt-1 mb-0">You've been assigned a task for "Awesome new project".</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action border-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* <!-- Avatar -->
                                                        <img alt="Image placeholder" src="../../assets/img/team/profile-picture-3.jpg" className="avatar-md rounded"> */}
                                                    </div>
                                                    <div className="col ps-0 m-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="h6 mb-0 text-small">Roberta Casas</h4>
                                                            </div>
                                                            <div className="text-end">
                                                                <small>5 hrs ago</small>
                                                            </div>
                                                        </div>
                                                        <p className="font-small mt-1 mb-0">Tagged you in a document called "Financial plans",</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action border-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* <!-- Avatar -->
                                                        <img alt="Image placeholder" src="../../assets/img/team/profile-picture-4.jpg" className="avatar-md rounded"> */}
                                                    </div>
                                                    <div className="col ps-0 ms-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="h6 mb-0 text-small">Joseph Garth</h4>
                                                            </div>
                                                            <div className="text-end">
                                                                <small>1 d ago</small>
                                                            </div>
                                                        </div>
                                                        <p className="font-small mt-1 mb-0">New message: "Hey, what's up? All set for the presentation?"</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item list-group-item-action border-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        {/* {/* <!-- Avatar --> */}
                                                        <img alt="Image placeholder" src="
                                                        .././assets/img/team/profile-picture-5.jpg" className="avatar-md rounded">
                                                        </img>
                                                    </div>
                                                    <div className="col ps-0 ms-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="h6 mb-0 text-small">Bonnie Green</h4>
                                                            </div>
                                                            <div className="text-end">
                                                                <small>2 hrs ago</small>
                                                            </div>
                                                        </div>
                                                        <p className="font-small mt-1 mb-0">New message: "We need to improve the UI/UX for the landing page."</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="dropdown-item text-center fw-bold rounded-bottom py-3">
                                                <svg className="icon icon-xxs text-gray-400 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                                                View all
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown ms-lg-3">
                                    <a className="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="media d-flex align-items-center">
                                            <img className="avatar rounded-circle" alt="Image placeholder" src={Profil}>
                                            </img>
                                            <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                                <span className="mb-0 font-small fw-bold text-gray-900">Bonnie Green</span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                            My Profile
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                            Settings
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd"></path></svg>
                                            Messages
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                                            Support
                                        </a>
                                        <div role="separator" className="dropdown-divider my-1"></div>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <svg className="dropdown-icon text-danger me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="py-4">
                    <div className="dropdown">
                        <button className="btn btn-gray-800 d-inline-flex align-items-center me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg className="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                            New Task
                        </button>
                        <div className="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
                                Add User
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                Add Widget
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                                Upload Files
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <svg className="dropdown-icon text-gray-400 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                Preview Security
                            </a>
                            <div role="separator" className="dropdown-divider my-1"></div>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <svg className="dropdown-icon text-danger me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg>
                                Upgrade to Pro
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-8">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <div className="card border-0 shadow">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h2 className="fs-5 fw-bold mb-0">Page visits</h2>
                                            </div>
                                            <div className="col text-end">
                                                <a href="#" className="btn btn-sm btn-primary">See all</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table align-items-center table-flush">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th className="border-bottom" scope="col">Page name</th>
                                                    <th className="border-bottom" scope="col">Page Views</th>
                                                    <th className="border-bottom" scope="col">Page Value</th>
                                                    <th className="border-bottom" scope="col">Bounce rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-gray-900" scope="row">
                                                        /demo/admin/index.html
                                                    </th>
                                                    <td className="fw-bolder text-gray-500">
                                                        3,225
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        $20
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        <div className="d-flex">
                                                            <svg className="icon icon-xs text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                            42,55%
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-gray-900" scope="row">
                                                        /demo/admin/forms.html
                                                    </th>
                                                    <td className="fw-bolder text-gray-500">
                                                        2,987
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        0
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        <div className="d-flex">
                                                            <svg className="icon icon-xs text-success me-2" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                            43,24%
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-gray-900" scope="row">
                                                        /demo/admin/util.html
                                                    </th>
                                                    <td className="fw-bolder text-gray-500">
                                                        2,844
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        294
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        <div className="d-flex">
                                                            <svg className="icon icon-xs text-success me-2" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                            32,35%
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-gray-900" scope="row">
                                                        /demo/admin/validation.html
                                                    </th>
                                                    <td className="fw-bolder text-gray-500">
                                                        2,050
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        $147
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        <div className="d-flex">
                                                            <svg className="icon icon-xs text-danger me-2" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                            50,87%
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="text-gray-900" scope="row">
                                                        /demo/admin/modals.html
                                                    </th>
                                                    <td className="fw-bolder text-gray-500">
                                                        1,483
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        $19
                                                    </td>
                                                    <td className="fw-bolder text-gray-500">
                                                        <div className="d-flex">
                                                            <svg className="icon icon-xs text-success me-2" fill="currentColor" viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path fillRule="evenodd"
                                                                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"></path>
                                                            </svg>
                                                            26,12%
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card theme-settings bg-gray-800 theme-settings-expand" id="theme-settings-expand">
                    <div className="card-body bg-gray-800 text-white rounded-top p-3 py-2">
                        <span className="fw-bold d-inline-flex align-items-center h6">
                            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                    clipRule="evenodd"></path>
                            </svg>
                            Settings
                        </span>
                    </div>
                </div>

                <footer className="bg-white rounded shadow p-5 mb-4 mt-4">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
                            <p className="mb-0 text-center text-lg-start">© 2019-<span className="current-year"></span> <a
                                className="text-primary fw-normal" href="https://themesberg.com" target="_blank">Themesberg</a></p>
                        </div>
                        <div className="col-12 col-md-8 col-xl-6 text-center text-lg-start">
                            {/* <!-- List --> */}
                            <ul className="list-inline list-group-flush list-group-borderless text-md-end mb-0">
                                <li className="list-inline-item px-0 px-sm-2">
                                    <a href="https://themesberg.com/about">About</a>
                                </li>
                                <li className="list-inline-item px-0 px-sm-2">
                                    <a href="https://themesberg.com/themes">Themes</a>
                                </li>
                                <li className="list-inline-item px-0 px-sm-2">
                                    <a href="https://themesberg.com/blog">Blog</a>
                                </li>
                                <li className="list-inline-item px-0 px-sm-2">
                                    <a href="https://themesberg.com/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </main>

        </div>
    )
}

export default Dashboard