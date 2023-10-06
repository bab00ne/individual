
<?php 
htmlspecialchars($_POST['name' | 'age'] = ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401 );

    if ( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit ('Метод запроса не POST');  
    if (empty($_POST['age'])) exit('Поле "возраст" не заполнено');
    if(!is_numeric($_POST['age'])) exit ('Поле "возраст имеет нечисловое значение"') ;
    if (((int)$_POST['age']) < 1) exit('Поле "возраст" < 1'); 
     
    else echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
        echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
    ?>