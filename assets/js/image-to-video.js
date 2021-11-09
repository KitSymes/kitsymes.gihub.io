var enabled = true;

function showVideo(obj)
{
	if (!enabled)
		return;
	$obj = $(obj);
    $obj.hide();
	$vid = $obj.siblings('.video');
	$vid.show();
	$vid.find("iframe").attr("src", $obj.attr("data-src"));
}

function hideVideo(obj)
{
	if (!enabled)
		return;
	$obj = $(obj);
    $obj.hide();
	$obj.siblings('.image').show();
}

function onYouTubeIframeAPIReady() {
  $player = new YT.Player('youtube', {
    events: {
      'onReady': function (event) {
        event.target.setVolume(0);
        event.target.playVideo();
      }
    }
  });
}