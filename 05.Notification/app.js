function notify(message) {

 let notification = document.querySelector('#notification');

 if(notification.style.display !== 'block'){
   notification.textContent = message;
   notification.style.display = 'block';
 }

 notification.addEventListener('click',(ev)=>{
   ev.target.style.display = 'none';
 })

}