function loading() {
  var loading = setTimeout(function() {
      $(function() {
        $(".loadingAnimation").slideUp("slow", "swing");
        $(".loadingAnimation").css('position', 'relative');
        $(".loadingScrean").slideUp("slow", "swing");
        $(".content").css("display", "block");
      });
    },
    10000);
}

$(function() {
  $(window).resize(function() {
    var c = document.getElementById("c1");
    c.height = document.documentElement.clientheight;
    c.width = document.documentElement.clientwidth;
    var ctx = c.getContext("2d")
    ctx.clearRect(0, 0, c.width, c.height);
    drawSNike(ctx);
  })

});

function pickersAirForce1() {
  var numberOfColors = 8;
  $(function() {
    $("#colorMainP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorMainP").spectrum("get").toHexString();
        $(".colorMain").css('fill', color);
      },
    });

    $("#colorSwoshP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorSwoshP").spectrum("get").toHexString();
        $(".colorSwosh").css('fill', color);
      },
    });

    $("#colorFrontPanelP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorFrontPanelP").spectrum("get").toHexString();
        $("#colorFrontPanel").css('fill', color);
      },
    });

    $("#colorBackPanelP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorBackPanelP").spectrum("get").toHexString();
        $(".colorBackPanel").css('fill', color);
      },
    });

    $("#colorTopP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorTopP").spectrum("get").toHexString();
        $(".colorTop").css('fill', color);
      },
    });

    $("#colorMidsoleP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorMidsoleP").spectrum("get").toHexString();
        $(".colorMidsole").css('fill', color);
      },
    });

    $("#colorSoleP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorSoleP").spectrum("get").toHexString();
        $(".colorSole").css('fill', color);
      },
    });

    $("#colorAirP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#colorAirP").spectrum("get").toHexString();
        $(".colorAir").css('fill', color);
      },
    });
  });
}


function pickersMercurialVapor() {
  var numberOfColors = 8;
  $(function() {
    $("#solePlateP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#solePlateP").spectrum("get").toHexString();
        $(".solePlate").css('fill', color);
      },
    });

    $("#studsP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#studsP").spectrum("get").toHexString();
        $(".studs").css('fill', color);
      },
    });

    $("#mainP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#mainP").spectrum("get").toHexString();
        $(".main").css('fill', color);
      },
    });

    $("#mercurialP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#mercurialP").spectrum("get").toHexString();
        $(".mercurial").css('fill', color);
      },
    });

    $("#textureP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#textureP").spectrum("get").toHexString();
        $(".texture").css('stroke', color);
      },
    });

    $("#lacesP").spectrum({
      color: "#fff",
      showPalette: true,
      showSelectionPalette: true,
      palette: [],
      localStorageKey: "spectrum.homepage",
      maxSelectionSize: numberOfColors,
      move: function(tinycolor) {
        var color = $("#lacesP").spectrum("get").toHexString();
        $(".laces").css('fill', color);
      },
    });
  });
}

function drawSNike(ctx) {

  ctx.beginPath();
  var dh = document.documentElement.clientHeight;
  var dw = document.documentElement.clientWidth;
  if (dw <= 1600) {
    ctx.canvas.height = dh - dh * 0.7;
    ctx.canvas.width = dw - dw * 0.7;
    var scale = dw / 3000;
    var x = 110;
  } else if (dw <= 500) {
    ctx.canvas.height = dh - dh * 1;
    ctx.canvas.width = dw - dw * 0.7;
    var scale = dw / 3000;
    var x = 110;
  } else {
    ctx.canvas.height = 300;
    ctx.canvas.width = 500;
    var scale = 0.5;
    var x = 230;
  }
  ctx.scale(scale, scale);
  ctx.moveTo(479 + x, 204);
  ctx.bezierCurveTo(325 + x, 246, 138 + x, 297, 123 + x, 298);
  ctx.bezierCurveTo(78 + x, 301, 53 + x, 266, 81 + x, 212);
  ctx.bezierCurveTo(88 + x, 199, 37 + x, 265, 27 + x, 299);
  ctx.bezierCurveTo(7 + x, 366, 80 + x, 375, 109 + x, 363);
  ctx.bezierCurveTo(225 + x, 316, 416 + x, 231, 479 + x, 204);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
}

function togleShoes() {
  $(function() {
    $('.button').click(function() {
      var id = $(this).attr('id');
      if (id == 'airForce1Button') {
        $('.mercurialVapor').css('display', 'none');
        $('#mercurialVaporButton').css('display', 'block');
        $('.airForce1').css('display', 'block');
        $('#airForce1Button').css('display', 'none');
      } else {
        $('.mercurialVapor').css('display', 'block');
        $('#mercurialVaporButton').css('display', 'none');
        $('.airForce1').css('display', 'none');
        $('#airForce1Button').css('display', 'block');
      }
    });
  });
}

function hoverOverlay() {
  $(function() {
    var color;
    $('.element').hover(function() {
      var id = $(this).attr('id');
      if (id == 'texture') {
        color = $('.' + id).css('stroke');
        $('.' + id).css('stroke', 'rgba(255, 255, 0, 0.50)');
      } else {
        color = $('.' + id).css('fill');
        $('.' + id).css('fill', 'rgba(255, 255, 0, 0.50)');
      }

    }, function() {
      var id = $(this).attr('id');
      if (id == 'texture') {
        $('.' + id).css('stroke', color);
      } else {
        $('.' + id).css('fill', color);
      }
    })



  });
}

function loadingScreanCircle() {
  var i = -1;
  var elements = [".st2", ".st3", ".st8", ".st4", ".st5", ".st6", ".st9", ".st7", ".st10"];
  var colors = ["#C43D95" /*2*/ , "#E91F47" /*3*/ , "#F9A925" /*8*/ , "#EFE914" /*4*/ , "#B6D135" /*5*/ , "#6DC9C4" /*6*/ , "#2088C9" /*9*/ , "#2E4A9B" /*7*/ , "#804D9C" /*10*/ ];
  setInterval(function() {
    $(function() {
      $(elements[i]).css("fill", colors[i]);
    });
    if (i < 9) {
      clearInterval();
    }
    i++;

  }, 1000);
}