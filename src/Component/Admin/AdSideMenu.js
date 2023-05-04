import React from 'react'

export default function AdSideMenu() {
    return (
        <>
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar" data-simplebar="init">
                    <div className="simplebar-wrapper" style="margin: 0px;">
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                        </div>
                        <div className="simplebar-mask">
                            <div className="simplebar-offset" style="right: 0px; bottom: 0px;">
                                <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                                    <div className="simplebar-content" style="padding: 0px;">
                                        <a className="sidebar-brand" href="index.html">
                                            <img src="img/icons/KashiYatraLogo2.png" style="width: 100px; height: auto;" />
                                        </a>
                                        <ul className="sidebar-nav">
                                            <li className="sidebar-header">
                                                Pages
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="index.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders align-middle">
                                                        <line x1="4" y1="21" x2="4" y2="14"></line>
                                                        <line x1="4" y1="10" x2="4" y2="3"></line>
                                                        <line x1="12" y1="21" x2="12" y2="12"></line>
                                                        <line x1="12" y1="8" x2="12" y2="3"></line>
                                                        <line x1="20" y1="21" x2="20" y2="16"></line>
                                                        <line x1="20" y1="12" x2="20" y2="3"></line>
                                                        <line x1="1" y1="14" x2="7" y2="14"></line>
                                                        <line x1="9" y1="8" x2="15" y2="8"></line>
                                                        <line x1="17" y1="16" x2="23" y2="16"></line>
                                                    </svg>
                                                    <span className="align-middle">Dashboard</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="pages-profile.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user align-middle">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <span className="align-middle">Profile</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="pages-sign-in.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-in align-middle">
                                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                                        <polyline points="10 17 15 12 10 7"></polyline>
                                                        <line x1="15" y1="12" x2="3" y2="12"></line>
                                                    </svg>
                                                    <span className="align-middle">Sign In</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="pages-sign-up.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus align-middle"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> <span className="align-middle">Sign Up</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="pages-blank.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-book align-middle"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> <span className="align-middle">Blank</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-header">
                                                Tools &amp; Components
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="ui-buttons.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-square align-middle"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> <span className="align-middle">Buttons</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="ui-forms.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square align-middle"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> <span className="align-middle">Forms</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="ui-cards.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid align-middle"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> <span className="align-middle">Cards</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="ui-typography.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-left align-middle"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg> <span className="align-middle">Typography</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-item">
                                                <a className="sidebar-link" href="icons-feather.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-coffee align-middle"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg> <span className="align-middle">Icons</span>
                                                </a>
                                            </li>
                                            <li className="sidebar-header">
                                                Plugins &amp; Addons
                                            </li>
                                            <li className="sidebar-item active">
                                                <a className="sidebar-link" href="charts-chartjs.html">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2 align-middle"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> <span className="align-middle">Charts</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="simplebar-placeholder" style="width: auto; height: 707px;"></div>
                    </div>
                    <div className="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div className="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                    </div>
                    <div className="simplebar-track simplebar-vertical" style="visibility: visible;">
                        <div className="simplebar-scrollbar" style="height: 89px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}
