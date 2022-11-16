# Type e Interface

### Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

```ts

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data) {
  document.body.innerHTML = `
    <div>
      <h2>${data.name}</h2>
    </div>
  `;
}

```