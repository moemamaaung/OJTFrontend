-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hdb
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` VALUES (1,'Blue Stone','2023-07-27','Junior Java Developer','2023-06-29'),(2,'Kumo','2023-07-28','Junior Java Developer','2023-06-30'),(3,'no','2023-07-01','no','2023-07-01'),(4,'Blue Stone','2023-07-28','Junior Java Developer','2023-06-29'),(5,'Blue Stone','2023-07-20','Junior Java Developer','2023-07-06'),(6,'Kumo','2023-07-26','Senior Java Developer','2023-06-29'),(7,'Blue Stone','2023-07-20','Junior Java Developer','2023-06-30'),(8,'Blue Stone','2023-07-13','Junior Java Developer','2023-07-01'),(9,'Blue Stone','2023-07-27','Junior Java Developer','2023-06-30'),(10,'Blue Stone','2023-07-28','Junior Java Developer','2023-07-06'),(11,'None','2023-06-30','None','2023-06-30'),(12,'None','2023-07-27','None','2023-06-29'),(13,'Blue Stone','2023-07-29','Junior Java Developer','2023-06-30'),(14,'Blue Stone','2023-07-21','Junior Java Developer','2023-06-30'),(15,'Blue Stone','2023-07-22','Junior Java Developer','2023-07-01'),(16,'Blue Stone','2023-07-26','Junior Java Developer','2023-06-28'),(17,'Blue Stone','2023-07-19','Junior Java Developer','2023-06-28'),(18,'Kumo','2023-07-29','Junior Java Developer','2023-06-29'),(19,'Kumo','2023-07-31','Junior Java Developer','2023-06-30'),(20,'Blue Stone','2023-08-02','Junior Java Developer','2023-07-13'),(21,'Blue Stone','2023-07-19','Junior Java Developer','2023-07-07');
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 22:11:53
