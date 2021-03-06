// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Debug
//var reqUrl="http://www.bankofamerica.concerninglife.com/";
//var posUrl="https://www.google.com/";
//var reqUrl="https://www.bankofamerica.com/";
//console.log(reqUrl);
//console.log(posUrl);
//checkPageStats(reqUrl, posUrl);

var pageStatsApiKey="a60267b0831842808a637bbce385d829";
var urlGlobalRankThreshold = 10; // Threshold: possible url rank +- 10 ranks.
var urlVisitThresholdPercentage = 0.5; // requestingUrlVisits Threshold: +- 0.5*possibleOriginalUrlVisits

// Perform checks on page stats
function checkPageStats(requestingUrl, possibleOriginalUrl)
{	
	console.log("Start - Checking Page Stats");
	
	// Remove http, https, :// www. and the ending /
	// The url needs to be in (eg. cnn.com)
	requestingUrl = requestingUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
	possibleOriginalUrl = possibleOriginalUrl.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
	
	// Traffic Hits
	// Compare if requesting URL with possible original url if web traffic is within threshold.
	var isTrafficHitsLegit=compareWebsiteTraffic(requestingUrl, possibleOriginalUrl);
	console.log("TrafficHitsLegit: "+isTrafficHitsLegit);
	
	// Global rank
	// Compare if requesting URL with possible original url if global rank is within threshold.
	var isGlobalRankLegit=compareGlobalRank(requestingUrl, possibleOriginalUrl);
	console.log("GlobalRankLegit:" + isGlobalRankLegit);
	
	// Results
	if (isTrafficHitsLegit && isGlobalRankLegit)
	{
		console.log("PageStats ("+requestingUrl+") Legit");
	}
	else
	{
		console.log("PageStats ("+requestingUrl+") Not Legit");
	}
	
	console.log("End - Checking Page Stats");
}

// Obtain global rank of a particular url from API call.
function getGlobalRank(url)
{
	// Request for global rank (Global and Country Rank)
	var startDate="2018-10";
	var endDate="2018-10";
	var mainDomain=false;
	
	// Requesting Website
	var reqApiUrl="https://api.similarweb.com/v1/website/"+url+"/global-rank/global-rank?api_key="+pageStatsApiKey+"&start_date="+startDate+"&end_date="+endDate+"&main_domain_only="+mainDomain;
	
	// Request for information for user requested website
	var reqXmlHttp = new XMLHttpRequest();
    reqXmlHttp.open("GET", reqApiUrl, false); // true for asynchronous 
    reqXmlHttp.send(null);
	var reqResponse = reqXmlHttp.responseText;
	var reqObj = JSON.parse(reqResponse);
	
	console.log("Global Rank: " + url);
	console.log(reqObj);
	
	return reqObj;
}

// Obtain web traffic of a particular url from API call.
function getWebsiteTraffic(url)
{	
	// Request for total traffic (Total Traffic API)
	var startDate="2018-10";
	var endDate="2018-10";
	var mainDomain=false;
	var granularity="monthly";
	
	// Requesting Website
	var reqApiUrl="https://api.similarweb.com/v1/website/"+url+"/total-traffic-and-engagement/visits?api_key="+pageStatsApiKey+"&start_date="+startDate+"&end_date="+endDate+"&main_domain_only="+mainDomain+"&granularity="+granularity;
	
	// Request for information for user requested website
	var reqXmlHttp = new XMLHttpRequest();
    reqXmlHttp.open("GET", reqApiUrl, false); // true for asynchronous 
    reqXmlHttp.send(null);
	var reqResponse = reqXmlHttp.responseText;
	var reqObj = JSON.parse(reqResponse);
	
	console.log("Website Traffic: " + url);
	console.log(reqObj);
	
	return reqObj;
}

// Compare requesting URL with possible original URL for global rank.
function compareGlobalRank(requestingUrl, possibleOriginalUrl)
{
	var isGlobalRankLegit=false;
	
	// Requesting URL
	var requestingUrlGlobalRank = getGlobalRank(requestingUrl);
	
	// Original URL
	var possibleOriginalUrlGlobalRank = getGlobalRank(possibleOriginalUrl);
	
	// Verify that both requests are successful
	// Compare both sites on global rank
	// If the request site has global rank of within urlGlobalRankThreshold from possible original site, it is legit.
	if ((requestingUrlGlobalRank.meta.status == 'Success') && (possibleOriginalUrlGlobalRank.meta.status == 'Success'))
	{
		var requestingUrlRank = requestingUrlGlobalRank.global_rank[0].global_rank;
		var possibleOriginalUrlRank = possibleOriginalUrlGlobalRank.global_rank[0].global_rank;
		
		console.log(requestingUrlRank + " in [" + (possibleOriginalUrlRank-urlGlobalRankThreshold) + "," + (possibleOriginalUrlRank+urlGlobalRankThreshold) + "]");
		
		if ((requestingUrlRank >= (possibleOriginalUrlRank-urlGlobalRankThreshold)) && (requestingUrlRank <= (possibleOriginalUrlRank+urlGlobalRankThreshold)))
		{
			isGlobalRankLegit = true;
		}
		else
		{
			isGlobalRankLegit = false;
		}
	}
	else
	{
		// Unable to determine.
		// Request failed.
		console.log("(GlobalRank) Requesting URL status: " + requestingUrlGlobalRank.meta.status);
		if (requestingUrlGlobalRank.meta.status == 'Error')
		{
			console.log("(GlobalRank) Requesting URL status: " + requestingUrlGlobalRank.meta.error_code + " - " + requestingUrlGlobalRank.meta.error_message);
		}
		
		console.log("(GlobalRank) Original URL status: " + possibleOriginalUrlGlobalRank.meta.status);
		if (possibleOriginalUrlGlobalRank.meta.status == 'Error')
		{
			console.log("(GlobalRank) Original URL status: " + possibleOriginalUrlGlobalRank.meta.error_code + " - " + possibleOriginalUrlGlobalRank.meta.error_message);
		}
	}
	
	return isGlobalRankLegit;
}

// Compare requesting URL with possible original URL for website traffic.
function compareWebsiteTraffic(requestingUrl, possibleOriginalUrl)
{
	var isTrafficHitsLegit=false;
	
	// Requesting URL
	var requestingUrlWebsiteTraffic = getWebsiteTraffic(requestingUrl);
	
	// Original URL
	var possibleOriginalUrlWebsiteTraffic = getWebsiteTraffic(possibleOriginalUrl);
	
	// Verify that both requests are successful
	// Compare both sites on website traffic
	// If the request site has website traffic of within urlVisitThresholdPercentage from possible original site, it is legit.
	if ((requestingUrlWebsiteTraffic.meta.status == 'Success') && (possibleOriginalUrlWebsiteTraffic.meta.status == 'Success'))
	{
		var requestingUrlVisits = requestingUrlWebsiteTraffic.visits[0].visits;
		var possibleOriginalUrlVisits = possibleOriginalUrlWebsiteTraffic.visits[0].visits;
		var thresholdAmount = urlVisitThresholdPercentage*possibleOriginalUrlVisits;
		
		console.log(requestingUrlVisits + " in [" + (possibleOriginalUrlVisits-thresholdAmount) + "," + (possibleOriginalUrlVisits+thresholdAmount) + "]");
		
		if ((requestingUrlVisits >= (possibleOriginalUrlVisits-thresholdAmount)) && (requestingUrlVisits <= (possibleOriginalUrlVisits+thresholdAmount)))
		{
			isTrafficHitsLegit = true;
		}
		else
		{
			isTrafficHitsLegit = false;
		}
	}
	else
	{
		// Request failed.
		console.log("(TrafficHit) Requesting URL status: " + requestingUrlWebsiteTraffic.meta.status);
		if (requestingUrlWebsiteTraffic.meta.status == 'Error')
		{
			console.log("(TrafficHit) Requesting URL status: " + requestingUrlWebsiteTraffic.meta.error_code + " - " + requestingUrlWebsiteTraffic.meta.error_message);
		}
		
		console.log("(TrafficHit) Original URL status: " + possibleOriginalUrlWebsiteTraffic.meta.status);
		if (possibleOriginalUrlWebsiteTraffic.meta.status == 'Error')
		{
			console.log("(TrafficHit) Original URL status: " + possibleOriginalUrlWebsiteTraffic.meta.error_code + " - " + possibleOriginalUrlWebsiteTraffic.meta.error_message);
		}
	}
	
	return isTrafficHitsLegit;
}