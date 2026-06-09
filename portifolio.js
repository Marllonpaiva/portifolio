var icone = document.createElement('i');
icone.className = 'fa-solid fa-moon fa-lg';
icone.style.color = '#8257E6';
icone.id = 'icone'
document.getElementById('container-icone').appendChild(icone);

var botao = document.getElementById('container-icone')

botao.onclick = function Alternartema() {



	var textos = document.querySelectorAll('.texte');
	var btnContato = document.querySelector('.btn-dois');
	var boasVindas = document.querySelector('.boas-vindas');
	var caixa = document.querySelector('.navbar-collapse')

	if (icone.classList.contains('fa-moon')) {
		icone.classList.replace('fa-moon', 'fa-sun')
		document.body.style.backgroundColor = '#F9F9F9'
		icone.style.color = '#FFF'
	    
		if (boasVindas) boasVindas.style.setProperty('color', 'white' );
		if (caixa) caixa.style.setProperty('background', 'rgba(255, 255, 255, 2)', 'important'); /*mudar no do maykon(0.5)*/
		//textos.forEach(function(item) {
           // item.style.setProperty('color', 'black', 'important');
        //});

		btnContato.style.backgroundColor = 'white';
        btnContato.querySelector('a').style.color = 'black';

        

	    textos.forEach(function(item) {
            item.style.color = "black";

        });

	} else{
		icone.classList.replace('fa-sun', 'fa-moon')
		document.body.style.backgroundColor = '#212529'
		icone.style.color = '#8257E6'
		
		btnContato.style.backgroundColor = '#212529';
        btnContato.querySelector('a').style.color = 'white';
        if (boasVindas) boasVindas.style.setProperty('color', '#8257E6');
       if (caixa) caixa.style.setProperty('background', 'rgba(0, 0, 0, 0.5)', 'important');

        //textos.forEach(function(item) {
           // item.style.setProperty('color', 'white', 'important');
        //});
       



		 textos.forEach(function(item) {
            item.style.color = "white";
        });

	}

	} 



	


	const textoTitulo = "Olá, eu sou"
	const nomeDestaque = "Marllon Paiva"
	const textoSubtitulo = "Desenvolvedor Full-Stack | JavaScript | HTML | CSS | React.js | Python | Bootstrap | PHP | Git | GitHub | Banco de dados(MySQL, SQL)"


	const elementoTitulo = document.getElementById("titulo")
	const elementoSubtitulo = document.getElementById("subtitulo")

	let i = 0
	let n = 0
	let j = 0 

	function digitar(){

		if (i < textoTitulo.length) {

			elementoTitulo.innerHTML += textoTitulo.charAt(i);
			i++;
			setTimeout(digitar, 75);

		} 
		else if (n < nomeDestaque.length) {

			if (n === 0) {
				elementoTitulo.innerHTML += "<br><span class= 'nome-roxo'> </span>"
			}
				document.querySelector(".nome-roxo").innerHTML += nomeDestaque.charAt(n)
				n++
				setTimeout(digitar, 75) } 

			else if (j < textoSubtitulo.length) {
				elementoSubtitulo.innerHTML += textoSubtitulo.charAt(j);
				j++;
				setTimeout(digitar, 40); }
	
}

	window.onload = function(){

		digitar();
	}

/*var containerFoto = document.getElementById('foto');*/

var perfil = document.createElement('img');
perfil.src ='img/perfil1.jpeg';
perfil.alt = "Perfil de Marllon Paiva | Desenvolvedor Web"
perfil.className = 'img-fluid perfil'
perfil.id = 'perfil'

perfil.style.borderRadius = '50%'
perfil.style.marginLeft ='100px'

perfil.style.top = '150px'
perfil.style.position = 'absolute'
perfil.style.objectFit = 'cover';

//perfil.style.background = 'linear-gradient(90deg, rgba(130, 87, 230, 0.8) 0%, rgba(121, 48, 190, 0.648) 100%)';
perfil.style.backgroundImage = 'linear-gradient(#F9F9F9, #F9F9F9), linear-gradient(90deg, rgba(121, 48, 190, 0.648) 0%, rgba(121, 48, 190, 0.648) 100%)';


//perfil.style.border = '10px solid #8257E6'; 
perfil.style.border = '10px solid transparent';
perfil.style.width = '350px'
perfil.style.height = '350px';


perfil.style.backgroundOrigin = 'border-box';
perfil.style.backgroundClip = 'padding-box, border-box';
 


document.getElementById('foto').appendChild(perfil);

var apertar = document.getElementsByClassName('projeto-container')
apertar.onclick() = function projetor(){

	if(apertar.onclick()){

	} 
	
}



function abrirDetalhes(titulo, descricao, videoUrl, linkProjeto, linkRepo) {
    // Referencia o modal do Bootstrap
    const meuModal = new bootstrap.Modal(document.getElementById('projetoModal'));
    
    // Preenche os dados
    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDescription').innerHTML = descricao;
    //document.getElementById('modalImg').src = imagem;
    const videoComponent = document.getElementById('modalVideo');
    videoComponent.src = videoUrl
    videoComponent.load();
    videoComponent.play().catch(e => console.log("Autoplay ativado"));

    // Lógica do Link do Projeto hospedado (Vercel)
    const btnLinkProjeto = document.getElementById('linkProjeto');
    if (linkProjeto) {
        btnLinkProjeto.href = linkProjeto;
        btnLinkProjeto.style.display = "inline-block"; // Garante que o botão apareça

    } else {
        btnLinkProjeto.style.display = "none"; // Esconde o botão se o projeto não tiver link web
    }

    const btnLinkRepo = document.getElementById('linkRepo');
    if (linkRepo) {
    	btnLinkRepo.href = linkRepo;
    	btnLinkRepo.style.display = "inline-block";
    } else {
    	btnLinkRepo.style.display = "none";
    }

    // Abre o modal
    meuModal.show();

}

// Pausa o vídeo automaticamente quando o modal for fechado
const meuModalElemento = document.getElementById('projetoModal');
meuModalElemento.addEventListener('hidden.bs.modal', function () {
    const videoComponent = document.getElementById('modalVideo');
    if (videoComponent) {
        videoComponent.pause();
        videoComponent.src = ""; // Limpa o src para economizar memória do navegador
    }
});

 































// ==================== MENU MOBILE - FECHAR + SCROLL SUAVE (MELHOR UX) ====================

/*if (icone.classList.contains('fa-moon')) {
		icone.classList.remove('fa-moon');
		icone.classList.add('fa-sun');

		document.body.style.backgroundColor = '#f8f9fa';
		document.body.style.color '#212529';

	} else{
		icone.classList.remove('fa-sun')
		icone.classList.add('fa-moon')

		document.body.style.backgroundColor = '#212529';
		document.body.style.color '#fff';
	}*/