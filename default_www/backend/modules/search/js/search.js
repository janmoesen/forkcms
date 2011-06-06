if(!jsBackend) { var jsBackend = {}; }


/**
 * All methods related to the search
 *
 * @author	Matthias Mullie <matthias@netlash.com>
 */
jsBackend.search =
{
	// init, something like a constructor
	init: function()
	{
		// synonyms box
		if($('input.synonymBox').length)
		{
			$('input.synonymBox').multipleTextbox(
			{
				emptyMessage: '{$msgNoSynonymsBox}',
				addLabel: '{$lblAdd|ucfirst}',
				removeLabel: '{$lblDeleteSynonym|ucfirst}'
			});
		}

		// settings enable/disable
		$('#searchModules input[type=checkbox]').change(function()
		{
			if($(this).is(':checked')) { $('#' + this.id + 'Weight').prop('disabled', false).removeClass('disabled'); }
			else { $('#' + this.id + 'Weight').prop('disabled', true).addClass('disabled'); }
		});
	},


	// end
	eoo: true
}


$(document).ready(jsBackend.search.init);
