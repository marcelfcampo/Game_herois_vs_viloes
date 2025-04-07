function startGame() {
  // Pegamos os nomes dos três heróis que a criança digitou nas caixinhas
  const nomes = [
    document.getElementById("heroi1").value.trim(),
    document.getElementById("heroi2").value.trim(),
    document.getElementById("heroi3").value.trim()
  ];

  // Se algum herói estiver sem nome, mostramos um aviso: "Preencha tudo!"
  if (nomes.some(nome => nome === "")) {
    document.getElementById("resultado").innerHTML =
      "<p>🛑 Por favor, preencha os nomes dos três heróis.</p>";
    return; // Paramos o jogo aqui se estiver faltando algum nome
  }

  // Lista de vilões engraçados e assustadores 😱
  const viloesPossiveis = ["Bafo-de-Onça 🐾", "Repolhudo 🥬", "Cuca 🐊", "Ratão 🐀"];
  let viloesSorteados = [...viloesPossiveis]; // Copiamos a lista pra sortear

  let viloes = [];
  // Vamos escolher 3 vilões diferentes aleatoriamente (tipo sorteio)
  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * viloesSorteados.length);
    viloes.push(viloesSorteados[index]); // Adiciona o vilão sorteado
    viloesSorteados.splice(index, 1); // Tira ele da lista pra não repetir
  }

  let forcaHerois = 0;
  let forcaViloes = 0;

  // Aqui começa a parte legal do jogo: mostrar os heróis e suas forças!
  let detalhes = `<h2>Resultado da Batalha</h2><strong>🦸 Heróis:</strong><ul>`;
  nomes.forEach(nome => {
    let forca = Math.floor(Math.random() * 100) + 1; // Sorteia a força do herói (de 1 a 100!)
    forcaHerois += forca; // Soma a força total dos heróis
    detalhes += `<li>${nome}: ${forca} de força</li>`; // Mostra o nome e a força
  });

  detalhes += `</ul><strong>🦹 Vilões:</strong><ul>`;
  viloes.forEach(nome => {
    let forca = Math.floor(Math.random() * 100) + 1; // Sorteia a força do vilão também
    forcaViloes += forca; // Soma a força dos vilões
    detalhes += `<li>${nome}: ${forca} de força</li>`; // Mostra o nome e a força
  });
  detalhes += `</ul>`;

  // Mostra quem foi mais forte: Heróis ou Vilões?
  detalhes += `<p><strong>💪 Força total dos Heróis:</strong> ${forcaHerois}</p>`;
  detalhes += `<p><strong>🔥 Força total dos Vilões:</strong> ${forcaViloes}</p>`;

  // Agora decidimos quem ganhou a batalha!
  if (forcaHerois > forcaViloes) {
    detalhes += `<h3>🎉 PARABÉNS! Os Heróis venceram!</h3>`;
  } else if (forcaViloes > forcaHerois) {
    detalhes += `<h3>💀 OH NÃO! Os Vilões venceram!</h3>`;
  } else {
    detalhes += `<h3>⚖️ UAU! Deu empate!</h3>`;
  }

  // Finalmente, mostramos o resultado no lugar certo da página
  document.getElementById("resultado").innerHTML = detalhes;
}
