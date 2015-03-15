$(document).on 'ready', ->
  $.ajax
    url:"https://www.kimonolabs.com/api/csxv8g5c?apikey=XDGKbsnLM2Bm5B3qU4onU7suhs01X4lh"
    crossDomain: true
    dataType: "jsonp"
    success: (response) ->
      info = response.results.collection1[0]
      $('.total-commits').text('Total Commits this Year: ' + info.total_commits)
      $('.longest-streak').text('Best Streak: ' + info.longest_streak)
      $('.current-streak').text('Current Streak: ' + info.current_streak)
    error: (xhr, status) ->
