<?php 
 $BackLink = '<a href="index.php"> К форме </a>';
    if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ('Метод запроса не POST'. '<BR>' . $BackLink);
    if (empty($_POST['username'])) exit('Поле "Логин" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['password'])) exit('Поле "Пароль" не заполнено'. '<BR>' . $BackLink);
    if (strlen($_POST['password']) < 7) exit ('Поле "Пароль" должно содержать минимум 8 символов' . '<BR>' . $BackLink);
    if (strlen($_POST['password']) > 20) exit ('Поле "Пароль" должно содержать не более 20 символов' . '<BR>' . $BackLink);

if (!isset ($_POST['username']) ) { // определяет введен ли юзернейм
    if (!isset ($_POST['password'])) { //проверяет введен ли пароль 
        exit ('Во время регистрации произошла ошибка, проверьте ввведенные данные');
    }
}

$password = password_hash ($_POST['password'], PASSWORD_BCRYPT);

$connection = new PDO ('mysql:host=db4.myarena.ru;dbname=u19978_b10;charset=utf8', 'u19978_b10', 'yE1fQ3kE2c'); //подключение бд

$res = $connection->query("SELECT * FROM registration_form WHERE username = {$_POST['username']} AND password = {$_POST['password']}"); //выбираем все данные (*) из БД где юзернейм = юзернейму в БД и пароль = паролю в БД

$user = $res->fetch();

if (count($user) == 0) {
    exit ('Такой пользователь не найден');
}

if ($res) { //если запрос выполнен возвращает соответствующее сообщение
    exit ('Вы успешно авторизировались!'. '<BR>' . $BackLink);
}
exit ('Во время авторизации произошла ошибка, проверьте ввведенные данные'. '<BR>' . $BackLink); //если запрос НЕ выполнен возвращает соответствующее сообщение

?>