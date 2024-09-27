'use strict'; // Ativa o modo restrito
// Código para cosumo de API da ViaCEP
// https://viacep.com.br/


// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('rua').value ='';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value ='';
    document.getElementById('estado').value ='';
}


// Verificar se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

// Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    //Colocar o valor de logradouro da API dentro do campo logradouro do formulário
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}


//Função para consumo de APIViaCEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}

// Executa a ação de preenchimento do formulario ao deixar o campo do CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);