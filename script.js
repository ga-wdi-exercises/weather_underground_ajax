$(document).ready(() => {
  $("button").on("click", () => {
    let url = "http://api.wunderground.com/api/f28a93cae85945b6/conditions/q/CA/San_Francisco.json"
    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      console.log(response.current_observation.temp_f)
      let div =   $(`<div>${response.current_observation.temp_f}</div>`)
      $("body").append(div)
    }).fail(() => {
      console.log("ajax request fails")
    }).always(() => {
      console.log(" this always happens regardless of sucess or failure")
    })
  })
})
