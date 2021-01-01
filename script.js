(function() {

  var excuses = {
    'Maths': 
    [
      'Myself from village area, poor kid, no network.',
      'I woke up late, wont happen again, you know.'
    ],
    'Physics': 
    [
      'I was too busy with the assignment that you gave us 2 months back.',
      "I forgot about it, chill its a online sem."
    ],
    'Engineering Drawing': 
    [
      "I dont have a laptop sir, whats the use?", 
      'Sir why do we have a class at 8 in the morning? ',
      "You are just way too fast, I better see the recorded one when you are done \."
    ],
    'English': 
    [
      'I forgot we had any such subject.',
      'Let me in please, you are the best teacher in the entire college, I swear.'
    ],
    'Environmental & Safety': 
    [
      'Someone in WA group texted that we had no class.',
      "Sir I stay in Nepal, not late according to our timeline."
    ],
    'Basic Electrical': 
    [
      'I certainely did not sign up for this, you should be glad that I atleast show up.',
      'I was too busy choosing between Anarchy and Democracy',
      'I m not in EE , how will mugging this up help anyway, I m out!'
    ],
    'Basic Electronic': 
    [
      'I was reading for the quiz saar.',
      'Im not going to come in anymore. I just got an email saying I could claim a portion of 100 million dollars from some prince in Africa.'
    ]

  };

  var timepicker = $('#subject');
  var times = _.keys(excuses);

  _.each(times, function(time) {
    timepicker.append('<option value="' + time + '">' + time + '</option>');
  });

$( "#subject" ).on('change', function() {
  var timePicked = $(this).val();
  var excusesForTime = excuses[timePicked];
  var excuse = _.sample(excusesForTime);
  $('#excuse-text').text(excuse);
});


})();