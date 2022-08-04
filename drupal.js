Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442\u043e\u043c","ResponseText: !responseText":"\u041e\u0442\u0432\u0435\u0442\u0422\u0435\u043a\u0441\u0442\u043e\u043c: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438"}} };;
/**
 * 
 * Documentation
 * https://github.com/mattkersley/Responsive-Menu
 *
 */
(function($){
    
    //plugin's default options
    var settings = {
	combine: true,					//combine multiple menus into a single select
	groupPageText: 'Main',			//optgroup's aren't selectable, make an option for it
	nested: true,					//create optgroups by default
	prependTo: 'body',				//insert at top of page by default
	switchWidth: 480,				//width at which to switch to select, and back again
	topOptionText: 'Select a page'	//default "unselected" state
    },
    
    //used to store original matched menus
    $menus,
    
    //used as a unique index for each menu if no ID exists
    menuCount = 0,
    
    //used to store unique list items for combining lists
    uniqueLinks = [];


    //go to page
    function goTo(url){
	document.location.href = url;
    }
    
    //does menu exist?
    function menuExists(){
	return ($('.mnav').length) ? true : false;
    }

    //validate selector's matched list(s)
    function isList($this){
	var pass = true;
	$this.each(function(){
	    if(!$(this).is('ul') && !$(this).is('ol')){
		pass=false;
	    }
	});
	return pass;
    }//isList()


    //function to decide if mobile or not
    function isMobile(){
	return ($(window).width() < settings.switchWidth);
    }
    
    
    //function to get text value of element, but not it's children
    function getText($item){
	return $.trim($item.clone().children('ul, ol').remove().end().text());
    }
    
    //function to check if URL is unique
    function isUrlUnique(url){
	return ($.inArray(url, uniqueLinks) === -1) ? true : false;
    }
    
    
    //function to do duplicate checking for combined list
    function checkForDuplicates($menu){
	
	$menu.find(' > li').each(function(){
	
	    var $li = $(this),
		link = $li.find('a').attr('href'),
		parentLink = function(){
		    if($li.parent().parent().is('li')){
			return $li.parent().parent().find('a').attr('href');
		    } else {
			return null;
		    }
		};
			
	    //check nested <li>s before checking current one
	    if($li.find(' ul, ol').length){
		checkForDuplicates($li.find('> ul, > ol'));
	    }
	
	    //remove empty UL's if any are left by LI removals
	    if(!$li.find(' > ul li, > ol li').length){
		$li.find('ul, ol').remove();
	    }
	
	    //if parent <li> has a link, and it's not unique, append current <li> to the "unique parent" detected earlier
	    if(!isUrlUnique(parentLink(), uniqueLinks) && isUrlUnique(link, uniqueLinks)){
		$li.appendTo(
		    $menu.closest('ul#mmnav').find('li:has(a[href='+parentLink()+']):first ul')
		);
	    }
	    
	    //otherwise, check if the current <li> is unique, if it is, add it to the unique list
	    else if(isUrlUnique(link)){
		uniqueLinks.push(link);
	    }
	    
	    //if it isn't, remove it. Simples.
	    else{
		$li.remove();
	    }
	
	});
    }
    
    
    //function to combine lists into one
    function combineLists(){
	
	//create a new list
	var $menu = $('<ul id="mmnav" />');
	
	//loop through each menu and extract the list's child items
	//then append them to the new list
	$menus.each(function(){
	    $(this).children().clone().appendTo($menu);
	});
	
	//de-duplicate any repeated items
	checkForDuplicates($menu);
		
	//return new combined list
	return $menu;
	
    }//combineLists()
    
    
    
    //function to create options in the select menu
    function createOption($item, $container, text){
	
	//if no text param is passed, use list item's text, otherwise use settings.groupPageText
	if(!text){
	    $('<option value="'+$item.find('a:first').attr('href')+'">'+$.trim(getText($item))+'</option>').appendTo($container);
	} else {
	    $('<option value="'+$item.find('a:first').attr('href')+'">'+text+'</option>').appendTo($container);
	}
    
    }//createOption()
    
    
    
    //function to create option groups
    function createOptionGroup($group, $container){
	
	//create <optgroup> for sub-nav items
	var $optgroup = $('<optgroup label="'+$.trim(getText($group))+'" />');
	
	//append top option to it (current list item's text)
	createOption($group,$optgroup, settings.groupPageText);
    
	//loop through each sub-nav list
	$group.children('ul, ol').each(function(){
	
	    //loop through each list item and create an <option> for it
	    $(this).children('li').each(function(){
		createOption($(this), $optgroup);
	    });
	});
	
	//append to select element
	$optgroup.appendTo($container);
	
    }//createOptionGroup()

    
    
    //function to create <select> menu
    function createSelect($menu){
    
	//create <select> to insert into the page
	var $select = $('<select id="mm'+menuCount+'" class="mnav" />');
	menuCount++;
	
	//create default option if the text is set (set to null for no option)
	if(settings.topOptionText){
	    createOption($('<li>'+settings.topOptionText+'</li>'), $select);
	}
	
	//loop through first list items
	$menu.children('li').each(function(){
	
	    var $li = $(this);

	    //if nested select is wanted, and has sub-nav, add optgroup element with child options
	    if($li.children('ul, ol').length && settings.nested){
		createOptionGroup($li, $select);
	    }
	    
	    //otherwise it's a single level select menu, so build option
	    else {
		createOption($li, $select);			
	    }
			
	});
	
	//add change event and prepend menu to set element
	$select
	    .change(function(){goTo($(this).val());})
	    .prependTo(settings.prependTo);
    
    }//createSelect()

    
    //function to run plugin functionality
    function runPlugin(){
    
	//menu doesn't exist
	if(isMobile() && !menuExists()){
	    
	    //if user wants to combine menus, create a single <select>
	    if(settings.combine){
		var $menu = combineLists();
		createSelect($menu);
	    }
	    
	    //otherwise, create a select for each matched list
	    else{
		$menus.each(function(){
		    createSelect($(this));
		});
	    }
	}
	
	//menu exists, and browser is mobile width
	if(isMobile() && menuExists()){
	    $('.mnav').show();
	    $menus.hide();
	}
	    
	//otherwise, hide the mobile menu
	if(!isMobile() && menuExists()){
	    $('.mnav').hide();
	    $menus.show();
	}
	
    }//runPlugin()

    
    
    //plugin definition
    $.fn.mobileMenu = function(options){

	//override the default settings if user provides some
	if(options){$.extend(settings, options);}
	
	//check if user has run the plugin against list element(s)
	if(isList($(this))){
	    $menus = $(this);
	    runPlugin();
	    $(window).resize(function(){runPlugin();});
	} else {
	    alert('mobileMenu only works with <ul>/<ol>');
	}
		
    };//mobileMenu()
    
})(jQuery);;