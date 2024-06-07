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
  document.getElementById("add").innerHTML =
  '<div onclick="closeHomeScreenPopup()"><span class="plush--sign">+</span><p>Install the webapp on your iPhone:tap <img style="width: 20px; margin: 0 4px;" alt="" src="img/share_icon.png"/> and then Add to homescreen.</p></div>';

  $('.send').css('display', 'none');
  $('.unduh').css('display', 'inline-block');
  $('.unduh').attr('href', hasil);
}

$("#fileInput").change(function() {
  readURL(this);
});


$('.send').bind("click",function() { 
  var imgVal = $('#fileInput').val(); 
  if(imgVal=='') 
  { 
    output.innerHTML = "Tidak ada file gambar yang dipilih, lanjut unduh? ";
  } else {
    output.innerHTML = "Anda berhasil mengunduh! Terima kasih. Jika unduhan tidak dimulai, ";
  }
}); 
