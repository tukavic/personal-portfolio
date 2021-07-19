$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat luke.human<br/>" + 
      "><span class='caret'>$</span> skills: matplotlib, pytorch, NLP, Transformers<br/> ^100" +
      "><span class='caret'>$</span> job: graduate student at <a href='https://www.usfca.edu/arts-sciences/graduate-programs/data-science'>University of San Francisco</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: surfing, running, slo-mo, and timelapsing<br/> ^300" +
      "><span class='caret'>$</span> alias: tukavic <br/>" +
      "><span class='caret'>$</span> highlight:  <a href='http://www.apaperaday.com'>starting a blog 'discovery writing' Deep Learning papers</a><br/>"/*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
