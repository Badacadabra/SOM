$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#logo').click(function () {
    swal({
      title: "SOM ou SOR ?",
      text: "Vous êtes actuellement sur Spirit of Metal. Souhaitez-vous visiter Spirit of Rock ?",
      type: "info",
      showCancelButton: true,
      cancelButtonText: 'Je veux rester ici',
      confirmButtonColor: "#121212",
      confirmButtonText: "Allons sur SOR !",
      closeOnConfirm: false
    });
  });

  $('#logout').click(function () {
    swal({
      title: "Hey!",
      text: "Que voulez-vous faire ?",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: 'Rester ici',
      confirmButtonColor: "#121212",
      confirmButtonText: "Laissez-moi sortir !",
      closeOnConfirm: false
    });
  });
});
