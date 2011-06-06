if(!jsBackend) { var jsBackend = {}; }

jsBackend.locale =
{
	init: function()
	{
		jsBackend.locale.controls.init();
	},


	// end
	eoo: true
}


jsBackend.locale.controls =
{
	init: function()
	{
		if($('select#application').length && $('select#module').length)
		{
			// bind
			$('select#application').bind('change', jsBackend.locale.controls.enableDisableModules);

			// call to start
			jsBackend.locale.controls.enableDisableModules();
		}
	},

	enableDisableModules: function()
	{
		// frontend can't have specific module
		if($('select#application').val() == 'frontend')
		{
			// set all modules disabled
			$('select#module option').prop('disabled', 'disabled');

			// enable core
			$('select#module option[value=core]').prop('disabled', '').prop('selected', 'selected');
		}

		// remove the disbaled stuff
		else
		{
			$('select#module option').prop('disabled', '');
		}
	},


	// end
	eoo: true
}


$(document).ready(jsBackend.locale.init);
