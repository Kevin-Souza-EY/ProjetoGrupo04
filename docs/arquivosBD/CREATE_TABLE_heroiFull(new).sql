USE [herois]
GO

/****** Object:  Table [dbo].[heroiFull]    Script Date: 25/03/2022 11:49:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[heroiFull](
	[Name] [varchar](300) NULL,
	[SuperPowers] [varchar](8000) NULL,
	[Alignment] [varchar](300) NULL,
	[Gender] [varchar](100) NULL,
	[Universo] [varchar](3000) NULL,
	[Intelligence] [int] NULL,
	[Strength] [int] NULL,
	[Speed] [int] NULL,
	[Durability] [int] NULL,
	[Power] [int] NULL,
	[Combat] [int] NULL,
	[Tier] [int] NULL,
	[dt_incl] [varchar](20) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

