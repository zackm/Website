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

  L.mapbox.accessToken = 'pk.eyJ1IjoiemFja20iLCJhIjoiSzJfVGRMNCJ9.3NTsisPNxbD_qT3qdjNxIw'
  opts =
    legendControl: false
    zoomControl: false
    attributionControl: 
      compact: true
    featureLayer: false
    gridLayer: false
  map = L.mapbox.map('home-map', 'zackm.191cfed2', opts)#.setView([-122.1743,37.8888], 15)
  map.dragging.disable()
  map.touchZoom.disable()
  map.doubleClickZoom.disable()
  map.scrollWheelZoom.disable()
  map.tap.disable() if map.tap
