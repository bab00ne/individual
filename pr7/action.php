
<?php 
 $BackLink = '<a href="index.php"> К форме </a>';
    if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ('Метод запроса не POST'. '<BR>' . $BackLink);
    if (empty($_POST['email'])) exit('Поле "Почта" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['name'])) exit('Поле "Логин" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['password'])) exit('Поле "Пароль" не заполнено'. '<BR>' . $BackLink);
    if (empty($_POST['confirm_password'])) exit('Поле "Подтвердите пароль" не заполнено'. '<BR>' . $BackLink);

    if (strlen($_POST['password']) < 7) exit ('Поле "Пароль" должно содержать минимум 8 символов' . '<BR>' . $BackLink);

    if (strlen($_POST['password']) > 20) exit ('Поле "Пароль" должно содержать не более 20 символов' . '<BR>' . $BackLink);

    if ($_POST['password'] !== $_POST['confirm_password'] ) exit ('<b> Пароли не совпадают </b> !!');





if (!isset ($_POST['email']) ) {
    if (!isset ($_POST['name']) || (!isset ($_POST['password'])) || (!isset ($_POST['confirm_password']))) {
        exit ('Во время регистрации произошла ошибка, проверьте ввведенные данные');
    }
}

$connection = new PDO ('mysql:host=db4.myarena.ru;dbname=u19978_b10;charset=utf8', 'u19978_b10', 'yE1fQ3kE2c');

$data = [$_POST['name'], $_POST['password'], $_POST['email']];

$query = "SELECT * from User WHERE username=?";
                   $result = mysqli_query($connection, $query) or die
                       (mysqli_error($connection));

if(mysqli_num_rows($result)> 0)
    {
        $multi = "Sorry ! This Username is not available...Please choose another";
    }
        else{ 


$res = $connection->prepare("INSERT INTO regisration_form (username, password, email) VALUES (?, ?, ?)");
$res = $res->execute ($data);
                  }
if ($res) {
    exit ('Вы успешно зарегистрировались!'. '<BR>' . $BackLink);
}
exit ('Во время регистрации произошла ошибка, проверьте ввведенные данные'. '<BR>' . $BackLink);

?>