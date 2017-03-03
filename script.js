$("button").on("click", () => {
  let url = "http://api.wunderground.com/api/91a02357a7011de7/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: url,
    type: "get",
    dataType:"json"
  }).done((response) => {
    console.log(response)
  }).fail(() => {
    console.log("Ajax request fails")
  }).always(() => {
    console.log("This always happens regardless")
  })
})
