Nome BANCO / TAMANHO

+------------------------+-------------------------+-------------------+
| Nome do Banco de Dados | Tamanho Armazenado (MB) | Espaço Livre (MB) |
+------------------------+-------------------------+-------------------+
| herois                 |                   0.156 |             0.000 |
+------------------------+-------------------------+-------------------+

DEFINIÇÃO TABELAS;

+-------------+------------+--------+
| TABLE_NAME  | TABLE_TYPE | ENGINE |
+-------------+------------+--------+
| heroi_poder | BASE TABLE | InnoDB |
| herois      | BASE TABLE | InnoDB |
| poderes     | BASE TABLE | InnoDB |
| universo    | BASE TABLE | InnoDB |
| usuario     | BASE TABLE | InnoDB |
+-------------+------------+--------+

TABELAS DO BANCO herois;

+------------------+
| Tables_in_herois |
+------------------+
| heroi_poder      |
| herois           |
| poderes          |
| universo         |
| usuario          |
+------------------+

CAMPOS TABELA herois;

+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| id_heroi      | int         | NO   | PRI | NULL    | auto_increment |
| heroi         | varchar(55) | NO   |     | NULL    |                |
| inteligencia  | int         | YES  |     | NULL    |                |
| forca         | int         | YES  |     | NULL    |                |
| velocidade    | int         | YES  |     | NULL    |                |
| resistencia   | int         | YES  |     | NULL    |                |
| poder         | int         | YES  |     | NULL    |                |
| combate       | int         | YES  |     | NULL    |                |
| nivel         | int         | YES  |     | NULL    |                |
| lado          | varchar(5)  | YES  |     | NULL    |                |
| genero        | varchar(10) | YES  |     | NULL    |                |
| data_cadastro | timestamp   | NO   |     | NULL    |                |
| id_universo   | int         | NO   | MUL | NULL    |                |
| id_poder      | int         | NO   | MUL | NULL    |                |
| id_user       | int         | NO   | MUL | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+

CAMPOS TABELA universo;

+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| id_universo | int         | NO   | PRI | NULL    | auto_increment |
| universo    | varchar(55) | NO   |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+

CAMPOS TABELA poderes;

+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id_poder | int         | NO   | PRI | NULL    | auto_increment |
| poder    | varchar(55) | NO   |     | NULL    |                |
+----------+-------------+------+-----+---------+----------------+

CAMPOS TABELA usuario;

+----------+-----------------+------+-----+---------+----------------+
| Field    | Type            | Null | Key | Default | Extra          |
+----------+-----------------+------+-----+---------+----------------+
| id_user  | int             | NO   | PRI | NULL    | auto_increment |
| username | varchar(55)     | NO   |     | NULL    |                |
| email    | varchar(55)     | NO   |     | NULL    |                |
| psw      | varbinary(1000) | NO   |     | NULL    |                |
+----------+-----------------+------+-----+---------+----------------+

CAMPOS TABELA heroi_poder;

+-----------+------+------+-----+---------+----------------+
| Field     | Type | Null | Key | Default | Extra          |
+-----------+------+------+-----+---------+----------------+
| id_hpoder | int  | NO   | PRI | NULL    | auto_increment |
| id_heroi  | int  | NO   | MUL | NULL    |                |
| id_poder  | int  | NO   | MUL | NULL    |                |
+-----------+------+------+-----+---------+----------------+