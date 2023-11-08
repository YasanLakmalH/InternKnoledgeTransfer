const data = [
    {imgURL:"./imgs/M.png"},
    {imgURL:"./imgs/E.png"},
    {imgURL:"./imgs/R.png"},
    {imgURL:"./imgs/N.png"}
]
const cardSection = document.getElementById("card-section");
for(let item of data){
    cardSection.innerHTML += `
    <div class="card">
        <div class="card-body">
            <img src="${item.imgURL}"/>
        </div>
    </div>`;
}
