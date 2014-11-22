    var allUrls = "";

    chrome.tabs.query({}, function (tabs) {
    	tabs.forEach(function (tab) {
    		getTabUrl(tab.url, tab.title);
    	});
    
    	sendEmail(allUrls);

    });

	
	function getTabUrl(tablink, tabtitle) {
		allUrls += tabtitle + ":\r\n" + tablink + "\r\n\r\n\r\n";
	}

	function sendEmail(urlList) {


		//urlList = "Check out these links below: \n\n" + urlList;
		
		//alert(urlList);

		chrome.tabs.create({
		"url": "https://mail.google.com/mail/u/0/?view=cm&tf=0&fs=1&body=" + encodeURIComponent(urlList) });
		//location.replace("mailto:?body=" + urlList);
	}