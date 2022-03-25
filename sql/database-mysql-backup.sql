-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: herois
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `heroi_poder`
--

DROP TABLE IF EXISTS `heroi_poder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroi_poder` (
  `id_hpoder` int NOT NULL AUTO_INCREMENT,
  `id_heroi` int NOT NULL,
  `id_poder` int NOT NULL,
  PRIMARY KEY (`id_hpoder`),
  KEY `id_poder` (`id_poder`),
  KEY `id_heroi` (`id_heroi`),
  CONSTRAINT `heroi_poder_ibfk_1` FOREIGN KEY (`id_heroi`) REFERENCES `herois` (`id_heroi`),
  CONSTRAINT `heroi_poder_ibfk_2` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`),
  CONSTRAINT `heroi_poder_ibfk_3` FOREIGN KEY (`id_heroi`) REFERENCES `herois` (`id_heroi`) ON DELETE CASCADE,
  CONSTRAINT `heroi_poder_ibfk_4` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`) ON DELETE CASCADE,
  CONSTRAINT `heroi_poder_ibfk_5` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `heroi_poder_ibfk_6` FOREIGN KEY (`id_heroi`) REFERENCES `herois` (`id_heroi`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroi_poder`
--

LOCK TABLES `heroi_poder` WRITE;
/*!40000 ALTER TABLE `heroi_poder` DISABLE KEYS */;
/*!40000 ALTER TABLE `heroi_poder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `herois`
--

DROP TABLE IF EXISTS `herois`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `herois` (
  `id_heroi` int NOT NULL AUTO_INCREMENT,
  `heroi` varchar(55) NOT NULL,
  `inteligencia` int DEFAULT NULL,
  `forca` int DEFAULT NULL,
  `velocidade` int DEFAULT NULL,
  `resistencia` int DEFAULT NULL,
  `poder` int DEFAULT NULL,
  `combate` int DEFAULT NULL,
  `nivel` int DEFAULT NULL,
  `lado` varchar(5) DEFAULT NULL,
  `genero` varchar(10) DEFAULT NULL,
  `data_cadastro` timestamp NOT NULL,
  `id_universo` int NOT NULL,
  `id_poder` int NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_heroi`),
  KEY `id_universo` (`id_universo`),
  KEY `id_poder` (`id_poder`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `herois_ibfk_1` FOREIGN KEY (`id_universo`) REFERENCES `universo` (`id_universo`),
  CONSTRAINT `herois_ibfk_10` FOREIGN KEY (`id_universo`) REFERENCES `universo` (`id_universo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_11` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_12` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_2` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`),
  CONSTRAINT `herois_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`),
  CONSTRAINT `herois_ibfk_4` FOREIGN KEY (`id_universo`) REFERENCES `universo` (`id_universo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_5` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_6` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_7` FOREIGN KEY (`id_universo`) REFERENCES `universo` (`id_universo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_8` FOREIGN KEY (`id_poder`) REFERENCES `poderes` (`id_poder`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `herois_ibfk_9` FOREIGN KEY (`id_user`) REFERENCES `usuario` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `herois`
--

LOCK TABLES `herois` WRITE;
/*!40000 ALTER TABLE `herois` DISABLE KEYS */;
/*!40000 ALTER TABLE `herois` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poderes`
--

DROP TABLE IF EXISTS `poderes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poderes` (
  `id_poder` int NOT NULL AUTO_INCREMENT,
  `poder` varchar(55) NOT NULL,
  PRIMARY KEY (`id_poder`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poderes`
--

LOCK TABLES `poderes` WRITE;
/*!40000 ALTER TABLE `poderes` DISABLE KEYS */;
/*!40000 ALTER TABLE `poderes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `universo`
--

DROP TABLE IF EXISTS `universo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `universo` (
  `id_universo` int NOT NULL AUTO_INCREMENT,
  `universo` varchar(55) NOT NULL,
  PRIMARY KEY (`id_universo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `universo`
--

LOCK TABLES `universo` WRITE;
/*!40000 ALTER TABLE `universo` DISABLE KEYS */;
/*!40000 ALTER TABLE `universo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `username` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `psw` varbinary(1000) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-25  8:51:44
