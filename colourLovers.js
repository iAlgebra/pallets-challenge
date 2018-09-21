const API_URL = 'http://www.colourlovers.com/api/palettes/new?format=json';

jQuery.ajax(
    API_URL,
    {
      success: function(response) {
        console.log(response);
      }
    }
);
