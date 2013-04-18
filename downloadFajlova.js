	 
	downloadFile = function(br_ind,loz)
	{
		var url = new Array();
		url[0] = "http://wstest.etf.unssa.rs.ba/studenti/nepolozeni_ispiti/etf/"+br_ind+"/"+loz;
		url[1] = "http://wstest.etf.unssa.rs.ba/studenti/polozeni_ispiti/etf/"+br_ind+"/"+loz;
		url[2] = "http://wstest.etf.unssa.rs.ba/studenti/ispiti/etf/"+br_ind+"/"+loz;
		url[3] = "http://wstest.etf.unssa.rs.ba/studenti/status/etf/"+br_ind+"/"+loz;
		
		var file = new Array();
		file[0] = "/nepolozeni_ispiti.json";
		file[1] = "/polozeni_ispiti.json";
		file[2] = "/ispiti_za_polaganje.json";
		file[3] = "/status_studenta.json";
		
		for(var i=0;i<4;i++)
		{
			var adresa=url[i];
			var ime_fajla=url[i];
			alert(adresa);
			var fileTransfer = new FileTransfer();
			var filePath = window.appRootDir.fullPath + ime_fajla;
			fileTransfer.download(
			adresa,
			filePath,
			function(entry) {
			alert("download complete: " + entry.fullPath);
			},
			function(error) {
			alert("download error" + error.source);
			}
			);
		}
	}
