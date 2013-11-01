
//---------------------------------------------------------------------------//

function init()
{
	try
	{
		var element = null;

		/*if
		( (isAgentContain('iPhone') && !isAgentContain('iPad')) ||
		  isAgentContain('iPod') ||
		  isAgentContain('Android') )
		{
			alert("a");
			element = document.getElementsByName('table_post')[0];
			element.setAttribute('margin-left', '1em');
			element.setAttribute('margin-right', '1em');
		}*/

		var width = window.innerWidth;
		if ( width < 560 )
		{
			element = document.getElementsByName('sp_adjuster');
			for ( var index = 0; index < element.length; ++index )
			{
				element[index].innerHTML = '<p/>';
			}
		}
		if ( width < 280 )
		{
			element = document.getElementsByName('sp_adjuster2');
			for ( var index = 0; index < element.length; ++index )
			{
				element[index].innerHTML = '<p/>';
			}
		}
		element = document.getElementById('title');
		element.setAttribute('size', width / 10);

		element = document.getElementById('article');
		element.setAttribute('cols', width / 8);

		element = document.getElementById('window_width');
		element.innerHTML = '<small>' + width + '</small>';

		element = document.getElementById('article_form');
		element.onsubmit = function()
		{
			alert("1");
		};;
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function click_reader()
{
	try
	{
		document.getElementById('draft_importer').click();
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function import_draft(files)
{
	try
	{
		var file = files[0];
		document.getElementById('title').value = file.name;

		var reader = new FileReader();
		reader.onload = function(e)
		{
			document.getElementById('article').value += e.target.result;
		};
		reader.readAsText(file, 'UTF-8');
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function click_submit()
{
	try
	{
		document.getElementById('submit_button').click();
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function check_datetime_as()
{
	try
	{
		var element = null;

		element = document.getElementById('datetime_as');
		var checked = element.checked;

		element = document.getElementById('post_date');
		element.disabled = !checked;
		if ( checked )
		{
			element.value = format_date(new Date());
		}

		element = document.getElementById('post_time');
		element.disabled = !checked;
		if ( checked )
		{
			element.value = format_time(new Date());
		}
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function isAgentContain(str)
{
	if ( navigator.userAgent.indexOf(str) > 0 )
	{
		return true;
	}
	else
	{
		return false;
	}
}

//---------------------------------------------------------------------------//

function format_date(date)
{
	try
	{
		var yyyy = date.getFullYear();
		var MM   = date.getMonth() + 1;
		var DD   = date.getDate();

		if ( yyyy < 1000 )     yyyy =   '0' + yyyy;
		else if ( yyyy < 100 ) yyyy =  '00' + yyyy;
		else if ( yyyy < 10 )  yyyy = '000' + yyyy;

		if ( MM < 10 ) MM = '0' + MM;
		if ( DD < 10 ) DD = '0' + DD;

		return yyyy + '-' + MM + '-' + DD;
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

function format_time(date)
{
	try
	{
		var HH = date.getHours();
		var mm = date.getMinutes();
		var ss = date.getSeconds();

		if ( HH < 10 ) HH = '0' + HH;
		if ( mm < 10 ) mm = '0' + mm;
		if ( ss < 10 ) ss = '0' + ss;

		return HH + ':' + mm + ':' + ss;
	}
	catch (e)
	{
		alert(e);
	}
}

//---------------------------------------------------------------------------//

