function init()
{
	var a = document.anchors["post"];

	if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) ||
		navigator.userAgent.indexOf('iPod') > 0 ||
		navigator.userAgent.indexOf('Android') > 0 )
	{
		a.href = "./post_s.html";
	}
	else
	{
		a.href = "./post.html";
	}
}
