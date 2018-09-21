function loadTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const lastUpdated = 'Last Updated at ' + hours + ':' + minutes;
  $('#time').text(lastUpdated);
}

loadTime();

const API_URL = 'http://www.colourlovers.com/api/palettes/new?format=json';

jQuery.ajax(
    API_URL,
    {
      success: createPalettes,
    },
);

function createPalettes(response) {
  for (let i = 0; i < response.length; i++) {
    createPalette(response[i]);
  }
}

function createPalette(pallet) {

  //container section
  const $container = $('<div></div>');
  $('#palettes').append($container);

  //title section
  const $title = $('<h3 class="title">' + pallet.title + '</h3>');
  $container.append($title);

  //subtitle section
  const paletteDate = new Date(pallet.dateCreated);
  const paletteTime = paletteDate.toTimeString().substr(0,5);
  const subtitle = 'by ' + pallet.userName + ' at ' + paletteTime;
  const $subtitle = $('<p>' + subtitle + '</p>');
  $container.append($subtitle);

  //popularity section
  const popularity = pallet.numViews + ' views ' + pallet.numVotes + ' votes';
  const $popularity = $('<p><span class="popularity">' + popularity + '</span></p>');
  $container.append($popularity);

  //palette colours image section
  const $paletteColoursImg = $('<img src="' + pallet.imageUrl + '"/>');
  $container.append($paletteColoursImg);
}
