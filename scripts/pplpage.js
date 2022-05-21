





window.addEventListener('load', () => {
    usuario = JSON.parse(localStorage.getItem('usuario'));
    let nombreUsuario = document.querySelector('.username')
    nombreUsuario.innerHTML=`${usuario.name}`
    
    
    let roulette = document.querySelector(".roulette-icon")
    roulette.addEventListener('click', (e)=>{
        location.replace('/roulette.html');
    } )

    let poker = document.querySelector(".poker-icon")
    poker.addEventListener('click', (e)=>{
        location.replace('/poker.html');
    } )

    let slots = document.querySelector(".slots-icon")
    slots.addEventListener('click', (e)=>{
        location.replace('/slots.html');
    } )

    let exit = document.querySelector(".exit")
    exit.addEventListener('click', (e)=>{
        localStorage.clear();
        window.location.replace('/index.php');
    } )
})
/*cerrarSesion.addEventListener('click', (e)=>{
    
})****/