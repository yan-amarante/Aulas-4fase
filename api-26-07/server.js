const http = require("http");
const host = "localhost";
const port = 3000;

const partidas = [
    { id: 1, partida: "Grêmio X Inter" },
    { id: 2, partida: "Flamengo X Vasco" },
    { id: 3, partida: "Inter X Avaí" },
    { id: 4, partida: "Flamengo X Grêmio" },
    { id: 5, partida: "Real Madrid X Grêmio" },
    { id: 6, partida: "Barcelona X Real Madrid" },
];

const requestListenter = function (req, res) {
    res.setHeader("Conttent-Type", "application/json");

    switch (req.url) {

        case "/partidas":
            res.writeHead(200);
            res.end(JSON.stringify(partidas));
            break;

        case "/gremio":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Grêmio")) {
                    return objeto
                }
            })));
            break;
        case "/inter":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Inter")) {
                    return objeto
                }
            })));
            break;
        case "/flamengo":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Flamengo")) {
                    return objeto
                }
            })));
            break;
        case "/vasco":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Vasco")) {
                    return objeto
                }
            })));
            break;
        case "/avai":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Avaí")) {
                    return objeto
                }
            })));
            break;
        case "/realMadrid":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Real Madrid")) {
                    return objeto
                }
            })));
            break;
        case "/barcelona":
            res.writeHead(200);
            res.end(JSON.stringify(partidas.filter(objeto => {
                if (objeto.partida.includes("Barcelona")) {
                    return objeto
                }
            })));
            break;
        default:
            res.writeHead(200);
            res.end("nada encontrado")
    }
};

const server = http.createServer(requestListenter);

server.listen(port, host, () => {
    console.log("Server disponível");
});