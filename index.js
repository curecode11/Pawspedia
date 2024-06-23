const header=document.querySelector(".header");
const content = document.querySelector(".content");
const btn = document.querySelector(".btn");
const image=document.querySelector(".image");
const body=document.querySelector("body");
const toggle=document.querySelector(".toggle");
async function getfacts() {
    const promise = await fetch("https://dogapi.dog/api/v2/facts");
    // console.log(promise);
    const data = await promise.json();
    // console.log(data.data[0].attributes.body);
    content.innerText = data.data[0].attributes.body;
    const im=await fetch("https://dog.ceo/api/breeds/image/random");
    const imdata=await im.json();
    const d=imdata.message;
    // console.log(d);

    try{

        image.innerHTML=`<img src="${d}" alt="dog">`;
    }
    catch(err){
        console.err(err);
    }
}

btn.addEventListener("click", () => {
    getfacts();
})
toggle.addEventListener("click",()=>{
    body.classList.toggle("light");
    header.classList.toggle("pink");
})