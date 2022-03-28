var colors=[
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
var quotes=[
  'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
  'The question isn’t who is going to let me; it’s who is going to stop me.',
  'Believe you can and you’re halfway there.',
  'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
  'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
  'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
  'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
  'If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced',
  'You become what you believe.',
  'I attribute my success to this: I never gave or took any excuse.',
  'The best time to plant a tree was 20 years ago. The second best time is now.',
  'If you want your children to turn out well, spend twice as much time with them, and half as much money.'
];
var authors=
[
  'Johann Wolfgang von Goethe',
  'Ayn Rand',
  'Theodore Roosevelt',
  'Anne Frank',
  'Ann Landers',
  'Jesse Owens',
  'Jamie Paolinetti',
  'Vincent Van Gogh',
  'Oprah Winfrey',
  'Florence Nightingale',
  'Chinese Proverb',
  'Abigail Van Buren'
];
var currentQuote='';
var currentAuthor='';

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );
function getRandomQuote(){
  return quotes[Math.floor(Math.random()*quotes.length)];
}
function getQuote(){
  let randomQuote=getRandomQuote();
  currentQuote=randomQuote;
  let i=quotes.indexOf(currentQuote);
  console.log(i);
  currentAuthor=authors[i];
  console.log(currentAuthor,currentQuote);
  $('.quote-text').animate({
    opacity:0
  },500,function(){
    $(this).animate({opacity:1},500);
    $('#text').text(currentQuote);
  });
  $('.quote-author').animate({opacity:0},500,function(){
    $(this).animate({opacity:1},500);
    $('#author').html(currentAuthor);
  });

  var color=Math.floor(Math.random()*colors.length);
  $('html body').animate({
    backgroundColor:colors[color],
    color:colors[color]
  },1000);
  $('.button').animate(
    {
      backgroundColor:colors[color]
    },1000
  );
}
$(document).ready(function(){
  getQuote().then(()=>{
    getQuote();
  });
  $('#new-quote').on('click',getQuote);
});
