// 1. Importamos a ferramenta que acabamos de instalar
const axios = require('axios');

console.log("Iniciando a integração com o servidor externo...");

// 2. Usamos o Axios para buscar dados em um endereço real na internet
axios.get('https://viacep.com.br/ws/01001000/json/')
  .then(function (resposta) {
      // 3. Se a integração der certo, mostramos o resultado
      console.log("Sucesso! Os dados recebidos foram:");
      console.log(resposta.data);
  })
  .catch(function (erro) {
      // 4. Se a internet cair ou der erro, o sistema avisa
      console.log("Ops, ocorreu um erro na integração.");
  });