const formLogin= document.getElementById("formLogin")
const userLogin=document.getElementById("userLogin");
const passLogin=document.getElementById("passLogin");
const buttonLogin=document.getElementById("buttonLogin");
const eyeOpen=document.getElementById("eyeOpen");
const eyeClosed=document.getElementById("eyeClosed");
const loginFail=document.getElementById("loginFail");
const tittleBienvenida=document.getElementById("tittleBienvenida");
const nameUser=document.getElementById("nameUser");
tittleBienvenida.style.display="none"
eyeClosed.style.display="none"



/*------FUNCION DE OJOS--- */
eyeOpen.addEventListener("click", ()=>{
    eyeClosed.style.display="flex"
    eyeOpen.style.display="none"
    passLogin.type="text"
})
eyeClosed.addEventListener("click",()=>{
    eyeClosed.style.display="none"
    eyeOpen.style.display="flex"
    passLogin.type="password"
})

/*----VALIDACION DEL REGISTRO---- */
const userRegister=document.getElementById("userRegister");
const passRegister=document.getElementById("passRegister");
const passConfirmed=document.getElementById("passConfirmed");
const formRegister=document.getElementById("formRegister");
const registerFail=document.getElementById("registerFail");

formRegister.addEventListener("submit", (e)=>{
if (passRegister.value!=passConfirmed.value){
passRegister.style.background="red"
passConfirmed.style.background="red"
registerFail.innerHTML="Claves distintitas"

}
else if(passRegister.value===undefined  || passRegister.value===""|| userRegister.value===undefined || userRegister.value===""){
  registerFail.innerHTML="Completar datos"
}
  
 else {
  localStorage.setItem("Usuario", userRegister.value)
  localStorage.setItem("Clave", passRegister.value)
  containerRegister.style.display="none"
  containerLogin.style.display="flex"
  userRegister.style.background="black"
  passRegister.style.background="black"
  passConfirmed.style.background="black"
  registerFail.innerHTML=""
  formRegister.reset()
}




  
e.preventDefault();
})













/*VALIDACION DE INICIO DE SEESION */

formLogin.addEventListener("submit", (e)=>{
  const userValid=localStorage.getItem("Usuario");
  const passValid=localStorage.getItem("Clave");
  loginFail.style.opacity="1"

   if (userLogin.value!=userValid){
    userFail();
    loginFail.innerHTML="Usuario Invalido"
    

setTimeout   (function opacity(){
  loginFail.style.opacity="0"
},5000)
    
   } else if(passLogin.value!=passValid){
     passFail();
     loginFail.innerHTML="Clave Invalida"
     
     setTimeout   (function opacity(){
      loginFail.style.opacity="0"
    },5000)

   } else{

    userLogin.classList.remove("failed")
    passLogin.classList.remove("failed")
    


    formLogin.reset();
    containerLogin.style.display="none"

    tittleBienvenida.style.display="flex"
    nameUser.innerHTML=`${userValid}`
  
   }
     
  
  e.preventDefault()
})


function userFail (){
  userLogin.classList.add("failed")
  passLogin.classList.remove("failed")
}
function passFail (){
  userLogin.classList.remove("failed")
    passLogin.classList.add("failed")
}



/*---BOTONES DE SESION Y REGISTRO--- */
const containerLogin=document.getElementById("containerLogin");
const containerRegister=document.getElementById("containerRegister");
containerRegister.style.display="none"


const loginTittle=document.getElementById("loginTittle");
const registerTittle=document.getElementById("registerTittle");

/*-----MOVIMIENTOS DEL MOUSE--- */
registerTittle.addEventListener("mouseover", ()=>{
  registerTittle.style.cursor="pointer"
  registerTittle.style.color="white"
  registerTittle.style.borderBottom="2px solid #0095A9"
  loginTittle.style.color="black"
  loginTittle.style.border="none"
})

registerTittle.addEventListener("mouseout", ()=>{
  registerTittle.style.color="black"
  registerTittle.style.border="none"
  loginTittle.style.cursor="pointer"
  loginTittle.style.color="white"
  loginTittle.style.borderBottom="2px solid #0095A9"
})




/*----EVENTOS DE CLICK---- */
const loginTittle2=document.getElementById("loginTittle2")
const registerTittle2=document.getElementById("registerTittle2")

registerTittle2.addEventListener("mouseover", ()=>{
  registerTittle2.style.cursor="pointer"
  registerTittle2.style.color="white"
  registerTittle2.style.borderBottom="2px solid #0095A9"
  loginTittle2.style.color="black"
  loginTittle2.style.border="none"
})

registerTittle2.addEventListener("mouseout", ()=>{
  registerTittle2.style.color="black"
  registerTittle2.style.border="none"
  loginTittle2.style.cursor="pointer"
  loginTittle2.style.color="white"
  loginTittle2.style.borderBottom="2px solid #0095A9"
})

registerTittle.addEventListener("click", ()=>{
  containerLogin.style.display="none"
  containerRegister.style.display="flex"
  
  userLogin.style.background="black"
  passLogin.style.background="black"
  formLogin.reset()

})
loginTittle2.addEventListener("click", ()=>{
  containerLogin.style.display="flex"
  containerRegister.style.display="none"

})


