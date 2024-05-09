let incbtn = document.querySelector(".inc-btn");
let decbtn = document.querySelector(".dec-btn");
let value = document.querySelector(".value");
let dropdown = document.querySelector(".dropdown1");
let container = document.querySelector(".container")
let initial_value = 0;

incbtn.addEventListener("click", ()=>{
  initial_value+=1;
  value.innerText = initial_value;
})

decbtn.addEventListener("click", ()=>{
  initial_value-=1;
  value.innerText = initial_value;
})

const changeHandler = (e)=>{
  console.log(dropdown.value);
  container.style.backgroundColor = dropdown.value;
  if(dropdown.value === "Circle"){
    container.style.borderRadius = "50%"
  }else if(dropdown.value === "Reset"){
    container.style.borderRadius = "0"
  }

}