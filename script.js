document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    const username = document.getElementById('loginUsername').value
    const password = document.getElementById('loginPassword').value

    //Verifica se o Nome e a senha são validos
    if (username === 'admin' && password === 'password') {
      //login realizado com sucesso
      alert('Login realizado com sucesso')
    } else {
      //Login Invalido
      alert('Login ou Senha invalidos')
    }
  })

document
  .getElementById('registrationForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()
    const username = document.getElementById('regUsername').value
    const email = document.getElementById('regEmail').value
    const password = document.getElementById('regPassword').value
    const confirmPassword = document.getElementById('regConfirmPassword').value

    //verifique se todos os campos estão preenchidos
    if (username && email && password && confirmPassword) {
      //verificar se a senha são iguais
      if (password === confirmPassword) {
        //Registro feito com sucesso
        alert('Registro realizado com sucesso!')
        //resta o formulario
        document.getElementById('registrationForm').reset()
      } else {
        //Senha não iguais
        alert('A senha não são iguais')
      }
    } else {
      //Falta campo a ser preenchido
      alert('Acho que você esqueceu de preencher algum campo (: ')
    }
  })
