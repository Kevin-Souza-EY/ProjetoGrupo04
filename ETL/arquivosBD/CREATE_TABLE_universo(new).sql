USE [herois]
GO

/****** Object:  Table [dbo].[universo]    Script Date: 25/03/2022 11:47:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[universo](
	[id_universo] [int] IDENTITY(1,1) NOT NULL,
	[universo] [varchar](3000) NULL,
	[dt_incl] [varchar](15) NULL,
	[Name] [varchar](3000) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_universo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

