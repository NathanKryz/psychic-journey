
   
    var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
		function register()
		{
			x.style.left='-400px';
			y.style.left='50px';
			z.style.left='110px';
		}
		function login()
		{
			x.style.left='50px';
			y.style.left='450px';
			z.style.left='0px';
		}

 var modal = document.getElementById('login-form');
  window.onclick = function(event) 
{
        if (event.target == modal) 
        {
        modal.style.display = "none";
    }
}

const loginFormHandler = async (event) => {
  console.log("aaAAAaa");
  event.preventDefault();
  
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //  document.location.replace('/characters');
      document.location.reload();

     console.log("check log");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  console.log("bbbBBbB");
  event.preventDefault();
 
  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const confirmpassword = document.querySelector('#password-confirm').value.trim();

  if (confirmpassword === password){
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
      //  document.location.replace('/characters');
        document.location.reload();
      console.log("check reg");
      }   else {
        alert(response.statusText);
      }
    }
  } else {
    alert("Password and password confirmation don't match");
  }
};

document.querySelector('#login').addEventListener('submit', loginFormHandler);

document.querySelector('#register').addEventListener('submit', signupFormHandler);

let playButtonhide = document.querySelector('.butPlay');

playButtonhide.setAttribute("style", "opacity: 0");