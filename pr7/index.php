<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel=" " type=" text/php" href=" styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма</title>
</head>
<body>
    <form action="action.php" ?data[role]=moderator&data [action]=work&m
ood=super method="post"> <b>
<p> Почта <input type="email" name="mail" required></p>
<p> Логин <input type="text" name="login" required></p>
<p> Пароль <input type="password" name="password" required min ="8" max="20"></p>
<p> Подтвердите пароль <input type="password" name="password_repeat" required min ="8" max="20"></p>
<p> Зарегистрироваться <input type="submit">
<p> <input name="reset" type="reset" value="Очистить поля"> </p>
</b>  </form>

</body>
</html>