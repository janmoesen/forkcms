if(!jsBackend) { var jsBackend = {}; }


/**
 * Interaction for the tags module
 *
 * @author	Tijs Verkoyen <tijs@sumocoders.be>
 */
jsBackend.tags =
{
	// init, something like a constructor
	init: function()
	{
		if($('.datagrid td.tag').length)
		{
			// build ajax-url
			var url = '/backend/ajax.php?module=' + jsBackend.current.module + '&action=edit&language=' + jsBackend.current.language;

			// bind
			$('.datagrid td.tag').inlineTextEdit({ saveUrl: url, tooltip: '{$msgClickToEdit}' });
		}
	},


	// end
	eoo: true
}


$(document).ready(jsBackend.tags.init);
