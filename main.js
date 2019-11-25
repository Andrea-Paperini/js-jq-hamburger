$(".header-right > a").click(function(){
  $(".hamburger-menu").addClass("active");
})
// Seleziono per la classe del hamburger menu la classe active che contiene il display block all'interno della media query per visualizzarlo in automatico solo in versione mobile sul click dell'utente

$(".hamburger-menu > a").click(function(){
  $(".hamburger-menu ").removeClass("active");
})
// Rimuovo la classe che mantiene la visualizzazione su click dell'utente
