//Event Delegation Concept used which means not applying eventlistener to all chlild, its delegated to its parent which using bubbling concept.
//Now Code is very good optimized 
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
   
   if(event.target.tagName=='BUTTON'){
      document.body.style.backgroundColor=event.target.id; 
   }
   
})