const apiPrfix = "api/v1";
export const apiUrls = {
    fileUploadController: {
        uploadFiles: `${apiPrfix}/ImageUpload/upload`,
        getImageByModNameModId: `${apiPrfix}/ImageUpload/image/get/modName/id`,
        deleteImage: `${apiPrfix}/ImageUpload/image/delete/id?id=`,
    },
    templeController: {
        AddTemple: `${apiPrfix}/temples/temple`,
        updateTemple: `${apiPrfix}/temples/temple`,
        getTemples: `${apiPrfix}/temples/temple`,
        getTempleById: `${apiPrfix}/temples/temple/get`,
    },
    masterDataController: {
        getYatras: `${apiPrfix}/masterdata/get/yatras`,
        getPadavs: `${apiPrfix}/masterdata/get/padavs`,
        getPadavByYatraId: `${apiPrfix}/masterdata/get/padavs`,
        getDivisions: `${apiPrfix}/masterdata/get/divisions`,
        addYatras: `${apiPrfix}/masterdata/yatras`,
        addPadavs: `${apiPrfix}/masterdata/padavs`,
        addDivisions: `${apiPrfix}/masterdata/divisions`,
        deleteYatras: `${apiPrfix}/masterdata/yatras`,
        deletePadavs: `${apiPrfix}/masterdata/padavs`,
        deleteDivisions: `${apiPrfix}/masterdata/divisions`
    },
    authController:{
        login: `${apiPrfix}/auth/user/login`,
        register: `${apiPrfix}/auth/user/register`,
        changePassword: `${apiPrfix}/auth/user/change/password`,
        emailVerify: `${apiPrfix}/auth/user/verify/email`,
        resetPassword: `${apiPrfix}/auth/user/reset/password`,
        updateProfile: `${apiPrfix}/auth/user/update/profile`,
    }
}