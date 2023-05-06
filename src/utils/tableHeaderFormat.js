const renderImage=(row,header)=>{
let images=row?.images??[];
images=images.find(x=>x.imageType?.toLowerCase() ==="image");
if(images===undefined)
images=[];
  return <img className="grid-image" src={process.env.REACT_APP_API_URL+images?.thumbPath} alt={row?.enName} title={row?.enName} onError={(e) => { e.target.src = "/assets/img/icons/default-image.jpg"}} />
}
const headerFormat = {
  templeDetails: [
    { name: "Name (Eng)", prop: "enName"},
    { name: "Name (हिंदी)", prop: "hiName"},
    {name: "Lat.", prop: "latitude"},
    {name: "Long.", prop: "longitude"}, 
    { name: "Description (Eng)", prop: "enDescription",action:{dAligh:"start"}},
    { name: "Description (हिंदी)", prop: "hiDescription",action:{dAligh:"start"}},
    { name: "Images", prop: "Images",customColumn:renderImage},
  ]
}

export { headerFormat };