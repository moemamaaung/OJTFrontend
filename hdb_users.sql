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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phno` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `program_name` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `township` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `program_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKip2751gaoprbkblo5w4lny6wn` (`program_id`),
  CONSTRAINT `FKip2751gaoprbkblo5w4lny6wn` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Kyaukpadaung',NULL,'2023-07-02 04:20:55.313836',NULL,'Moe Ma Ma Aung','female','$2a$10$bXdYP9cBBn5H/1yUKOxSI.uMQ.datXwYI38zFXY.t8fRD/F/Kvvi2','09898898877',NULL,NULL,'Myapalae','Kyaukpadaung',NULL,NULL,'cumoema1999@gmail.com',NULL),(2,'Sagaing',NULL,NULL,NULL,'Phyu  Phway','female','$2a$10$GZR/a4i6I6ptnMB7hYmInu3wgTg4xNO.KGa9Co/V6tlNWpxRpa/wm','09969890955',NULL,NULL,'BoGyoke','ShweBo',NULL,'2023-07-08 17:20:00.165032','phyuphyuphway@gmail.com',2),(3,'Lashio',NULL,NULL,NULL,'Yoon Than Lwin','female','$2a$10$M1iy.PynhCL.0JElXbO4ruNDARDYtnYNPMxx2fO4JTHhwq9HiReOW','09876576543',NULL,NULL,'Aung Myint Mo','Laisho',NULL,'2023-07-23 16:14:47.960947','yoonthanlwin18@gmail.com',1),(4,'Kyaukpadauguuuuuu',NULL,NULL,NULL,'Htet Htet Aung ','female','$2a$10$U.WijcIYviXX.fELjDmqPupchDwAPNtdnQz5QD22dk5Hl9S6J9GbO','9876543265',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,'2023-07-08 17:08:27.805149','htethtet@gmail.com',2),(5,'NaypyiTaw',NULL,NULL,NULL,'Myat Hsu','male','$2a$10$9M8Pt1IHNLXo7N/d5b60tO/IgQcl8GUmysXYv/Lqlg5gH2gkVeF0C','09780709422',NULL,NULL,'10 Lann Twar','Pyinmana',NULL,'2023-07-08 17:15:06.915688','hsu@gmail.com',2),(6,'Kyaukpadaug',NULL,NULL,NULL,'May Myat Noe','female','$2a$10$oR87cLBT7B7FeUmqvaU4L.bGK3z6MOkshAAGvssD3XltIPmaoDDTO','09796308817',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,'2023-07-08 17:28:27.570076','maynoe@gmail.com',1),(7,'Kyaukpadaug',NULL,NULL,NULL,'Zar Ni Htun','female','$2a$10$L.uQ2Txyd/pDgGlNpcM58.gMitNhXZZroKC96WYZDt5mjr68UzZXW','9876543265',NULL,NULL,'Mya Palae','KyaukpadaugUUUUUUUUUUUUUU',NULL,'2023-07-23 16:27:44.211973','zarni@gmail.com',1),(8,'Kyaukpadaung',NULL,NULL,NULL,'Htet Wai Chaw','female','$2a$10$wNrS6aIvdmHiP72HeCEH1edQdG5Si/PgoxrYb84Ra4vWjL89bpWxi','09876543234',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,'2023-07-23 16:43:20.384669','htetwai@gmail.com',4),(9,'Kyaukpadaung',NULL,NULL,NULL,'Aung Phyo Hein','male','$2a$10$FFy0C5c7ENPsUiy5rZkjqe8urG8QAPyL0b4v4NV3zFXb1nLSHXCaG','0987654325',NULL,NULL,'Mya Palae','Kyaukpadaung',NULL,'2023-07-23 16:18:15.779408','aph7720@gmail.com',2),(10,'Kyaukpadaug',NULL,'2023-07-02 10:13:47.360147',NULL,'Thiri Maung Win','female','$2a$10$mEydlSlZSePlbLNeSiR94u167JjQROWhB5GOC4opE1kulh6El6PWe','09876543265',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'phyuphyuphway1999@gmail.com',1),(11,'Kyaukpadaug',NULL,'2023-07-02 11:32:21.040486',NULL,'Yoon Than Lwin','female','$2a$10$UiO6R3D09OaUCBtxUH8UkOpOp0anF8y4/fDbZNnPAhHSl9g0TfENy','09796308817',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'yoonthan18@gmail.com',1),(12,'Kyaukpadaug',NULL,NULL,NULL,'Hnin Yamone Kyaw','female','$2a$10$q/ykJlyksPsB/FBLdVY15Of7F8sB.wPZMz4qdp5AFEUZw9zspLtb2','09789040188',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,'2023-07-11 23:00:43.055204','hnin@gmail.com',2),(13,'Mandalay',NULL,'2023-07-08 12:09:46.763730',NULL,'Zaw Myo Aung','male','$2a$10$.Qholjl6t.9kgY7nSqZUOu4LsrZhk.PVHu5zFjlq6q3ziSBmEVPd.','098765432123',NULL,NULL,'35*36 72','AungMyayTharZan',NULL,NULL,'zawmyoaung@gmail.com',2),(14,'Mandalay',NULL,'2023-07-08 15:21:24.292272',NULL,'Yoon Than Lwin','female','$2a$10$M1iy.PynhCL.0JElXbO4ruNDARDYtnYNPMxx2fO4JTHhwq9HiReOW','09876576543',NULL,NULL,'Aung Myint Mo','Lashio',NULL,NULL,'yoonthanlwin18@gmail.com',3),(15,'Mandalay',NULL,NULL,NULL,'Khin Hnin Oo','female','$2a$10$iv9JjZJlc3K/sSNItIGvp.0Rp9Rm.XrqhfdiX0Ah6DzemK0bagfzS','09796308817',NULL,NULL,'88 39*40','MaharAungMyay',NULL,'2023-07-22 23:34:46.393431','cym@gmail.com',1),(16,'Kyaukpadaug',NULL,'2023-07-22 23:47:03.120800',NULL,'May Thet Mon','female','$2a$10$xlxlFdpa6l.iHygfc61ub.SpERCNCxtunr5tjlkmsfBkdseKPvV8q','09969890955',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'mtm@gmail.com',2),(17,'Kyaukpadaug',NULL,'2023-07-23 00:00:46.418630',NULL,'Hsu Myat Naing','female','$2a$10$CfyL1Q7Kjezv2AjGHPYIZOJFCpdlYxUkUETvOFDJhUv2lj4wEp40a','09876543234',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'hmn@gmail.com',2),(18,'Natogyi',NULL,'2023-07-23 17:05:05.764494',NULL,'Ei Cho Zin Theint','female','$2a$10$1MnAoLWyidPK7Ow.778ePOpkAIhf86yMNqarBtbgeNNeLEIWvgj7u','09876543234',NULL,NULL,'6 street','Natogyi',NULL,NULL,'ei@gmail.com',3),(19,'Mataya',NULL,'2023-07-23 17:10:40.867302',NULL,'Khaing Zin War','female','$2a$10$9gKG/X9aaK4duJQKqd4J3u7vBdPUfEbDvPByYOSbtvvV4sFg9bQ3m','09796308817',NULL,NULL,'7 street','Mataya',NULL,NULL,'kzw@gmail.com',3),(20,'Kyaukpadaug',NULL,'2023-07-23 17:19:37.149414',NULL,'Soe Sandar','female','$2a$10$XBcmbCemWZDerrEL4RMwDOnHe4KXcSm8dnuqJj0I8.aPQcLk0h8rm','09796308817',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'soe@gmail.com',4),(21,'Kyaukpadaug',NULL,'2023-07-23 17:24:27.564560',NULL,'Shwe Yi','female','$2a$10$yCsXqk5w58o4nhd5xCamPOzOeP1z/EQ2zqhf5wDMcXXnAwLA1Z.gC','09780709422',NULL,NULL,'Mya Palae','Kyaukpadaug',NULL,NULL,'shwe@gmail.com',1),(22,'NayPyiTaw',NULL,'2023-07-23 17:27:42.826642',NULL,'May Swan','female','$2a$10$cYNqct.6E8eR8dh2CCN50OvbP3dta4sy98qmzxvkV5lZ63uJ8m6iW','09969890955',NULL,NULL,'7 street','NayPyiTaw',NULL,NULL,'may@gmail.com',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
