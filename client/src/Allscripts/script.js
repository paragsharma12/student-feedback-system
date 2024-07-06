const globa = {
   currentpage: window.location.pathname,
}
const dd=document.getElementById('log')
const p= document.getElementById('ball')
function sohan(){
   const onClick=()=>{
      p.classList.add('first') 
   }
   const onout=()=>{
      const p= document.getElementById('ball')
     p.classList.remove('first')
   }
   dd.addEventListener('mouseover',onClick)
   dd.addEventListener('mouseout',onout)
}
function init(){
   switch(globa.currentpage){
      case '/':
         case '/index.html':
         sohan();
         console.log('home')
         break;
         case '/login/login.html':
         console.log('login')
         break;
         case '/admin/admin.html':
         console.log('admin')
         break;
     
   }
}
document.addEventListener('DOMContentLoaded',init);
