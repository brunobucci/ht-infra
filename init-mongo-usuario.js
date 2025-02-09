print("Iniciando script de inicialização do MongoDB...");

// Criar a base Hackathon
db = db.getSiblingDB("Hackathon");

db.createCollection("usuario");
print("Collection usuario criada!");

db.usuario.insertOne({
    nome: "Usuário Teste",
    email: "teste@email.com",
    idade: 30
});
print("Documento inicial inserido na collection usuario.");

print("Finalizado script de inicialização do MongoDB.");