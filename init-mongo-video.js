print("Iniciando script de inicialização do MongoDB...");

db = db.getSiblingDB("admin");

if (!db.system.users.findOne({ user: "admin" })) {
    db.createUser({
        user: "admin",
        pwd: "admin",
        roles: [{ role: "root", db: "admin" }]
    });
    print("Usuário admin criado!");
} else {
    print("Usuário admin já existe, pulando criação.");
}

// Criar a base Hackathon
db = db.getSiblingDB("Hackathon");

if (!db.getCollectionNames().includes("video")) {
    db.createCollection("video");
    print("Collection video criada!");
} else {
    print("Collection video já existe, pulando criação.");
}

// Inserir um documento inicial se a collection estiver vazia
if (db.video.countDocuments({}) === 0) {
    db.video.insertOne({
        video: "Teste.avi",
        status: "PENDENTE"
    });
    print("Documento inicial inserido na collection video.");
} else {
    print("Collection video já contém documentos, pulando inserção.");
}

print("Finalizado script de inicialização do MongoDB.");
