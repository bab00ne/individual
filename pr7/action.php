
<?php 
 $BackLink = '<a href="index.php"> К форме </a>';
    if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ('Метод запроса не POST'. '<BR>' . $BackLink);
    if (empty($_POST['email'])) exit('Поле "Почта" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['username'])) exit('Поле "Логин" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['password'])) exit('Поле "Пароль" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['confirm_password'])) exit('Поле "Подтвердите пароль" не заполнено'. '<BR>' . $BackLink);

    if (strlen($_POST['password']) < 7) exit ('Поле "Пароль" должно содержать минимум 8 символов' . '<BR>' . $BackLink);

    if (strlen($_POST['password']) > 20) exit ('Поле "Пароль" должно содержать не более 20 символов' . '<BR>' . $BackLink);

    if ($_POST['password'] !== $_POST['confirm_password'] ) exit ('<b> Пароли не совпадают  !! </b>');


    


if (!isset ($_POST['email']) ) { // определяет введен ли емаил
    if (!isset ($_POST['username']) || (!isset ($_POST['password'])) || (!isset ($_POST['confirm_password']))) { //проверяет введены ли имя пароль и подтверждение
        exit ('Во время регистрации произошла ошибка, проверьте ввведенные данные');
    }
}

$connection = new PDO ('mysql:host=db4.myarena.ru;dbname=u19978_b10;charset=utf8', 'u19978_b10', 'yE1fQ3kE2c'); //подключение бд

$select = $connection->prepare( "SELECT COUNT(`id`) as cnt FROM `registration_form` WHERE `username` = ? OR `email` = ?;" ); //Подготавливает запрос к выполнению
    $res = $select->execute([ $_POST['username'],$_POST['email'] ] ); //выполняет запрос
    $row = $select->fetch(); //возвращает текущее значение селект

    if(!$res ){ //если рес не выполнил запрос выводит ошибку
        exit( 'Ошибка регистрации...');
    }

    if( $res && isset($row['cnt']) && $row[0] > 0 ){ //если рес выполнил запрос и строки уже существуют выводит ошибку 
    exit( 'Ошибка регистрации... (Пользователь уже существует)' );
    }

$password = password_hash ($_POST['password'], PASSWORD_BCRYPT);
$data = [$_POST['username'], $password, $_POST['email']]; //присваивает переменной "дата" значения имени пароля и емаила


$res = $connection->prepare("INSERT INTO registration_form (username, password, email) VALUES (?, ?, ?)"); //подготавливает запрос к выполнению вставки данных в бд
$res = $res->execute ($data); //выполняет запрос
                  
if ($res) { //если запрос выполнен возвращает соответствующее сообщение
    exit ('Вы успешно зарегистрировались!'. '<BR>' . $BackLink);
}
exit ('Во время регистрации произошла ошибка, проверьте ввведенные данные'. '<BR>' . $BackLink); //если запрос НЕ выполнен возвращает соответствующее сообщение


?>