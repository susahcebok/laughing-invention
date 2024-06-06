function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#preview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function drawImage() {

  var twibbon = new Image();
  var picture = new Image();
  var twibbon = document.getElementById('twibbon');
  var picture = document.getElementById('preview');
  var canvas = document.getElementById('cvs');
  var context = canvas.getContext('2d');

  canvas.width = 1024;
  canvas.height = 1024;
  context.drawImage(picture, 0, 0, canvas.width, canvas.height);
  context.drawImage(twibbon, 0, 0, canvas.width, canvas.height);

  var hasil = canvas.toDataURL("image/png");
  document.getElementById('preview').src = hasil;

  console.log("Drew!");

  $('.submit').css('display', 'none');
  $('.unduh').css('display', 'inline-block');
  $('.unduh').attr('href', hasil);
}

$("#fileInput").change(function() {
  readURL(this);
$('#value').text(this.value.replace(/C:\\fakepath\\/i, ''));
});

$('.submit').bind("click",function() { 
  var imgVal = $('#fileInput').val(); 
  if(imgVal=='') 
  { 
    output.innerHTML = "Tidak ada file gambar yang dipilih, lanjut unduh? ";
  } else {
    output.innerHTML = "Anda berhasil mengunduh! Terima kasih. Jika unduhan tidak dimulai, ";
  }
}); 

var win = window.open('', '_blank');
    win.document.write('<img style="box-shadow: 0 0 1em 0 dimgrey;" src="' + img + '"/>');
    win.document.write('<h1 style="font-family: Helvetica; font-weight: 300">Right Click > Save As<h1>');
    win.document.body.style.padding = '1em';
};
