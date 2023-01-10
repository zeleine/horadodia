function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var dia = new Date();
  var hora = dia.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.svg'
    document.body.style.background = '#FBE58E'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.svg'
    document.body.style.background = '#BD5610'
  } else {
    img.src = 'fotonoite.svg'
    document.body.style.background = '#101A22'
  }
}
