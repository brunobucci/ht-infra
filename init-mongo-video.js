print("Iniciando script de inicialização do MongoDB...");

// Criar a base Hackathon
db = db.getSiblingDB("Hackathon");

db.createCollection("video");
print("Collection video criada!");

db.video.insertOne({
    nome: "video.avi",
    status: "Pendente"
});
print("Documento inicial inserido na collection video.");

print("Finalizado script de inicialização do MongoDB.");