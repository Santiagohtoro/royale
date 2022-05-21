<?php
include 'code-register.php';
?>
    
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casino Royale</title>
    <link rel="Stylesheet" type="text/css" href="css/loginStyles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css">
    <script type="text/javascript" src="/scripts/login.js"></script>
</head>
<body>
    <header>
        <img src="./assets/icono.png" alt="logo" class="logo">
    </header>
    <div class="container">
        <div class="login-container">
            <div class="form-header">
                <img class="icon"src="./assets/Poppins ExtraBold.png" alt="Casino Royal">
            </div>
            <div class="form-group">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                    <h2>Registrarse</h2>
                    <input class="emailInput" type="text" name="username" placeholder="User">
                    <span class="msg-error"><?php echo$username_err;?></span>
                    <input class="emailInput" type="email" name="email" placeholder="Email">
                    <span class="msg-error"><?php echo$email_err;?></span>

                    <input class="passwordInput" type="password" name="password" placeholder="Password">
                    <span class="msg-error"><?php echo$password_err;?></span>
                    <div id="error-container" class="hidden">
                    </div>
                    <button class="btn-login" type="submit">Registrarse</button> 
                </form>
                <p class="footer-form">¿Ya tienes una cuenta? <a href="index.php">Iniciar sesion</a></p>
            </div>
        </div>
    </div>
</body>
</html>