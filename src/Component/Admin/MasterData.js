import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Breadcrumb from './Common/Breadcrumb'
import TableView from './tables/TableView'
import { headerFormat } from '../../utils/tableHeaderFormat'
import { Api } from '../../apis/Api';
import { apiUrls } from '../../apis/ApiUrls';
import Dropdown from './Common/Dropdown';
import ButtonBox from './Common/ButtonBox';

export default function MasterData() {
  const masterDataType={
    
  }
    let navigate = useNavigate();
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const breadcrumbOption = {
      title: 'Master Data',
      items: [
        {
          isActive: false,
          title: "Master Data",
          icon: "fa-solid fa-gopuram"
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
        <div className='d-flex justify-content-end mb-3'>
            <div className='mx-2'>
            <Dropdown className="form-control-sm"></Dropdown>
            </div>
            <div className='mx-2'>
            <ButtonBox type="Add" className="btn-sm"></ButtonBox>
            </div>
        </div>
        <TableView option={tableOption} />
      </>
    )
}
