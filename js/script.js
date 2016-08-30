$(function(){
$('#project1').hover(
  function(){
    $('#project1__infos').css('display', 'none');
    $('#project1').css('background-image', 'url("")');
    $('#project1').css('backgroundColor', '#f5a623');
    $('#project1').css('display', 'flex').css('align-items', 'center').css('justify-content', 'space-around');
    $('#project1').append('<div class=project__link><a class="a__link">voir le site </a><a class="a__link">voir le code sur github</a></div>');
  },
  function(){
    $('#project1__infos').css('display', 'block');
      $('#project1').css('background-image', 'url("images/hcc.png")');
      $('.project__link').css('display', 'none');
  }
);
$('#project2').hover(
  function(){
    $('#project2__infos').css('display', 'none');
    $('#project2').css('background-image', 'url("")');
    $('#project2').css('backgroundColor', '#f5a623');
    $('#project2').css('display', 'flex').css('align-items', 'center').css('justify-content', 'space-around');
    $('#project2').append('<div class=project__link><a class="a__link">voir le site </a><a class="a__link">voir le code sur github</a></div>');
  },
  function(){
    $('#project2__infos').css('display', 'block');
      $('#project2').css('background-image', 'url("images/sdpis.png")');
      $('.project__link').css('display', 'none');
  }
);
$('#project3').hover(
  function(){
    $('#project3__infos').css('display', 'none');
    $('#project3').css('background-image', 'url("")');
    $('#project3').css('backgroundColor', '#f5a623');
    $('#project3').css('display', 'flex').css('align-items', 'center').css('justify-content', 'space-around');
    $('#project3').append('<div class=project__link><a class="a__link">voir le site </a><a class="a__link">voir le code sur github</a></div>');
  },
  function(){
    $('#project3__infos').css('display', 'block');
      $('#project3').css('background-image', 'url("images/confusio.png")');
      $('.project__link').css('display', 'none');
  }
);
$('#project4').hover(
  function(){
    $('#project4__infos').css('display', 'none');
    $('#project4').css('background-image', 'url("")');
    $('#project4').css('backgroundColor', '#f5a623');
    $('#project4').css('display', 'flex').css('align-items', 'center').css('justify-content', 'space-around');
    $('#project4').append('<div class=project__link><a class="a__link">voir le site </a><a class="a__link">voir le code sur github</a></div>');
  },
  function(){
    $('#project4__infos').css('display', 'block');
      $('#project4').css('background-image', 'url("images/makupbistro.png")');
      $('.project__link').css('display', 'none');
  }
);
$('#project5').hover(
  function(){
    $('#project5__infos').css('display', 'none');
    $('#project5').css('background-image', 'url("")');
    $('#project5').css('backgroundColor', '#f5a623');
    $('#project5').css('display', 'flex').css('align-items', 'center').css('justify-content', 'space-around');
    $('#project5').append('<div class=project__link><a class="a__link">voir le site </a><a class="a__link">voir le code sur github</a></div>');
  },
  function(){
    $('#project5__infos').css('display', 'block');
      $('#project5').css('background-image', 'url("images/confusio.png")');
      $('.project__link').css('display', 'none');
  }
);
});

$(function(){
  var menu = $('#menu');
  var main = $('main');
  var drawer = $('.nav');
  menu.click(function(e){
    drawer.toggle('open');
    e.stopPropagation();
  })
});
