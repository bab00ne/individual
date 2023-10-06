
<?php
    $host       = "db4.myarena.ru"; 
    $dbname     = "u19978_b10";         
    $user       = "u19978_b10";         
    $password   = "yE1fQ3kE2c";        
   
    try {
$connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
    }
catch(PDOException $ex) {
die('Ошибка');
    }
    
$result = $connection->query('SELECT * FROM product');
echo "<table class = 'table' border = '1'>";
$row = $result->fetch( PDO::FETCH_ASSOC );
echo "<tr>";
foreach ($row as $key => $value) {
echo "<th>".$key."</th>";
};
echo "</tr>";

{
do {
echo "<tr>";
foreach ($row as $key => $value) {
echo "<td>".$value."</td>";
}
echo "</tr>";
} while($row = $result->fetch( PDO::FETCH_ASSOC )); 
}

echo "</table>";

?>
