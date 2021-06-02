$(document).ready(function () {
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
