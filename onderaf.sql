-- MySQL dump 10.13  Distrib 5.7.21, for osx10.13 (x86_64)
--
-- Host: localhost    Database: onderaf
-- ------------------------------------------------------
-- Server version	5.7.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Groen',NULL,'2018-08-30 10:29:01'),(2,'Verkeer',NULL,'2018-08-28 09:21:46'),(3,'Sociaal',NULL,NULL),(4,'Motorvoertuigen & automaten',NULL,NULL),(5,'Sport',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_entry`
--

DROP TABLE IF EXISTS `category_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_entry` (
  `category_id` int(10) unsigned NOT NULL,
  `entry_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `category_entry_category_id_entry_id_index` (`category_id`,`entry_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_entry`
--

LOCK TABLES `category_entry` WRITE;
/*!40000 ALTER TABLE `category_entry` DISABLE KEYS */;
INSERT INTO `category_entry` VALUES (1,2,NULL,NULL),(2,2,NULL,NULL),(1,3,NULL,NULL),(1,4,NULL,NULL),(1,6,NULL,NULL),(1,8,NULL,NULL),(1,9,NULL,NULL),(2,10,NULL,NULL),(2,7,NULL,NULL),(2,11,NULL,NULL),(2,12,NULL,NULL),(2,1,NULL,NULL),(1,1,NULL,NULL),(2,13,NULL,NULL),(2,14,NULL,NULL),(2,15,NULL,NULL),(2,16,NULL,NULL),(1,17,NULL,NULL),(2,18,NULL,NULL),(2,19,NULL,NULL),(1,20,NULL,NULL),(2,23,NULL,NULL);
/*!40000 ALTER TABLE `category_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_initiative`
--

DROP TABLE IF EXISTS `category_initiative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_initiative` (
  `category_id` int(10) unsigned NOT NULL,
  `initiative_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `category_initiative_category_id_initiative_id_index` (`category_id`,`initiative_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_initiative`
--

LOCK TABLES `category_initiative` WRITE;
/*!40000 ALTER TABLE `category_initiative` DISABLE KEYS */;
INSERT INTO `category_initiative` VALUES (1,1,NULL,NULL),(2,1,NULL,NULL),(1,2,NULL,NULL),(2,2,NULL,NULL);
/*!40000 ALTER TABLE `category_initiative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_organisation`
--

DROP TABLE IF EXISTS `category_organisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_organisation` (
  `category_id` int(10) unsigned NOT NULL,
  `organisation_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `category_organisation_category_id_organisation_id_index` (`category_id`,`organisation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_organisation`
--

LOCK TABLES `category_organisation` WRITE;
/*!40000 ALTER TABLE `category_organisation` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_organisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conditions`
--

DROP TABLE IF EXISTS `conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conditions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `values` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `parent_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `condition_parent_id_foreign` (`parent_id`),
  CONSTRAINT `condition_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `conditions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conditions`
--

LOCK TABLES `conditions` WRITE;
/*!40000 ALTER TABLE `conditions` DISABLE KEYS */;
/*!40000 ALTER TABLE `conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entries`
--

DROP TABLE IF EXISTS `entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `entries` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `layout` int(10) unsigned NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `form_entries_form_layout_foreign` (`layout`),
  CONSTRAINT `form_entries_form_layout_foreign` FOREIGN KEY (`layout`) REFERENCES `layouts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (1,'[{\"id\": 1, \"value\": \"Tre\"}, {\"id\": 4, \"value\": \"111\"}, {\"id\": 3, \"value\": \"dddee\"}, {\"id\": 5, \"value\": [\"vrouw\"]}, {\"id\": 7, \"value\": []}, {\"id\": 12, \"value\": true}, {\"id\": 13}]',NULL,'2018-09-26 14:01:12',1,'accepted'),(15,'[{\"id\": 3, \"value\": \"ddfeafa\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"efafae\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": true}, {\"id\": 13}]','2018-09-24 16:57:10','2018-09-24 16:59:43',1,'pending'),(16,'[{\"id\": 3, \"value\": \"ii\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"ii\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": true}, {\"id\": 13}]','2018-09-25 10:11:51','2018-09-25 10:11:51',1,'pending'),(17,'[{\"id\": 3, \"value\": \"eaeffae\"}, {\"id\": 5, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 4, \"value\": \"efeafeaf\"}, {\"id\": 7, \"value\": [\"vrouw\", \"3\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]','2018-09-25 10:15:35','2018-09-25 10:15:35',1,'pending'),(18,'[{\"id\": 3, \"value\": \"33333\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"3333\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]','2018-09-25 10:17:15','2018-09-25 10:17:15',1,'pending'),(19,'[{\"id\": 3, \"value\": \"123\"}, {\"id\": 5, \"value\": [\"man\", \"1\"]}, {\"id\": 4, \"value\": \"123\"}, {\"id\": 7, \"value\": [\"man\", \"1\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]','2018-09-25 10:20:30','2018-09-25 10:20:30',1,'pending'),(20,'[{\"id\": 3, \"value\": \"efae\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"fefea\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]','2018-09-25 10:21:20','2018-09-25 10:21:20',1,'pending'),(21,'[{\"id\": 3, \"value\": \"345534\"}, {\"id\": 5, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 4, \"value\": \"4354353\"}, {\"id\": 7, \"value\": [\"vrouw\", \"2\"]}, {\"id\": 12, \"value\": false}, {\"id\": 13}]','2018-09-25 10:22:35','2018-09-25 10:22:35',1,'pending');
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `initiatives`
--

DROP TABLE IF EXISTS `initiatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `initiatives` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user` int(10) unsigned NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `initiatives_user_id_foreign` (`user`),
  CONSTRAINT `initiatives_user_id_foreign` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `initiatives`
--

LOCK TABLES `initiatives` WRITE;
/*!40000 ALTER TABLE `initiatives` DISABLE KEYS */;
INSERT INTO `initiatives` VALUES (1,'Boompje planten!?',NULL,'2018-09-26 10:03:48',1,NULL),(2,'Straat maken',NULL,NULL,1,NULL),(3,'Sociale activiteiten',NULL,NULL,1,NULL),(4,'Jeau de boules',NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `initiatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `layouts`
--

DROP TABLE IF EXISTS `layouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `layouts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `layouts`
--

LOCK TABLES `layouts` WRITE;
/*!40000 ALTER TABLE `layouts` DISABLE KEYS */;
INSERT INTO `layouts` VALUES (1,'Initiatief','default','[{\"id\": 3, \"type\": \"textfield\", \"label\": \"Doelgroep\", \"value\": \"Wat is de doelgroep?\"}, {\"id\": 5, \"type\": \"multiselect\", \"label\": \"Geslacht\", \"value\": \"man, vrouw\"}, {\"id\": 4, \"type\": \"textfield\", \"label\": \"Leeftijd\", \"value\": \"Wat is je leeftijd?\"}, {\"id\": 1, \"type\": \"textfield\", \"label\": \"Kleurrr\", \"value\": \"Vul hier een kleur in\", \"inactive\": true}, {\"id\": 6, \"type\": \"textfield\", \"label\": \"\", \"value\": \"\", \"inactive\": true}, {\"id\": 7, \"type\": \"multiselect\", \"label\": \"Nummer\", \"value\": \"1,2,3\"}, {\"id\": 8, \"type\": \"textfield\", \"label\": \"dd\", \"value\": \"hoe\", \"inactive\": true}, {\"id\": 9, \"type\": \"textfield\", \"label\": \"ddff\", \"value\": \"test\", \"inactive\": true}, {\"id\": 10, \"type\": \"textfield\", \"label\": \"\", \"value\": \"\", \"inactive\": true}, {\"id\": 11, \"type\": \"textfield\", \"label\": \"dd\", \"value\": \"aa\", \"inactive\": true}, {\"id\": 12, \"type\": \"checkbox\", \"label\": \"Vinkje\", \"value\": \"\"}, {\"id\": 13, \"type\": \"text\", \"label\": \"Paragraaf\", \"value\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis odio nunc, id convallis nisi ullamcorper sed. Maecenas nec ex et risus semper dictum sit amet nec ligula. Etiam sem mi, sagittis eu risus eu, faucibus tristique lectus. Vestibulum luctus at neque dignissim gravida. Vestibulum eleifend lorem at elit congue, vitae vestibulum metus tincidunt. Fusce ut rhoncus enim. Aenean velit ante, imperdiet at aliquet non, accumsan nec tellus. Donec vel luctus odio, vitae maximus metus. Proin sit amet urna cursus, ultrices ex eu, bibendum ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae massa risus. Ut rhoncus tortor a pretium iaculis. Nam tincidunt metus ac diam tincidunt rutrum.\"}]',NULL,'2018-09-19 08:27:36');
/*!40000 ALTER TABLE `layouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2018_07_01_175944_create_initiative_table',1),(4,'2018_07_01_175949_create_organisation_table',1),(5,'2018_07_01_175953_create_category_table',1),(6,'2018_07_01_175955_create_condition_table',1),(7,'2018_07_02_162110_add_foreign_keys',1),(8,'2018_07_10_085949_create_initiative_form_table',2),(10,'2018_07_10_090435_create_form_layout_table',4),(16,'2016_06_01_000001_create_oauth_auth_codes_table',5),(17,'2016_06_01_000002_create_oauth_access_tokens_table',5),(18,'2016_06_01_000003_create_oauth_refresh_tokens_table',5),(19,'2016_06_01_000004_create_oauth_clients_table',5),(20,'2016_06_01_000005_create_oauth_personal_access_clients_table',5),(21,'2018_07_10_090435_create_form_layouts_table',5),(22,'2018_07_24_112358_create_form_entries_table',6),(23,'2018_07_24_162110_add_foreign_keys',7),(24,'2018_07_25_162110_add_foreign_keys',8),(25,'2018_08_10_175953_create_categories_table',9),(26,'2018_08_10_175944_create_initiatives_table',10),(27,'2018_08_07_100701_create_category_initiative_table',11),(28,'2018_08_07_100733_create_category_organisation_table',11),(29,'2018_08_25_162110_add_foreign_keys',12),(30,'2018_08_25_162111_add_foreign_keys',13),(31,'2018_08_25_162112_add_foreign_keys',14),(32,'2019_08_07_100701_create_category_entry_table',15);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,3,'2018-09-25 07:25:11','2018-09-25 07:25:11');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organisations`
--

DROP TABLE IF EXISTS `organisations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organisations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organisations`
--

LOCK TABLES `organisations` WRITE;
/*!40000 ALTER TABLE `organisations` DISABLE KEYS */;
INSERT INTO `organisations` VALUES (1,'Microsoft',NULL,NULL),(2,'Samsung',NULL,NULL),(3,'Apple',NULL,NULL),(4,'Nestle',NULL,NULL);
/*!40000 ALTER TABLE `organisations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `organisation` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_organisation_id_foreign` (`organisation`),
  CONSTRAINT `users_organisation_id_foreign` FOREIGN KEY (`organisation`) REFERENCES `organisations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bassie','sebastiaan.bosch@gmail.com','kjkhkjhjhjh',NULL,NULL,NULL,NULL),(2,'onderaf','albert@mlbrgn.nl','$2y$10$bOI1eNqx89NZVoNuRCnz3OYJl8jhMTsJIUv5aMJaFB/sHWnN8yUcu','0Fqx323jztSdXCkipTWltqevk7waVzOZC8ezuMIrYfN25qrVnWYGq0cVFZ1U','2018-09-25 06:51:47','2018-09-25 06:51:47',NULL);
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

-- Dump completed on 2018-09-28 19:43:45
