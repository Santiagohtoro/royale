const baseDeDatos = {
    usuarios: [
      {
        id: 1,
        name: "Steve Jobs",
        email: "steve@jobs.com",
        password: "Steve123",
        score:[
            {roulette: 95.0, poker:95.0, slots:95.0}
        ]
      },
      {
        id: 2,
        name: "Ervin Howell",
        email: "shanna@melissa.tv",
        password: "Ervin345",
        score:[
            {roulette: 95.0, poker:95.0, slots:95.0}
        ]
      },
      {
        id: 3,
        name: "Clementine Bauch",
        email: "nathan@yesenia.net",
        password: "Floppy39876",
        score:[
            {roulette: 95.0, poker:95.0, slots:95.0}
        ]
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        email: "julianne.oconner@kory.org",
        password: "MysuperPassword345",
        score:[
            {roulette: 95.0, poker:95.0, slots:95.0}
        ]
      },
    ],
  };

  
  window.addEventListener('load', () => {

    let iniciarSesion=document.querySelector('.btn-login');
    iniciarSesion.addEventListener('click',(e)=>{
        if(localStorage.getItem('usuario')!=null){
            accesoConcedido();
            e.preventDefault();
          }else{
            verificar();
          }
    })

    function verificar() { 
        let inputEmail = document.querySelector('.emailInput').value;
        let inputPassword = document.querySelector('.passwordInput').value;
        let email = inputEmail.toLowerCase();
    
          for (let i = 0; i < baseDeDatos.usuarios.length; i++) {
            if(email === baseDeDatos.usuarios[i].email && inputPassword === baseDeDatos.usuarios[i].password){
              acceso = true
              posicion = i
              break;
            }else{
              acceso = false
            } 
          }
    
          if(acceso == true){
            let datosUsuario = { name: baseDeDatos.usuarios[posicion].name, email: baseDeDatos.usuarios[posicion].email };
            localStorage.setItem('usuario', JSON.stringify(datosUsuario))
            accesoConcedido()
          }else{
            alert("Email o contraseña errado")
          } 
    }


      function accesoConcedido(e) {
        usuario = JSON.parse(localStorage.getItem('usuario'));
        location.replace(document.location.href+'/pplpage.html');
        }
  });
