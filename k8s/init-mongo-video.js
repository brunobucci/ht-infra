print("Iniciando script de inicialização do MongoDB...");

// Criar a base Hackathon
db = db.getSiblingDB("Hackathon");

// Criar a collection video
db.createCollection("video");
print("Collection video criada!");

print("Finalizado script de inicialização do MongoDB.");