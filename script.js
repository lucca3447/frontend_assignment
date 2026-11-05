const products = [
  { nome: "leite", preco: 10, categoria: "bebida" },
  { nome: "pão", preco: 5, categoria: "alimento" },
  { nome: "café", preco: 15, categoria: "bebida" },
  { nome: "arroz", preco: 8, categoria: "alimento" },
  { nome: "sabão", preco: 100, categoria: "limpeza" },
];

function main(opcao, categoriaescolhida) {
  let valortotal = 0;
  let encontrou = false;
  switch (opcao) {
    case 1:
      for (let i = 0; i < products.length; i++) {
        console.log(
          `Nome: ${products[i].nome} | preco:${products[i].preco} |categoria: ${products[i].categoria}`,
        );
      }
      break;
    case 2:
      for (let i = 0; i < products.length; i++) {
        valortotal += products[i].preco;
      }
      console.log(`Valor total: ${valortotal}`);
      if (valortotal > 100) {
        const desconto = valortotal * 0.1;

        console.log(
          `O valor total é de ${valortotal}, porem voce atingiu a faixa de desconto! Novo total: ${valortotal - desconto}`,
        );
      } else {
        console.log(`O valor total é de ${valortotal}`);
      }
      break;
    case 3:
      console.log(`Lista de produtos com da categoria ${categoriaescolhida}:`);
      for (let i = 0; i < products.length; i++) {
        if (products[i].categoria === categoriaescolhida) {
          console.log(`${products[i].nome}, ${products[i].preco}`);
          encontrou = true;
        }
      }
      if (!encontrou) {
        console.log("Nenhum produto encontrado para essa categoriaa");
      }
      break;
    default:
      console.log("Nenhuma opcao selecionada");
  }
}

main(1);
main(2);
main(3, "alimento");
