<?php
/* Conexao com o banco de dados */

define('HOST', 'localhost');
define('USUARIO', 'anasta41_lucas');
define('SENHA', 'u!Y&]iAUm7)V');
define('DB', 'anasta41_marketplace');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ("Não foi possível conectar");