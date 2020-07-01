
const postB = document.getElementById('postN');
const getNotify = document.getElementById('getNotify');
const getAll = document.getElementById('getNotifyList');
let el_down = document.getElementById("GFG_DOWN"); 
let el_up = document.getElementById("ALL_Notifications");
let post_noti = document.getElementById("postNotify"); 
let all_noti = document.getElementById("ALL_Notifications"); 

getNotify.addEventListener('click', () => {
  let notifyTrackerId = document.getElementById('notifyTrackerId').value;
   console.log(notifyTrackerId );
   let url = "https://6gmsx3bc13.execute-api.us-east-1.amazonaws.com/dev/expresss?notifyTrackerId=" + notifyTrackerId;
   fetch(url)
   .then(res => res.json())
   .then(resData => {
    console.log(resData);
    el_down.innerHTML = JSON.stringify(resData,undefined, 4);
  }) 
   .catch(err => console.log(err));

 })


 postB.addEventListener('click', ()=> {

    fetch('https://6gmsx3bc13.execute-api.us-east-1.amazonaws.com/dev/expresss', {
      method : 'PUT',
      body : post_noti.value,
      headers : {
        'content-type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(resData => {
      console.log(resData);
    })  
    .catch(err => console.log(err))
})

getAll.addEventListener('click', () => {
  let userId = document.getElementById('userId').value;
  let startDate = document.getElementById('startDate').value;

   let url = "https://6gmsx3bc13.execute-api.us-east-1.amazonaws.com/dev/expresss/user?userId=" + userId + "&startDate=" + startDate;
   fetch(url)
   .then(res => res.json())
   .then(resData => {
    console.log(resData);
    el_up.innerHTML = JSON.stringify(resData,undefined, 4);
  }) 
   .catch(err => console.log(err));
})

//https://6gmsx3bc13.execute-api.us-east-1.amazonaws.com/dev/expresss?notifyTrackerId=tr001
//https://6gmsx3bc13.execute-api.us-east-1.amazonaws.com/dev/expresss/user?userId=user003&startDate=2020-06-15