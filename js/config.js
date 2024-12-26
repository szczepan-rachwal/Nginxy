//
/*------------------------------------*\
    Nginxy
    by @lfelipe1501

    Theme name: Nginxy
    Theme author: @lfelipe1501
\*------------------------------------*/
// Configure Nginxy here:
var websiteName = '';
var websiteURL = '';
// End of normal settings.
//
//

$(document).ready(function(){

// Working on nginx HTML and applying settings.
var text = $("h1").text();
var array = text.split('/');
var last = array[array.length-2];
var dirStructure = $("a").text();
var dirStructure = document.getElementsByTagName('a')[0].href;
var dir = text.substring(10);
var currentDir = last.charAt(0) + last.slice(1);
var dirTrun;

// Truncate long folder names.
if (currentDir.length > 150){
	var currentDir = currentDir.substring(0, 150) + '...';
}

// Updating page title.
document.title = currentDir + ' – ' + websiteName;

// Updating page footer.
$("#footerURL").text(websiteName);
$("#footerURL").attr('href', websiteURL);

// Add back button.
$("h1").html(currentDir);

if (dir.length > 60) {
	dirTrun = dir.replace(/(.{60})/g, "$1\n")
} else {
	dirTrun = dir.substring(0, dir.length - 1);
}

// Remove stuff to simplify downloading entire folders

$('td a').each(function(){
	// Remove parent directory link
	if ($(this).text().indexOf("Parent directory") >= 0) {
		$(this).removeAttr('href');
		return;
	}
});

$('th a').each(function(){
	// Remove sorting
	$(this).removeAttr('href');
	return;
});

});
