USE [herois]
GO

/****** Object:  Table [dbo].[usuario]    Script Date: 25/03/2022 11:48:20 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[usuario](
	[id_user] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](55) NOT NULL,
	[email] [varchar](55) NOT NULL,
	[senha] [varbinary](1000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_user] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

