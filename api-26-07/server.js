const http = require("http");
const host = "localhost";
const port = 3000;

const partidas = [
    { id: 1, partida: "gremio X inter" },
    { id: 2, partida: "flamengo X vasco" },
    { id: 3, partida: "inter X avai" },
    { id: 4, partida: "flamengo X gremio" },
    { id: 5, partida: "realMadrid X gremio" },
    { id: 6, partida: "barcelona X realMadrid" },
];

const requestListenter = function (request, response) {
    response.setHeader("Content-Type", "application/json");
    const url = decodeURI(request.url);

    switch (request.url) {

        case "/partidas":
            response.writeHead(200);
            response.end(JSON.stringify(partidas));
            break;

        case url:
            const nomeDoTime = url.replace("/", "");
            const partidaDoTime = partidas.filter(objeto => {
                if (objeto.partida.includes(nomeDoTime)) {
                    return objeto
                }
            })
            response.writeHead(200);
            response.end(JSON.stringify(partidaDoTime));
            break;
        default:
            response.writeHead(200);
            response.end("nada encontrado")
    }
};

const server = http.createServer(requestListenter);

server.listen(port, host, () => {
    console.log("Server disponível");
});