print("Iniciando script de inicialização do MongoDB...");

// Criar a base Hackathon
db = db.getSiblingDB("Hackathon");

// Criar a collection usuario
db.createCollection("usuario");
print("Collection usuario criada!");

db.usuario.insertOne({
    nomeCompleto: "Marcelo Quevedo",
    username: "marceloquevedo",
    password: "$2a$10$yXL7MuYdV6bp8aAQ33U7feew4LUrFdIZ0Topb7xu0pu5jUq6FkhKW",
    _class: "com.br.fiap.postech.ht_autenticador.entity.UsuarioEntity"
});
print("Documento inicial inserido na collection usuario.");

print("Finalizado script de inicialização do MongoDB.");