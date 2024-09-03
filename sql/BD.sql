CREATE DATABASE  IF NOT EXISTS `astro_js_dmytro_reva` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `astro_js_dmytro_reva`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: astro_js_dmytro_reva
-- ------------------------------------------------------
-- Server version	8.0.38

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
-- Table structure for table `datos`
--

DROP TABLE IF EXISTS `datos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dato` varchar(100) DEFAULT NULL,
  `valor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos`
--

LOCK TABLES `datos` WRITE;
/*!40000 ALTER TABLE `datos` DISABLE KEYS */;
INSERT INTO `datos` VALUES (1,'nombre','Dmytro Reva'),(2,'role','desarrollador junior'),(3,'email','dmytro.reva@eviden.com'),(4,'telefono','+34636851972');
/*!40000 ALTER TABLE `datos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habilidades`
--

DROP TABLE IF EXISTS `habilidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habilidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(200) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habilidades`
--

LOCK TABLES `habilidades` WRITE;
/*!40000 ALTER TABLE `habilidades` DISABLE KEYS */;
INSERT INTO `habilidades` VALUES (1,'https://miro.medium.com/v2/resize:fit:1400/1*nLbfO_PdTSpeCdZQuUr8RQ.png','Astro JS','bajo','https://docs.astro.build/es/concepts/why-astro/'),(2,'https://education.oracle.com/file/general/p-80-java.png','Java','alto','https://www.java.com/es/download/help/whatis_java.html'),(3,'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png','JavaScript','medio','https://es.wikipedia.org/wiki/JavaScript'),(4,'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png','Angular','medio','https://docs.angular.lat/guide/architecture'),(5,'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png','PHP','bajo','https://www.php.net/manual/es/intro-whatis.php'),(6,'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png','Python','bajo','https://es.wikipedia.org/wiki/Python'),(7,'https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg','SQL','alto','https://es.wikipedia.org/wiki/SQL'),(8,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png','TypeScript','medio','https://es.wikipedia.org/wiki/TypeScript'),(9,'https://cdn-icons-png.flaticon.com/256/174/174854.png','HTML','alto','https://es.wikipedia.org/wiki/HTML'),(10,'https://cdn3d.iconscout.com/3d/free/thumb/free-css3-3d-logo-download-in-png-blend-fbx-gltf-file-formats--html-language-programming-brand-vol-1-pack-logos-3640300.png?f=webp','CSS','alto','https://es.wikipedia.org/wiki/CSS');
/*!40000 ALTER TABLE `habilidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `img` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Blog/CV Dmytro Reva','ESTA WEB, es uno de los proyectos de mi portfolio desarrollado con Astro JS','https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png','https://github.com/DmytroReva2001/Astro_Project'),(2,'Roma','Tienda online, vista desarrollada con Angular','/logo.png','https://github.com/DmytroReva2001/Roma'),(4,'TPV Android','Programa en Java para Android para convertir un teléfono estándar a un TPV','https://clienty.es/wp-content/uploads/2023/06/tpv-para-restaurantes-comandero-precios.webp','https://github.com/DmytroReva2001/PI_TPV_Movil'),(5,'Chat Java','Programa en Java para escritorio para un simple chat en la misma red','https://cdn-icons-png.flaticon.com/512/1175/1175149.png','https://github.com/DmytroReva2001/PSP_T5_Practica');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_tecnologias`
--

DROP TABLE IF EXISTS `projects_tecnologias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects_tecnologias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `project_id` int DEFAULT NULL,
  `tecnologia_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`),
  KEY `tecnologia_id` (`tecnologia_id`),
  CONSTRAINT `projects_tecnologias_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `projects_tecnologias_ibfk_2` FOREIGN KEY (`tecnologia_id`) REFERENCES `tecnologias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_tecnologias`
--

LOCK TABLES `projects_tecnologias` WRITE;
/*!40000 ALTER TABLE `projects_tecnologias` DISABLE KEYS */;
INSERT INTO `projects_tecnologias` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,4),(5,2,5),(6,2,2),(7,2,3),(9,4,6),(10,4,5),(11,5,5);
/*!40000 ALTER TABLE `projects_tecnologias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecnologias`
--

DROP TABLE IF EXISTS `tecnologias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologias`
--

LOCK TABLES `tecnologias` WRITE;
/*!40000 ALTER TABLE `tecnologias` DISABLE KEYS */;
INSERT INTO `tecnologias` VALUES (1,'https://seeklogo.com/images/A/astro-icon-logo-44253BACEE-seeklogo.com.png','https://docs.astro.build/es/concepts/why-astro/'),(2,'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png','https://nodejs.org/docs/latest/api/'),(3,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png','https://es.wikipedia.org/wiki/TypeScript'),(4,'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png','https://docs.angular.lat/guide/architecture'),(5,'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png','https://www.java.com/es/download/help/whatis_java.html'),(6,'https://formacioncis.com/wp-content/uploads/2018/10/Android_logo.png','https://es.wikipedia.org/wiki/Android');
/*!40000 ALTER TABLE `tecnologias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-03 10:07:48
