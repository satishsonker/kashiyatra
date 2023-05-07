const apiPrfix = "api/v1";
export const apiUrls = {
    fileUploadController: {
        uploadFiles: `${apiPrfix}/ImageUpload/upload`,
        getImageByModNameModId: `${apiPrfix}/ImageUpload/image/get/modName/id`,
        deleteImage:`${apiPrfix}/ImageUpload/image/delete/id?id=`,
    },
    templeController:{
        AddTemple:`${apiPrfix}/temples/temple`,
        updateTemple:`${apiPrfix}/temples/temple`,
        getTemples:`${apiPrfix}/temples/temple`,
        getTempleById:`${apiPrfix}/temples/temple/get`,
    },
    masterDataController:{
        getYatras:`${apiPrfix}/masterdata/get/yatras`,
        getPadavs:`${apiPrfix}/masterdata/get/padavs`,
        getDivisions:`${apiPrfix}/masterdata/get/divisions`
    }
}