<?php
    session_start();
if(!isset($_SESSION["loggedin"])||$_SESSION["loggedin"]!== true){
    header("location:index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casino Royale</title>
    <link rel="Stylesheet" type="text/css" href="css/loginStyles.css">
    <link rel="stylesheet" href="css/pplpagestyles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script type="text/javascript" src="scripts/login.js"></script>
    <script type="text/javascript" src="scripts/pplpage.js"></script>
</head>
<body>
    <header>
        <img src="./assets/icono.png" alt="logo" class="logo">
<!--         <section class="user-account"><h1 class="username"></h1><span  class="material-symbols-outlined exit">exit_to_app</span></section>
 -->  
 <a class="a-btn-2" href="close.php">Cerrar Sesion</a>
</header>
    <div class="container">
        <div class="container-card">
            <img src="./assets/Nuove abitudini degli appassionati di gioco da casinò.png" alt="login" class="roulette-icon">
            <h2 class="game-name">Ruleta</h2>
            <p class="cash-flow">Status: $95.0</p>
            <a class="a-btn" href="roulette.html">Jugar</a>
            
        </div>
        <div class="container-card">
            <img src="./assets/michal-parzuchowski-bRqsXcEcKFw-unsplash.jpg" alt="login" class="poker-icon">
            <h2 class="game-name">Poker</h2>
            <p class="cash-flow">Status: $95.0</p>
            <a class="a-btn" href="poker.html">Jugar</a>
        </div>
        <div class="container-card">
            <img src="./assets/erik-mclean-uraAsBooxOo-unsplash.jpg" alt="login" class="slots-icon">
            <h2 class="game-name">Slots</h2>
            <p class="cash-flow">Status: $95.0</p>
            <a class="a-btn" href="slots.html">Jugar</a>
        </div>
    </div>
    <!---->
</body>
</html>