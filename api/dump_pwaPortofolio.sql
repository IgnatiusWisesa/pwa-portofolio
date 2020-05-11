-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: pwa_portofolio
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `achievement-organization`
--

DROP TABLE IF EXISTS `achievement-organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievement-organization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `institution` varchar(200) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  `option` varchar(200) DEFAULT NULL,
  `description` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievement-organization`
--

LOCK TABLES `achievement-organization` WRITE;
/*!40000 ALTER TABLE `achievement-organization` DISABLE KEYS */;
/*!40000 ALTER TABLE `achievement-organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `computational_skills`
--

DROP TABLE IF EXISTS `computational_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `computational_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skills` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `computational_skills`
--

LOCK TABLES `computational_skills` WRITE;
/*!40000 ALTER TABLE `computational_skills` DISABLE KEYS */;
INSERT INTO `computational_skills` VALUES (1,'HTML'),(2,'CSS'),(3,'ascsca'),(5,'ascsac'),(13,'wiltow'),(14,'skdjdsv');
/*!40000 ALTER TABLE `computational_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `starts` varchar(45) DEFAULT NULL,
  `finish` varchar(45) DEFAULT NULL,
  `institution` varchar(100) DEFAULT NULL,
  `grade` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,'a','a','a','-'),(2,'b','b','b','-');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nameoverview`
--

DROP TABLE IF EXISTS `nameoverview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nameoverview` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `overview` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nameoverview`
--

LOCK TABLES `nameoverview` WRITE;
/*!40000 ALTER TABLE `nameoverview` DISABLE KEYS */;
INSERT INTO `nameoverview` VALUES (1,'William','I am a one-year fresh graduate looking for opportunities in computer engineering. I have several experience in work, social organization, and internship program. My strengths include building and implementing strategies with consumer behavior that I learned specifically from college, and coding that I learned from the past few months, especially from Purwadhika Startup and Coding School.');
/*!40000 ALTER TABLE `nameoverview` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noncomputational_skills`
--

DROP TABLE IF EXISTS `noncomputational_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noncomputational_skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skills` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noncomputational_skills`
--

LOCK TABLES `noncomputational_skills` WRITE;
/*!40000 ALTER TABLE `noncomputational_skills` DISABLE KEYS */;
INSERT INTO `noncomputational_skills` VALUES (1,'cek1'),(2,'cek2'),(3,'cek3'),(6,'ascsacsac');
/*!40000 ALTER TABLE `noncomputational_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_achievement`
--

DROP TABLE IF EXISTS `work_achievement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_achievement` (
  `id` int(11) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `institution` varchar(200) DEFAULT NULL,
  `time` varchar(200) DEFAULT NULL,
  `option` varchar(200) DEFAULT NULL,
  `description` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_achievement`
--

LOCK TABLES `work_achievement` WRITE;
/*!40000 ALTER TABLE `work_achievement` DISABLE KEYS */;
INSERT INTO `work_achievement` VALUES (1,'Coding Student','Purwadhika','2019 - now','Skills Included','[\"ReacJS\", \"HTML\"]'),(2,'B','B','B',NULL,NULL),(3,'C','C','C',NULL,NULL);
/*!40000 ALTER TABLE `work_achievement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pwa_portofolio'
--

--
-- Dumping routines for database 'pwa_portofolio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-04 22:37:12
