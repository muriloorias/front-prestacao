function MakeLogin(){
      var nameInput = document.getElementById('name') 
      var emailinput = document.getElementById('email') 
      var passwordInput = document.getElementById('password')
      var name = nameInput.value
      var email = emailinput.value
      var password = passwordInput.value
      var fakeName = "aleandre de urais"
      var fakeEmail = "email@legal.com"
      var fakePassword = "1234faahhhh"

      if(name === fakeName && email === fakeEmail &&
             password === fakePassword){
            alert("login concluido")
            window.location.href = '../pages/home.html'
      } else{
            alert("tente novamente")
      }
}