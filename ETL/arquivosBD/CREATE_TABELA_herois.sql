USE [herois]
GO

/****** Object:  Table [dbo].[herois]    Script Date: 25/03/2022 07:34:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[herois](
	[id_heroi] [int] IDENTITY(1,1) NOT NULL,
	[nome] [varchar](55) NOT NULL,
	[inteligencia] [int] NULL,
	[forca] [int] NULL,
	[velocidade] [int] NULL,
	[resistencia] [int] NULL,
	[poder] [int] NULL,
	[combate] [int] NULL,
	[nivel] [int] NULL,
	[lado] [varchar](3) NULL,
	[genero] [varchar](10) NULL,
	[id_universo] [int] NOT NULL,
	[id_poderes] [int] NOT NULL,
	[data_cadastro] [timestamp] NOT NULL,
	[id_user] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_heroi] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[herois]  WITH CHECK ADD FOREIGN KEY([id_poderes])
REFERENCES [dbo].[poderes] ([id_poderes])
GO

ALTER TABLE [dbo].[herois]  WITH CHECK ADD FOREIGN KEY([id_universo])
REFERENCES [dbo].[universo] ([id_universo])
GO

ALTER TABLE [dbo].[herois]  WITH CHECK ADD FOREIGN KEY([id_user])
REFERENCES [dbo].[usuario] ([id_user])
GO

