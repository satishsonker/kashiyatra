import React from 'react'
import AdSideMenu from '../Component/Admin/AdSideMenu'
import { Outlet } from 'react-router-dom';
export default function AdminLayout() {
  return (
    <div>
        <AdSideMenu></AdSideMenu>
        <Outlet></Outlet>
    </div>
  )
}
