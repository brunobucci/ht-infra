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

if (!db.getCollectionNames().includes("usuario")) {
    db.createCollection("usuario");
    print("Collection usuario criada!");
} else {
    print("Collection usuario já existe, pulando criação.");
}

// Inserir um documento inicial se a collection estiver vazia
if (db.usuario.countDocuments({}) === 0) {
    db.usuario.insertOne({
        nome: "Usuário Teste",
        email: "teste@email.com",
        idade: 30
    });
    print("Documento inicial inserido na collection usuario.");
} else {
    print("Collection usuario já contém documentos, pulando inserção.");
}

print("Finalizado script de inicialização do MongoDB.");
