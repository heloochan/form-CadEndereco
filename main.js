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