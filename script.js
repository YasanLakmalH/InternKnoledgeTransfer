const data = [
    {imgURL:"./imgs/M.png",id:"mLogo"},
    {imgURL:"./imgs/E.png",id:"eLogo"},
    {imgURL:"./imgs/R.png",id:"rLogo"},
    {imgURL:"./imgs/N.png",id:"nLogo"}
]
const cardSection = document.getElementById("card-section");
for(let item of data){
    cardSection.innerHTML += `
    <div class="card">
        <div class="card-body" id=${item.id}>
            <img src="${item.imgURL}"/>
        </div>
    </div>`;
}
