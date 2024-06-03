<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        *{
            box-sizing: border-box;
        }
        body{
            width: 100%;
            height: 100%;
        }
        form{
            width: 300px;
            margin: 200px auto;
            text-align: center;
        }
        input{
            display: block;
            margin: 10px auto;
            width: 250px;
            height: 30px;
        }
    </style>
    
</head>
<body>
    <form>
        <h3>Login:</h3>
        <input type="text" placeholder="Login" id="Login">
        <input type="text" placeholder="Senha" id="Senha">
        <input type="submit" onclick="logar(); return false">
    </form>

    <script>
        function logar(){
            var Login= document.getElementById('Login').value;
            var Senha= document.getElementById('Senha').value;
            if(Login== "Desenvolvimento" && Senha== "Web") {alert("Bem-vindo"); location.href= "Serviços.html"; } else{alert('Usuário ou senha incorretos!'); }
        }
    </script>

</body>
</html>
