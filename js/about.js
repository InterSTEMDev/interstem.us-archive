
$(".gallery-slot").hover(function(){
  let id = $(this).attr("id").split("-")[2]
  $("#gallery-text-"+id).show()
}, function(){
  let id = $(this).attr("id").split("-")[2]
  $("#gallery-text-"+id).hide()
})

