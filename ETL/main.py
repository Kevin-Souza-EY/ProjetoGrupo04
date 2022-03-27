#Bibliotecas
from fileinput import filename
from datetime import date
import pyodbc
import os
import pandas as pd

#Variaveis Globais
today = date.today()
pathUnData = "Files\\DadosBrutos"
pathTrData = "Files\\DadosTratados"
countUnData = 0

#Limpeza da pasta de dados tratados
for the_file in os.listdir(pathTrData):
    file_path=os.path.join(pathTrData,the_file)
    try:
        if os.path.isfile(file_path):
            os.unlink(file_path)
    except Exception as e: 
        print(e)

#Validação e acesso a dados brutos
for the_file in os.listdir(pathUnData):
    file_path=os.path.join(pathUnData,the_file)
    countUnData = countUnData +1

#Verificação de numero de arquivos
if countUnData != 3:
    print("Menos arquivos que o necessários")
    exit()
    
filesArray = os.listdir(pathUnData)

conn = pyodbc.connect('Driver={SQL Server};'
                    'Server=HIGORPC\SQLEXPRESS;'
                    'Database=herois;'
                    'Trusted_Connection=yes')


for x in range(0,len(filesArray)):
    cursor = conn.cursor()
    fileName = filesArray[x]
    fileName = fileName.replace('.csv','')
    frame = pd.read_csv(str(pathUnData)+ "\\" +str(filesArray[x]))
    frame = frame.fillna("-")
    frame = frame.replace(to_replace="Null",value="-")
    frame = frame.drop_duplicates()
    frame.to_excel(str(pathTrData)+"\\" + str(today) + "-" + str(fileName)+".xlsx",index = False)
    if fileName == "universo":
        for index,row in frame.iterrows():
            cursor.execute("INSERT INTO universo (Name,universo, dt_incl) VALUES(?,?,?)",row.Name,row.Universo,str(today))
    elif fileName == "heroi":
        for index,row in frame.iterrows():
            cursor.execute("INSERT INTO heroiTemp (Name,SuperPowers,Alignment,Gender,dt_incl) VALUES(?,?,?,?,?)",row.Name,row.SuperPowers,row.Alignment,row.Gender,str(today))
    elif fileName == "poder":
        for index,row in frame.iterrows():
            cursor.execute("INSERT INTO poderTemp (Name,Intelligence,Strength,Speed,Durability,Power,Combat,Tier,dt_incl) VALUES(?,?,?,?,?,?,?,?,?)",row.Name,row.Intelligence,row.Strength,row.Speed,row.Durability,row.Power,row.Combat,row.Tier,str(today))       
    conn.commit()
    cursor.close()

cursor = conn.cursor()
cursor.execute("INSERT INTO heroiFull (Name,SuperPowers,Alignment,Gender,Universo,Intelligence,Strength,Speed,Durability,Power,Combat,Tier,dt_incl) SELECT hr.Name AS Name, hr.SuperPowers AS SuperPowers,hr.Alignment AS Alignment, hr.Gender AS Gender, un.universo AS Universo, pr.Intelligence AS Intelligence, pr.Strength AS Strength, pr.Speed AS Speed, pr.Durability AS Durability,pr.Power AS Power, pr.Combat AS Combat,pr.Tier AS Tier, hr.dt_incl AS dt_incl FROM heroiTemp AS hr LEFT JOIN universo AS un ON hr.Name = un.Name LEFT JOIN poderTemp AS pr ON hr.Name = pr.Name")
conn.commit()
cursor.close()



    
