import React from 'react'
import Breadcrumb from '../Common/Breadcrumb'

export default function TempleDetails() {
  
  const breadcrumbOption = {
    title: 'Temple',
    items: [
      {
        isActive: false,
        title: "Temple Details",
        icon: "fa-solid fa-gopuram"
      }
    ],
    buttons: [
      {
        text: "Temple Deatils",
        icon: 'fa-solid fa-gopuram',
        handler:()=>{},
        link:"/admin/temple/add"
      }
    ]
  }
  return (
    <>
    <Breadcrumb option={breadcrumbOption}></Breadcrumb>
    </>
  )
}
