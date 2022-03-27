USE [herois]
GO

/****** Object:  Table [dbo].[heroiTemp]    Script Date: 25/03/2022 11:49:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[heroiTemp](
	[Name] [varchar](300) NULL,
	[SuperPowers] [varchar](8000) NULL,
	[Alignment] [varchar](10) NULL,
	[Gender] [varchar](10) NULL,
	[dt_incl] [varchar](15) NULL,
	[id] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

