
  // SideNav Button Initialization
  $(".button-collapse").sideNav();
  // SideNav Scrollbar Initialization
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  Ps.initialize(sideNavScrollbar);

  $(document).ready(function () {
$('.mdb-select').material_select();
});
  $(function () {
$('[data-toggle="tooltip"]').tooltip()
})


 $('.date-picker').pickadate({
 	container:'body',
 	hiddenName:true,
 	formatSubmit:'yyyy-mm-dd'
 });
