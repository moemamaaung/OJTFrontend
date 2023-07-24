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
-- Table structure for table `edu_background`
--

DROP TABLE IF EXISTS `edu_background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edu_background` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `degree` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edu_background`
--

LOCK TABLES `edu_background` WRITE;
/*!40000 ALTER TABLE `edu_background` DISABLE KEYS */;
INSERT INTO `edu_background` VALUES (1,'BE','BE-IT','2023-07-29','2016-01-02','TUM'),(2,'Computer','Computet(3rd year)','2023-07-27','2023-01-28','Computer'),(3,'BE','BE-Civil First Year','2023-07-28','2022-01-02','TUM'),(4,'BE','BE-EC','2023-07-28','2023-07-12','TUM'),(5,'BE','BE-IT','2023-07-22','2023-07-01','TUM'),(6,'BE','BE-IT','2023-07-22','2023-06-30','TUM'),(7,'BE','BE-EC(first year)','2023-07-28','2023-06-30','TUM'),(8,'BE','BE-IT','2023-07-27','2023-07-05','MU'),(9,'BE','BE-IT','2023-07-06','2023-07-01','TUM'),(10,'BE','BE-Civil','2023-07-28','2023-07-01','TUM'),(11,'BA','BA(Myanmar)','2023-07-06','2016-02-08','Meiktila University'),(12,'BSc','BSc-Computer Science','2023-07-28','2023-07-01','Yadanabon University'),(13,'BE','BE-IT','2023-07-26','2023-06-30','TUM'),(14,'BE','BE-IT','2023-07-21','2023-06-30','TUM'),(15,'BE','BE-IT','2023-06-30','2023-07-20','TUM'),(16,'BE','BE-IT','2023-07-05','2023-07-06','TUM'),(17,'BE','BE-IT','2023-08-03','2023-06-29','TUM'),(18,'BE','BE-IT','2023-07-19','2023-07-21','TUM'),(19,'BE','BE-IT','2023-07-28','2023-07-15','TUM'),(20,'BE','BE-IT','2023-07-26','2023-06-30','TUM'),(21,'BE','BE-IT','2023-07-14','2023-07-15','TUM');
/*!40000 ALTER TABLE `edu_background` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-24 22:11:54
