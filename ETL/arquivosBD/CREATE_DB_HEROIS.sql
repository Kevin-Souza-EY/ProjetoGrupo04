USE [master]
GO

/****** Object:  Database [herois]    Script Date: 25/03/2022 07:30:27 ******/
CREATE DATABASE [herois]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'herois', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\herois.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'herois_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\herois_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [herois].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [herois] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [herois] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [herois] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [herois] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [herois] SET ARITHABORT OFF 
GO

ALTER DATABASE [herois] SET AUTO_CLOSE ON 
GO

ALTER DATABASE [herois] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [herois] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [herois] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [herois] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [herois] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [herois] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [herois] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [herois] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [herois] SET  ENABLE_BROKER 
GO

ALTER DATABASE [herois] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [herois] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [herois] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [herois] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [herois] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [herois] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [herois] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [herois] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [herois] SET  MULTI_USER 
GO

ALTER DATABASE [herois] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [herois] SET DB_CHAINING OFF 
GO

ALTER DATABASE [herois] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [herois] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [herois] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [herois] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [herois] SET QUERY_STORE = OFF
GO

ALTER DATABASE [herois] SET  READ_WRITE 
GO

