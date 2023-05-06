import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Breadcrumb from '../Common/Breadcrumb'
import TableView from '../tables/TableView'
import { headerFormat } from '../../../utils/tableHeaderFormat'
import { Api } from '../../../apis/Api';
import { apiUrls } from '../../../apis/ApiUrls';

export default function TempleDetails() {
  let navigate = useNavigate();
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(20);
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
        text: "Add Temple",
        icon: 'fa-solid fa-gopuram',
        handler: () => { },
        link: "/admin/temple/add"
      }
    ]
  }
  const handleSearch = (searchTerm) => {

  }
  const handleDelete = (id) => {

  }
  const tableOptionTemplet = {
    headers: headerFormat.templeDetails,
    data: [],
    totalRecords: 0,
    pageSize: pageSize,
    pageNo: pageNo,
    setPageNo: setPageNo,
    setPageSize: setPageSize,
    searchHandler: handleSearch,
    actions: {
      view: {
        handler:(id)=>{
          navigate("/admin/temple/add?templeId="+id);
      }
      },
      popupModelId: "",
      delete: {
        handler: handleDelete
      },
      showEdit: false
    }
  }
  useEffect(() => {
    Api.Get(apiUrls.templeController.getTemples + `?pageNo=${pageNo}&pageSize=${pageSize}`)
      .then(res => {
        tableOptionTemplet.data = res.data.data;
        tableOptionTemplet.totalRecords = res.data.totalCount;
        setTableOption({ ...tableOptionTemplet });
      });
  }, [pageNo, pageSize])

  const [tableOption, setTableOption] = useState(tableOptionTemplet);
  return (
    <>
      <Breadcrumb option={breadcrumbOption}></Breadcrumb>
      <TableView option={tableOption} />
    </>
  )
}
