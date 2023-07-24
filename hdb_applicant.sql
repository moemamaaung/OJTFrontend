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
-- Table structure for table `applicant`
--

DROP TABLE IF EXISTS `applicant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `confirm` bit(1) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phno` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `township` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `edu_id` bigint DEFAULT NULL,
  `exp_id` bigint DEFAULT NULL,
  `program_id` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK70ufify0st1l2uwx50b6lwih3` (`edu_id`),
  KEY `FK3gynm8ibanutpr98ti8mfo2vs` (`exp_id`),
  KEY `FK2aw8dan0hn9mnn8atrpdca2lq` (`program_id`),
  CONSTRAINT `FK2aw8dan0hn9mnn8atrpdca2lq` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`),
  CONSTRAINT `FK3gynm8ibanutpr98ti8mfo2vs` FOREIGN KEY (`exp_id`) REFERENCES `experience` (`id`),
  CONSTRAINT `FK70ufify0st1l2uwx50b6lwih3` FOREIGN KEY (`edu_id`) REFERENCES `edu_background` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicant`
--

LOCK TABLES `applicant` WRITE;
/*!40000 ALTER TABLE `applicant` DISABLE KEYS */;
INSERT INTO `applicant` VALUES (1,'Sagaing',_binary '\0','Phyu Phyu Phway','female','09969890955','BoGyoke','ShweBo','phyuphyuphway@gmail.com',1,1,1,'Confirmed'),(2,'Kyaukpadaug',_binary '\0','Htet Htet Aung ','female','9876543265','Mya Palae','Kyaukpadaug','htethtet@gmail.com',2,2,2,'Confirmed'),(5,'Lashio',_binary '\0','Yoon Than Lwin','female','09876576543','Aung Myint Mo','Lashio','yoonthanlwin18@gmail.com',3,3,3,'Confirmed'),(6,'NaypyiTaw',_binary '\0','Myat Hsu','female','09780709422','10 Lann Twar','Pyinmana','hsu@gmail.com',4,4,4,'Confirmed'),(7,'Kyaukpadaug',_binary '\0','May Myat Noe','female','09796308817','Mya Palae','Kyaukpadaug','maynoe@gmail.com',5,5,4,'Confirmed'),(8,'Kyaukpadaug',_binary '\0','Zar Ni Htun','female','9876543265','Mya Palae','Kyaukpadaug','zarni@gmail.com',6,6,1,'Confirmed'),(9,'Kyaukpadaug',_binary '\0','Htet Wai Chaw','female','09876543234','Mya Palae','Kyaukpadaug','htetwai@gmail.com',7,7,1,'Confirmed'),(10,'Kyaukpadaug',_binary '\0','Aung Phyo Hein','male','0987654325','Mya Palae','Kyaukpadaug','aph7720@gmail.com',8,8,2,'Confirmed'),(11,'Kyaukpadaug',_binary '\0','Thiri Maung Win','female','09876543265','Mya Palae','Kyaukpadaug','phyuphyuphway1999@gmail.com',9,9,1,'Confirmed'),(12,'Kyaukpadaug',_binary '\0','Yoon Than Lwin','female','09796308817','Mya Palae','Kyaukpadaug','yoonthan18@gmail.com',10,10,1,'Confirmed'),(13,'Kyaukpadaug',_binary '\0','Hnin Yamone Kyaw','female','09789040188','Mya Palae','Kyaukpadaug','hnin@gmail.com',11,11,3,'Confirmed'),(14,'Mandalay',_binary '\0','Zaw Myo Aung','male','098765432123','35*36 72','AungMyayTharZan','zawmyoaung@gmail.com',12,12,2,'Confirmed'),(15,'Mandalay',_binary '\0','Khin Hnin Oo','female','09796308817','88 39*40','MaharAungMyay','khinhninoo@gmail.com',13,13,1,'Confirmed'),(17,'Kyaukpadaug',NULL,'Chaw Yu Mon','female','09876543234','Mya Palae','Kyaukpadaug','cym@gmail.com',15,15,1,'Confirmed'),(18,'Kyaukpadaug',NULL,'May Thet Mon','female','09969890955','Mya Palae','Kyaukpadaug','mtm@gmail.com',16,16,2,'Confirmed'),(19,'Kyaukpadaug',NULL,'Hsu Myat Naing','female','09876543234','Mya Palae','Kyaukpadaug','hmn@gmail.com',17,17,2,'Confirmed'),(20,'Natogyi',NULL,'Ei Cho Zin Theint','female','09876543234','6 street','Natogyi','ei@gmail.com',18,18,3,'Confirmed'),(22,'Mataya',NULL,'Khaing Zin War','female','09796308817','7 street','Mataya','kzw@gmail.com',18,18,3,'Confirmed'),(23,'Kyaukpadaug',NULL,'Soe Sandar','female','09796308817','Mya Palae','Kyaukpadaug','soe@gmail.com',19,19,4,'Confirmed'),(26,'NayPyiTaw',NULL,'May Swan','female','09969890955','7 street','NayPyiTaw','may@gmail.com',18,18,2,'Confirmed'),(28,'NaypyiTaw',NULL,'Hsu Latt','female','09796308817','8 street','NayPyiTaw','hsula@gmail.com',20,20,2,'Confirm'),(32,'Kyaukpadaug',NULL,'Aye Pyae','female','09969890955','Mya Palae','Kyaukpadaug','aye1@gmail.com',21,21,3,'Confirm');
/*!40000 ALTER TABLE `applicant` ENABLE KEYS */;
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
