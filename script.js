function submitForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
  
    // Exibe um alerta com as informações enviadas
    alert("Login enviado:\nE-mail: " + email + "\nSenha: " + password + "\nLembre de mim: " + rememberMe);
  
    // Cria uma estrutura de texto HTML confirmando o envio
    var confirmation = document.createElement("p");
    confirmation.innerHTML = "Login enviado:\nE-mail: " + email + "<br>Senha: " + password + "<br>Lembre de mim: " + rememberMe;
    document.body.appendChild(confirmation);
  }
  