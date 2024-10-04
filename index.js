'use strict'; //Ativa o modo restrito
//Código para consumo de API da ViaCep
//https://viacep.com.br/
 
 
// Limpar consulta do form já realizada
const limparFormulario = () =>{
const cep = document.querySelector('#cep');
const address = document.querySelector('#address');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const message = document.querySelector('#message');
}
 

// Verificar se o CEP é válido
cep.addEventListener('focusout', async () => {
 
    try {
       
    const onlyNumbers = /^[0-9]+$/;
    const cepValid = /^[0-9]{8}$/;
// Verifica o tamanho CEP
    if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
        throw { cep_error: 'Cep invalid' } ;
    }
 
    const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
 
    if(!response.ok) {
        throw await response.json();
    }
// Função para preencher campos relacionados ao CEP
    const responseCep = await response.json();
// Colocar o valor de logradouro de API dentro do campo logradouro do formulário
    address.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade.value = responseCep.localidade;
    uf.value = responseCep.estado;
// Mensagem de erro ao digitar os campos de forma errada
} catch (error) {
    if (error?.cep_error) {
        message.textContent = error.cep_error;
        setTimeout(() => {
            message.textContet = '';
        }, 5000);
    }
    console.log(error);
}
})
