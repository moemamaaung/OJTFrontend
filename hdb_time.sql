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
-- Table structure for table `time`
--

DROP TABLE IF EXISTS `time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `sub` varchar(255) DEFAULT NULL,
  `sub_name` varchar(255) DEFAULT NULL,
  `suba` varchar(255) DEFAULT NULL,
  `subb` varchar(255) DEFAULT NULL,
  `subc` varchar(255) DEFAULT NULL,
  `subd` varchar(255) DEFAULT NULL,
  `sube` varchar(255) DEFAULT NULL,
  `subf` varchar(255) DEFAULT NULL,
  `subg` varchar(255) DEFAULT NULL,
  `subh` varchar(255) DEFAULT NULL,
  `subi` varchar(255) DEFAULT NULL,
  `subj` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `subk` varchar(255) DEFAULT NULL,
  `subl` varchar(255) DEFAULT NULL,
  `subm` varchar(255) DEFAULT NULL,
  `subn` varchar(255) DEFAULT NULL,
  `subo` varchar(255) DEFAULT NULL,
  `subp` varchar(255) DEFAULT NULL,
  `subq` varchar(255) DEFAULT NULL,
  `program_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKotw44y6yjxbybw9h2qtlto0pl` (`program_id`),
  CONSTRAINT `FKotw44y6yjxbybw9h2qtlto0pl` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time`
--

LOCK TABLES `time` WRITE;
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
INSERT INTO `time` VALUES (1,'Computer System+Network','Basic Theory','Cooperate Legal Affair','Tutorial','Spreadsheet +DTP','JP','Lab','Basic Theory','Cooperate Legal Affair','WorkShop','Seminar','Computer System+Network','Japan','C','-','-','-','-','JP','-',1),(2,'Data Mining','A+','Spreadsheed + DTP','PHP','Network','Java','A+','PHP','Spreadsheed + DTP','PHP','Workshop','-','Java','PHP','-','-','-','-','Seminar','-',2),(4,'Financial Accounting.','Data Analytics.','Leading Teams or Project Management.','Data Analytics.','Data Analytics.','Managerial Finance','Financial Accounting.','Leading Teams or Project Management.','Data Analytics.','Managerial Finance','Financial Accounting.','Human Resources.','Human Resources.','Leading Teams or Project Management.','-','-','-','-','Tutorial','-',3),(5,'Environmental Science ','Business Administration ',' Mathematics ',' Business Administration',' Mathematics ','Materials Technology ','Environmental Science ','Materials Technology ','Engineering and Technology ',' Business Administration','Engineering and Technology ',' Mathematics ','Environmental Science ',' Business Administration','-','-','-','-','Materials Technology ','-',4);
/*!40000 ALTER TABLE `time` ENABLE KEYS */;
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
