
addUser=function(name,email,address){
  
userList=[];
user={};
user.name='sudha';
user.email='suda@gmail.com';
user.address='india';
userList.push(user);
userList=JSON.parse(localStorage.getItem('users'));
localStorage.setItem('users',JSON.stringify(userList));
localStorage.getItem('users');


}

addUser('sudha','sudha@gmail.com','india');

