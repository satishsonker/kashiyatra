import React, { useState, useEffect } from 'react'
import Label from '../Common/Label'
import Dropdown from '../Common/Dropdown'
import ErrorLabel from '../Common/ErrorLabel'
import Inputbox from '../Common/Inputbox'
import FormHeader from '../Common/FormHeader'
import FileUpload from '../Common/FileUpload'
import Divider from '../Common/Divider'
import ButtonBox from '../Common/ButtonBox'
import { Api } from '../../../apis/Api'
import { apiUrls } from '../../../apis/ApiUrls'
import { toast } from 'react-toastify'
import { toastMessage } from '../../../constants/ConstantValues'
import { validationMessage } from '../../../constants/validationMessage'
import { fileUploadModuleName } from '../../../constants/enums';
import { useSearchParams, useNavigate } from 'react-router-dom'


export default function AddTemples() {
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const editTempleId = searchParams.get("templeId");
  const templeModelTemplate = {
    enName: "",
    hiName: "",
    enDescription: "",
    hiDescription: "",
    id: 0,
    latitude: "",
    longitude: "",
    padavId: 0,
    yatraId: 0,
    sequenceNo: ""
  };
  const [templeModel, setTempleModel] = useState(templeModelTemplate);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState();
  const [padavList, setPadavList] = useState([]);
  const [yatraList, setYatraList] = useState([]);
  const [templeList, setTempleList] = useState([]);
  const changeHandler = (e) => {
    var { name, type, value } = e.target;
    if (type === 'select-one') {
      value = parseInt(value);
    }
    setTempleModel({ ...templeModel, [name]: value });
  }

  const saveTempleHandler = () => {
    debugger;
    let formError = validateTemple();
    if (Object.keys(formError).length > 0) {
      setError(formError);
      return;
    }
    setError({});
    var model = templeModel;
    if (model.yatraId === -1) {
      model.padavId = null;
      model.sequenceNo = null;
    }

    model.id = model.id === -1 ? 0 : model.id;
    setIsSaving(true);
    if (templeModel.id === 0) {
      Api.Put(apiUrls.templeController.AddTemple, templeModel)
        .then(res => {
          setIsSaving(false);
          if (res.data?.id > 0) {
            toast.success(toastMessage.saveSuccess);
            setTempleModel({ ...res.data });
          }
          else
            toast.warn(toastMessage.saveError);
        })
        .catch(err => {
          setIsSaving(false);
        });
    }
    else {
      Api.Post(apiUrls.templeController.AddTemple, templeModel)
        .then(res => {
          setIsSaving(false);
          if (res.data?.id > 0) {
            toast.success(toastMessage.updateSuccess);
          }
          else
            toast.warn(toastMessage.updateError);
        }).catch(err => {
          setIsSaving(false);
        });;
    }
  }

  useEffect(() => {
    let id = parseInt(editTempleId);
    if (!isNaN(id) && id > 0) {
      Api.Get(apiUrls.templeController.getTempleById + `/${id}`)
        .then(res => {
          setTempleModel({ ...res.data });
        });
    }
  }, [editTempleId]);

  useEffect(() => {
    if (templeModel?.id > 0) {
      Api.Get(apiUrls.templeController.getTempleById + `/${templeModel.id}`)
        .then(res => {
          var modal = templeModel;
          modal = res.data;
          modal.yatraId = templeModel.yatraId;
          modal.padavId = templeModel.padavId;
          modal.sequenceNo = templeModel.sequenceNo;
          setTempleModel({ ...modal });
        });
    }
  }, [templeModel.id]);

  useEffect(() => {
    var apiList = [];
    apiList.push();
    apiList.push(Api.Get(apiUrls.masterDataController.getYatras));
    apiList.push(Api.Get(apiUrls.templeController.getTemples));
    Api.MultiCall(apiList)
      .then(res => {
        setYatraList(res[0].data);
        setTempleList(res[1].data.data);
      });
  }, []);

  useEffect(() => {
    Api.Get(apiUrls.masterDataController.getPadavByYatraId+`/${templeModel.yatraId}`)
    .then(res=>{
      setPadavList(res.data);
    })
  }, [templeModel.yatraId])
  


  const validateTemple = () => {
    var { enName, enDescription, latitude, longitude, yatraId, padavId, sequenceNo, id } = templeModel;
    var err = {};
    if (!yatraId || yatraId === 0) err.yatraId = validationMessage.reqYatraName;
    if (yatraId > 0) {
      if (!padavId || padavId === 0) err.padavId = validationMessage.reqPadavName;
      if (!sequenceNo || sequenceNo === "") err.sequenceNo = validationMessage.reqSequenceNumber;
    }
    if (id === 0) {
      err.id = validationMessage.reqTempleSelect;
    }
    if (id === -1 || id > 0) {
      if (!enName || enName.length < 6) err.enName = validationMessage.reqTempleNameEn;
      if (!enDescription || enDescription.length < 6) err.enDescription = validationMessage.reqTempleDescEn;
      if (!latitude || latitude.length < 6) err.latitude = validationMessage.reqTempleLatitude;
      if (!longitude || longitude.length < 6) err.longitude = validationMessage.reqTempleLongitude;
    }
    return err;
  }
  const resetTempleHandler = () => {
    navigate('/admin/temple/add')
    setTempleModel({ ...templeModelTemplate });
  }
  return (
    <>
      <div className='card'>
        <div className='card-header bg-info text-start fs-9'>Add Temple</div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Yatra" isRequired={true}></Label>
              <Dropdown data={yatraList} addNA={true} name="yatraId" value={templeModel.yatraId} defaultText="Select Yatra" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.yatraId} />
            </div>
            {templeModel.yatraId !== -1 && <>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <Label text="Stage/Padav" isRequired={templeModel.yatraId>0}></Label>
                <Dropdown data={padavList} name="padavId" text="name" value={templeModel.padavId} defaultText="Select Padav" onChange={changeHandler} className="form-control-sm" />
                <ErrorLabel message={error?.padavId} />
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <Inputbox errorMessage={error?.sequenceNo} labelText="Sequence No."  isRequired={templeModel.yatraId>0} name="sequenceNo" value={templeModel.sequenceNo} placeholder="Enter sequence no." onChangeHandler={changeHandler} className="form-control-sm" />
              </div>
            </>
            }
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Temple" isRequired={true}></Label>
              <Dropdown data={templeList} name="id" text="enName" addNA={true} NAText="Add New Temple" value={templeModel.id} defaultText="Select Temple" onChange={changeHandler} className="form-control-sm" />
              <ErrorLabel message={error?.id} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.enName} labelText="Name (Eng.)" disabled={templeModel.id > 0 && editTempleId === 0} isRequired={true} name="enName" value={templeModel.enName} placeholder="Enter temple name" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.enName} labelText="Name (हिंदी)" isRequired={false} disabled={templeModel.id > 0 && editTempleId === 0} name="hiName" value={templeModel.hiName} placeholder="मंदिर का नाम हिंदी में दर्ज करें" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.latitude} labelText="Latitude" isRequired={true} disabled={templeModel.id > 0 && editTempleId === 0} name="latitude" value={templeModel.latitude} placeholder="Enter Latitude (25.3109° N)" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Inputbox errorMessage={error?.longitude} labelText="Longitude" isRequired={true} disabled={templeModel.id > 0 && editTempleId === 0} name="longitude" value={templeModel.longitude} placeholder="Enter Longitude (83.0107° E)" onChangeHandler={changeHandler} className="form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Description (Eng.)" isRequired={true}></Label>
              <textarea name="enDescription" value={templeModel.enDescription} disabled={templeModel.id > 0 && editTempleId === 0} rows={4} style={{ resize: 'none' }} placeholder="Enter Description in English" onChange={changeHandler} className=" form-control form-control-sm" />
              <ErrorLabel message={error?.enDescription} />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <Label text="Description (हिंदी)" isRequired={false}></Label>
              <textarea name="hiDescription" value={templeModel.hiDescription} disabled={templeModel.id > 0 && editTempleId === 0} rows={4} style={{ resize: 'none' }} placeholder="हिंदी में विवरण दर्ज करें" onChange={changeHandler} className=" form-control form-control-sm" />
            </div>
            <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
              <div className='d-flex justify-content-end my-3'>
                <ButtonBox onClickHandler={saveTempleHandler} disabled={isSaving} type={templeModel?.id > 0 ? "update" : "save"} text={templeModel?.id > 0 ? "Update" : "Save"} className="btn-sm mx-3"></ButtonBox>
                <ButtonBox onClickHandler={resetTempleHandler} disabled={isSaving} type="cancel" text="Reset Fields" className="btn-sm"></ButtonBox>
              </div>
            </div>
            <Divider></Divider>
            {templeModel.id > 0 && <section>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FormHeader heaterText='Image Upload'></FormHeader>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FileUpload disable={isSaving} moduleName={fileUploadModuleName.temple} moduleId={templeModel.id} fileType='image'></FileUpload>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FormHeader heaterText='Barcode Upload'></FormHeader>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FileUpload disable={isSaving} moduleName={fileUploadModuleName.temple} moduleId={templeModel.id} fileType='barcode'></FileUpload>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FormHeader heaterText='Audio Upload'></FormHeader>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FileUpload disable={isSaving} moduleName={fileUploadModuleName.temple} moduleId={templeModel.id} fileType="audio"></FileUpload>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FormHeader heaterText='Video Upload'></FormHeader>
              </div>
              <div className='col-sm-12 col-md-6 offset-md-3 text-start'>
                <FileUpload disable={isSaving} moduleName={fileUploadModuleName.temple} moduleId={templeModel.id} fileType='video'></FileUpload>
              </div>
            </section>
            }
          </div>
        </div>
        <div className='card-footer'></div>
      </div>
    </>
  )
}
