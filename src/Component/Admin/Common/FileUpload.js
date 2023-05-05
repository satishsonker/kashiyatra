import React, { useState, useEffect } from 'react'
import '../../../css/admin.css';

export default function FileUpload({ moduleId,
    moduleName,
    fileType,
    showLabel = false }) {
    const [images, setImages] = useState([]);
    const removeImage=(removeIndex)=>
    {
        let newModel=[];
        images?.forEach((ele,ind)=>{
            if(ind!==removeIndex)
            newModel.push(ele);
        });
        setImages([...newModel]);
    }

    const onImageChange = (event) => {
        debugger;
        var urls = []
        let files = event.target.files;
        if (files && files.length > 0) {
            for (let index = 0; index < files.length; index++) {
                urls.push({
                    localUrl:URL.createObjectURL(files[index]),
                    file:files[index]
                });
                
            }
            if(images.length>0)
            setImages([...urls,...images]);
            else
            setImages([...urls]);
        }
    }

    function checkFile() {
        var fileElement = document.getElementById("uploadFile");
        var fileExtension = "";
        if (fileElement.value.lastIndexOf(".") > 0) {
            fileExtension = fileElement.value.substring(fileElement.value.lastIndexOf(".") + 1, fileElement.value.length);
        }
        if (fileExtension.toLowerCase() == "gif") {
            return true;
        }
        else {
            alert("You must select a GIF file for upload");
            return false;
        }
    }

    return (
        <>
            <input
                type="file"
                className="form-control form-control-sm"
                multiple={true}
                onChange={e => onImageChange(e)}
            />
            <div className="d-flex align-items-start bd-highlight mb-3 file-upload-container">
                {
                    images?.map((res, index) => {
                        return <div key={index} className="bd-highlight">
                            <div className='close text-danger'><i onClick={e=>removeImage(index)} className="fa-solid fa-xmark"></i></div>
                            <img src={res?.localUrl} />
                        </div>
                    })
                }
            </div>
        </>
    )
}
