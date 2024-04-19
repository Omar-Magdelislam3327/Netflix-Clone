function addBoxShadow(clickedDiv) {
  var card = document.querySelectorAll('.cardew');

  card.forEach(function (div) {
      div.style.boxShadow = 'none';
  });

  clickedDiv.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
  console.log("Adding Box Shadow");
}
