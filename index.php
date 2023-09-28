<?php
$servername = "mySQL";
$database = "u19978_b10";
$username = "u19978_b10";
$password = "yE1fQ3kE2c";
$conn = mysqli_connect($servername, $database, $username, $password);
if (!$conn) {
    die("Ошибка: " . mysqli_connect_error());
}
echo "Подключено успешно";
mysqli_close($conn);
$sql = "SELECT * FROM Product";
if($result = $conn->query($sql)) {
$rowsCount = $result->num_rows;
}
if ($rowsCount < 1 ->query($sql)) {
echo "Запрос вернул 0 результатов";
}
?>