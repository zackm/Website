$(document).on 'ready', ->
  $('.work-nav-item[data-work-name]').click (e) ->
    console.log e
    name = $(e.currentTarget).data('work-name')
    item = $(".work-display-item[data-work-item=#{name}")
    $('.work-display-item').hide()
    item.show()
