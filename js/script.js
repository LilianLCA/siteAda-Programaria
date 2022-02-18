document.getElementById("botaoEnviar").addEventListener("click",ValidacaoDoFormulario)


function ValidacaoDoFormulario (){
if (document.getElementById ("nome").value != "" && document.getElementById ("email").value != "" && document.getElementById ("telefone").value != "")
  {
    alert("Prontinho! Voce recebera as novidades por e-mail.")
}
  else{
    alert("Por favor, preencha os campos de nome e e-mail para receber as novidades!")
  }
}