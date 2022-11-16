type Empresa = {
  nome: string;
  fundacao: number;
  pais: string;
};


type Products = {
  nome: string;
  preco: number;
  descricao: string;
  garantia: StringConstructor;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
};

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json() as Products;

  showProduct(data);
}

fetchProduct();

function showProduct(data: Products) {
  document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
      </div>
    `;
}
