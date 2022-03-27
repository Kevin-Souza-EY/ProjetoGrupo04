USE [herois]
GO

/****** Object:  Table [dbo].[poderTemp]    Script Date: 25/03/2022 11:48:47 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[poderTemp](
	[Name] [varchar](300) NULL,
	[Intelligence] [int] NULL,
	[Strength] [int] NULL,
	[Speed] [int] NULL,
	[Durability] [int] NULL,
	[Power] [int] NULL,
	[Combat] [int] NULL,
	[Tier] [int] NULL,
	[dt_incl] [varchar](15) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

