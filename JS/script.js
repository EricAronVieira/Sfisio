const imageItems = document.querySelectorAll('.image-list li');

imageItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.querySelector('img');
        image.style.display = 'block';
    });
});

function ativarBotao() {
    document.querySelector('.whatsapp-btn-invisivel').style.opacity = 1;
    document.querySelector('.whatsapp-btn-invisivel').style.pointerEvents = 'auto';
}

window.addEventListener('DOMContentLoaded', () => {
    const atendimento = document.querySelector('.atendimento');
    if (atendimento) {
        setTimeout(() => {
            atendimento.style.display = 'none';
        }, 15000); // 15000 milliseconds = 15 seconds
    } else {
        console.log('Elemento .atendimento não encontrado');
    }
});

  function enviarWhatsApp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var servico = document.getElementById("servico").value;
  
    var mensagem = `Nome: ${nome}%0ATelefone: ${telefone}%0AServiço: ${servico}`;
    var numeroEmpresa = "5571992999140";
    var url = `https://wa.me/${numeroEmpresa}?text=${mensagem}`;
    window.open(url, '_blank');
  }