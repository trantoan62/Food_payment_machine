-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: databasequanan
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gia`
--

DROP TABLE IF EXISTS `gia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gia` (
  `comtam` int(11) DEFAULT NULL,
  `comga` int(11) DEFAULT NULL,
  `phobo` int(11) DEFAULT NULL,
  `bunbohue` int(11) DEFAULT NULL,
  `banhmi` int(11) DEFAULT NULL,
  `goicuon` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gia`
--

LOCK TABLES `gia` WRITE;
/*!40000 ALTER TABLE `gia` DISABLE KEYS */;
INSERT INTO `gia` VALUES (25,25,25,30,10,5);
/*!40000 ALTER TABLE `gia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muaban`
--

DROP TABLE IF EXISTS `muaban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `muaban` (
  `stt` int(11) NOT NULL AUTO_INCREMENT,
  `danauxong` int(11) DEFAULT NULL,
  `dalayhang` int(11) DEFAULT NULL,
  `malayhang` int(11) DEFAULT NULL,
  `sotien` int(11) DEFAULT NULL,
  `comtam` int(11) DEFAULT NULL,
  `comga` int(11) DEFAULT NULL,
  `phobo` int(11) DEFAULT NULL,
  `bunbohue` int(11) DEFAULT NULL,
  `banhmi` int(11) DEFAULT NULL,
  `goicuon` int(11) DEFAULT NULL,
  `ngaymua` datetime DEFAULT NULL,
  PRIMARY KEY (`stt`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muaban`
--

LOCK TABLES `muaban` WRITE;
/*!40000 ALTER TABLE `muaban` DISABLE KEYS */;
INSERT INTO `muaban` VALUES (1,1,0,4033,24,2,0,0,0,0,0,'2022-06-14 18:06:58'),(2,0,0,27154,12,1,0,0,0,0,0,'2022-06-14 18:10:36'),(3,0,0,50155,100,1,1,1,0,0,0,'2022-06-14 23:59:56'),(4,1,0,45056,55,0,0,1,1,0,0,'2022-06-15 00:00:04'),(5,0,0,74716,80,1,1,0,0,0,1,'2022-06-15 00:00:14'),(6,0,0,19543,60,0,0,1,1,0,1,'2022-06-15 00:00:20'),(7,0,0,66273,235,2,1,1,2,2,4,'2022-06-15 00:00:31');
/*!40000 ALTER TABLE `muaban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trangthai`
--

DROP TABLE IF EXISTS `trangthai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trangthai` (
  `tinhtien` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trangthai`
--

LOCK TABLES `trangthai` WRITE;
/*!40000 ALTER TABLE `trangthai` DISABLE KEYS */;
INSERT INTO `trangthai` VALUES (1);
/*!40000 ALTER TABLE `trangthai` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-15  2:59:33
