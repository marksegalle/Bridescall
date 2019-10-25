(function () {
  jQuery(function () {
    this.film_rolls || (this.film_rolls = []);
    this.film_rolls['film_roll_1'] = new FilmRoll({
      container: '#film_roll_1',
      scroll: false,
      pager: false,
      start_index: 8,
      next: '#film_roll_1_right',
      prev: '#film_roll_1_left'
    });
    return true;
  });

}).call(this);

$(document).ready(function () {
  $(".days > li").each(function () {
    $(this).click(function () {
      $(".days > li").css('font-weight', 'normal');
      $(".days > li").css('color', '#777');
      $(this).css('font-weight', 'bold');
      $(this).css('color', '#a12b2c');
    });
  });
});

