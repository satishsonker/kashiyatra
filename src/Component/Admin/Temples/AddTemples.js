import React, { useState, useEffect } from 'react'
import Label from '../Common/Label'
import Dropdown from '../Common/Dropdown'
import ErrorLabel from '../Common/ErrorLabel'
import Inputbox from '../Common/Inputbox'
import FormHeader from '../Common/FormHeader'
import FileUpload from '../Common/FileUpload'

export default function AddTemples() {
  const templeModelTemplate = {
    yatraId: 0,
    padavId: 0,
    sequenceNo: 0,
    templeId: 0,
    description: "",
    latitude: "",
    longitude: ""
  };
  const [templeModel, setTempleModel] = useState(templeModelTemplate);
  const [error, setError] = useState()
  const changeHandler = (e) => {
    var { name, type, value } = e.target;
    if (type === 'select-one') {
      value = parseInt(value);
    }
    setTempleModel({ ...templeModel, [name]: value });
  }
  return (
    <>
      <div className='card'>
        <div className='card-header bg-info text-start fs-9'>Add Temple</div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Yatra" isRequired={true}></Label>
              <Dropdown data={[]} name="yatraId" value={templeModel.yatraId} defaultText="Select Yatra" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.yatraId} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Stage/Padav"></Label>
              <Dropdown data={[]} name="padavId" value={templeModel.padavId} defaultText="Select Padav" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.padavId} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Sequence No"></Label>
              <Dropdown data={[]} name="sequenceNo" value={templeModel.sequenceNo} defaultText="Select Sequence No" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.sequenceNo} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Temple" isRequired={true}></Label>
              <Dropdown data={[]} name="templeId" value={templeModel.templeId} defaultText="Select Temple" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.templeId} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.latitude} labelText="Latitude" isRequired={true} name="latitude" value={templeModel.latitude} placeholder="Enter Latitude" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.longitude} labelText="Longitude" isRequired={true} name="longitude" value={templeModel.longitude} placeholder="Enter Longitude" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Description" isRequired={true}></Label>
              <textarea name="description" value={templeModel.description} rows={4} style={{ resize: 'none' }} placeholder="Enter Description" onChange={changeHandler} className=" form-control form-control-sm" />
              <ErrorLabel message={error?.description} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FormHeader heaterText='Image Upload'></FormHeader>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FileUpload></FileUpload>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FormHeader heaterText='Barcode Upload'></FormHeader>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FileUpload></FileUpload>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FormHeader heaterText='Audio Upload'></FormHeader>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FileUpload></FileUpload>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FormHeader heaterText='Video Upload'></FormHeader>
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <FileUpload></FileUpload>
            </div>
          </div>
        </div>
        <div className='card-footer'></div>
      </div>
    </>
  )
}
