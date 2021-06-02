$(document).ready(function () {
  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Animación Nav Smooth
  $("a").click(function (event) {
    event.preventDefault();

    let link = this.hash;
    $("html").animate(
      {
        scrollTop: $(link).offset().top - 20,
      },
      800
    );
  });
});
