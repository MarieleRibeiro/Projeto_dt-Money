import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = "api"; // todas as chamadas api que eu vou fazer vão estar a partir desse endereço "api", ele vai captar todas as chamadas que tenha /api como chamadas que eu quero direcionar para o miragejs

    //para cada uma das rotas eu faço
    this.get("/transactions", () => {
      // quando houver uma requisição do tipo get(requisição de busca/ listagem) pata tal rota eu vou retornar alguma coisa
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
