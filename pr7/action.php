
<?php 

    if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ('Метод запроса не POST');  
    if (empty($_POST['mail'])) exit('Поле "Почта" не заполнено');
    if (empty($_POST['login'])) exit('Поле "Логин" не заполнено');
    if (empty($_POST['password'])) exit('Поле "Пароль" не заполнено');
    if (empty($_POST['password_repeat'])) exit('Поле "Подтвердите пароль" не заполнено');

    // if ($_POST['password'] < 8) exit ('Поле "Пароль" должно содержать минимум 8 соимволов');
    // if ($_POST['password_repeat'] < 8) exit ('Поле "Подтвердите пароль" должно содержать минимум 8 соимволов');

    // if ($_POST['password'] > 20) exit ('Поле "Пароль" должно содержать не более 20 соимволов');
    // if ($_POST['password_repeat'] > 20) exit ('Поле "Подтвердите пароль" должно содержать не более 20 соимволов');

    if ($_POST['password'] !== $_POST['password_repeat'] ) exit ('<b> Пароли не совпадают </b> !!');

echo 'Вы успешно зарегистрировались!';
    ?>