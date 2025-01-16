// Função para formatar valores em reais
function formatarEmReais(valor) {
  return 'R$ ' + valor.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Função para calcular impostos
function calcularImpostos() {
  // Obter os valores do formulário
  var material = parseFloat(document.getElementById('material').value.replace('R$','').replace(/\./g, '').replace(",",".")) ||0;
  var maoDeObra = parseFloat(document.getElementById('maoDeObra').value.replace('R$','').replace(/\./g, '').replace(',','.')) ||0;
  var bdi = parseFloat(document.getElementById('bdi').value.replace('R$','').replace(/\./g, '').replace(',','.')) ||0;
  var deducao = parseFloat(document.getElementById('deducao').value.replace('R$','').replace(/\./g, '').replace(',','.')) ||0; 
  var issqn = parseFloat(document.getElementById('issqn').value.replace(',', '.'));
  var inss = parseFloat(document.getElementById('inss').value.replace(',', '.'));
  document.getElementById('material').value = formatarEmReais(material);
  document.getElementById('maoDeObra').value = formatarEmReais(maoDeObra);
  document.getElementById('bdi').value = formatarEmReais(bdi);
  document.getElementById('deducao').value = formatarEmReais(deducao);
 // ajuste()
  // Calcular o total (Material + Mão de Obra + BDI)
  var total = material + maoDeObra + bdi;

  // Exibir o resultado no campo Total
  document.getElementById('total').value = formatarEmReais(total);

  // Calcular impostos
  var pis = total * 0.0065;
  var cofins = total * 0.03;
  var ir = total * 0.012;
  var csll = total * 0.01;
  var ins;
  if (inss === 0.035) {
      ins = total * inss;
  } else {
      ins = (total - material) * inss;
  }

  var issqnCalculado = (total - deducao) * issqn;

  // Exibir os resultados na tabela
  document.getElementById('resultadoTabela').innerHTML =
      `<tr>
      <td>${formatarEmReais(pis)}</td>
      <td>${formatarEmReais(cofins)}</td>
      <td>${formatarEmReais(ir)}</td>
      <td>${formatarEmReais(csll)}</td>
      <td>${formatarEmReais(ins)}</td>
      <td>${formatarEmReais(issqnCalculado)}</td>
    </tr>`;

  // Calcular valor líquido
  var valorLiquido = total - (pis + cofins + ir + csll + ins + issqnCalculado);

  // Exibir o resultado no campo Valor Líquido
  document.getElementById('valorLiquido').value = formatarEmReais(valorLiquido);
}

// Função para limpar os campos do formulário
function limparCampos() {
  document.getElementById('material').value = '';
  document.getElementById('maoDeObra').value = '';
  document.getElementById('bdi').value = '';
  document.getElementById('deducao').value = '';
  document.getElementById('issqn').value = '2';
  document.getElementById('inss').value = '';
  document.getElementById('total').value = '';
  document.getElementById('valorLiquido').value = '';
  document.getElementById('resultadoTabela').innerHTML = '';
  
}

function ajuste() {
  // Obtém o valor do campo
  let valor = parseFloat( document.getElementById('maoDeObra').value.replace('.', ''));
  let valor1 = parseFloat( document.getElementById('material').value.replace('.', ''));
  let valor2 = parseFloat( document.getElementById('bdi').value.replace('.', ''));
  valor1.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  alert("oi")
  

  // Verifica se o valor é um número válido
 /* if (!= isNaN(valor,valor1,valor2)) {
      // Formata o valor para o formato 0,00
      document.getElementById('maoDeObra').value = valor.toFixed(2).replace('.', ',');
      document.getElementById('material').value = valor1.toFixed(2).replace('.', ',');
      document.getElementById('bdi').value = valor2.toFixed(2).replace('.', ',');
      alert('ativado')
  }*/
};
