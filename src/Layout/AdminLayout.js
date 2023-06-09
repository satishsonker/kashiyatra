import React,{useState} from 'react'
import AdSideMenu from '../Component/Admin/Common/AdSideMenu'
import '../css/admin.css';
import { Outlet } from 'react-router-dom';
import AdTopHeader from '../Component/Admin/Common/AdTopHeader';
export default function AdminLayout({authData}) {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  return (
    <div>
      <div className={!isHeaderCollapsed?'ad-top-header-container':'ad-top-header-container_collapse show'}>
        <AdTopHeader setCollapse={setIsHeaderCollapsed} authData={authData} collapsed={isHeaderCollapsed}></AdTopHeader>
      </div>
      <div className={!isHeaderCollapsed?'ad-menu-container':'ad-menu-container collapse '}>
        <AdSideMenu></AdSideMenu>
      </div>
      <div className={!isHeaderCollapsed?'ad-page-container':'ad-page-container collapse show'}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
