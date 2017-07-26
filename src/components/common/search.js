import React from 'react';

const Search = React.createClass({  
	
	handleSearch: function(){
		const {searchInput} = this.refs;
		console.log(searchInput.value);
	},

	render: function() {
		return (
			<div className='search-block'>
				<input 
					ref='searchInput' 
					className='search-term-input search' 
					type='text'
					placeholder= '&#xf002;' />
		  		<button 
		  			className='button search-term-button'
		  			type='button'
		  			onClick={this.handleSearch}>Search
		  		</button>
			</div>      
		);
	}
})
export default Search;

// window.SearchActionAdminUnit = function SearchActionAdminUnit() {
// 		var timeForSearch = 3000 + incrementalValueFind;
// 		var searchInput = document.getElementById("searchInputUser").value;
// 		console.log('You searched for Node ID :' + searchInput);
// 		var nameOrId = $("#listBox option:selected").text();
// 		/**
// 		 * Code to include serial number in search
// 		 */
// 		if (nameOrId == "GUID") {
// 			nameOrId = "GUID";
// 		}else if(nameOrId=="SerialNumber"){
// 			nameOrId = "SerialNumber";
// 		}
// 		//console.log("nameOrId == ",nameOrId);
// 		var nameOrIdLowerCase ;
// 		if(nameOrId != "SerialNumber"){
// 			nameOrIdLowerCase = nameOrId.toLowerCase();	
// 		}
// 		else{
// 			nameOrIdLowerCase = nameOrId;
// 		}
// 		console.log("find node inside admin.js" + nameOrIdLowerCase);
// 		var combinedSearchQuery = nameOrIdLowerCase + '|' + searchInput;
// 		var encodedSearchedData = encodeURI(combinedSearchQuery);
// 		var urlForSearchedNode = serviceUrls.findNode + encodedSearchedData+ '&appid=' + encodedUrlAppId + '&userid=' + encodedUrlUserId;
// 		//console.log(urlForSearchedNode);
// 		// console.log("time for ajax ",timeForSearch)

// 		/**
// 		 * Find Node API is called here.
// 		 * The time for the call starts with 3s and exponentially increases by 2s for 3 attempts.
// 		 * AJAX call to get the data about the searched nodes.
// 		 */
// 		var expandedJsonAPI = $.ajax({
// 			url : urlForSearchedNode,
// 			type : methodOptions.methodGET,
// 			timeout : timeForSearch, // sets timeout to 3 seconds initially
// 			beforeSend : function() {
// 				d1 = new Date();
// 				n1 = d1.getTime();
// 				console.log("Search Search initiated"  ,  d1  , n1);
// 				console.log("modalLoading", modalLoading,"loadingShow", loadingShow);
// 				if(loadingShow == 0){
// 					$('#loading').show();loadingShow++;console.log("loadingShow", loadingShow);
// 				}
// 				else if(modalLoading == 0){
// 					$( "#quoteButton" ).trigger( "click" );
// 					$("#modal-loading").modal("show");modalLoading++;console.log("modalLoading", modalLoading);
// 				}
// 			},
// 			complete : function(reque) {
// 				console.log("CompleteModalLoading", modalLoading,"loadingShow", loadingShow);
// 				if(loadingShow == 0){
// 					$('#loading').hide();
// 				}
							
// 				if(modalLoading == 0){
// 					 $("#modal-loading").modal("hide");
// 				}
				
// 				if(loadingShow == 1){
// 					console.log("CompleteModalLoading", modalLoading,"loadingShow", loadingShow);
// 					$('#loading').hide();loadingShow = 0;
// 				}
// 				else if(modalLoading == 1){
// 					$("#modal-loading").modal("hide");modalLoading++;
// 			    }
// 			    else if(modalLoading == 2){
// 			    	$("#modal-loading").modal("hide");modalLoading = 0;
// 			    }
// 			    showTimeForSearch(reque,"searchTime");
// 			},
// 			success : function(data) {
// 				var d2 = new Date();
// 				var n2 = d2.getTime();
// 				console.log("Search Search Done" + (n2-n1) + "time");
// 				// updatedParentForJSTree(); // function to update the parents for jstree(All orgs and add classes)
// 				var searchedNodeDataFromAPI = JSON.parse(data);
// 				if (searchedNodeDataFromAPI.status === "error") {
// 					alertObject.title = 'Message !';
// 					alertObject.content = searchedNodeDataFromAPI.error.message;
// 					alertObject.icon = 'fa fa-exclamation-triangle';
// 					displayAlertModalStyle(alertObject);
// 					return;
// 				}
// 				//console.log(searchedNodeDataFromAPI);
// 				var ckeys = Object.keys(searchedNodeDataFromAPI);
// 				if (ckeys.length <= 0) {
// 					alertObject.title = 'Message !';
// 					alertObject.content = "Please enter correct node id";
// 					alertObject.icon = 'fa fa-exclamation-triangle';
// 					displayAlertModalStyle(alertObject);
// 					document.getElementById("searchInputUser").value = "Re-enter Node Id here...";
// 				} else {
// 					var dataPar = searchedNodeDataFromAPI;
// 					//console.log("data output ", JSON.stringify(dataPar))
// 					var arrayOfFoundNodes = dataPar.result;
// 					var arrayOfFoundNodesLength = arrayOfFoundNodes.length;
// 					var elementsArray = [];
// 					console.log("find nodes total count == ",arrayOfFoundNodesLength);
// 					for (var j = 0; j < arrayOfFoundNodesLength; j++) {
// 						//console.log("---------find result",arrayOfFoundNodes[j]);
// 						/**
// 						 *  delete me when Events are required
// 						 */
// 						if (arrayOfFoundNodes[j].label == "Event") {
// 							if (arrayOfFoundNodesLength == 1) {
// 								alertObject.title = 'Message  !';
// 								alertObject.content = 'Unable to Find Nodes  !';
// 								alertObject.icon = 'fa fa-clock-o';
// 								displayAlertModalStyle(alertObject);
// 								$('#restart').click();
// 								break;
// 							}
// 							console.log("A node of type Event was found !!");
// 							continue;
// 						}

// 						/**
// 						 *  delete me when Events are required
// 						 */
// 						var objForFindNodes = {};
// 						objForFindNodes.data = {};
// 						objForFindNodes.group = {};
// 						objForFindNodes.classes = {};

// 						/**
// 						 * Create the object to group and display all node properties of the node
// 						 */
// 						properties = {};
// 						var currentNode = [];
// 						currentNode = arrayOfFoundNodes[j];
// 						var keys = Object.keys(currentNode);
// 						for (var k = 0; k < keys.length; k++) {
// 							if (keys[k] === 'guid') {
// 								properties["id"] = currentNode.guid;
// 								objForFindNodes.group = "nodes";
// 							} else if (keys[k] === 'label') {
// 								properties["kill"] = currentNode.label;
// 								objForFindNodes.classes = currentNode.label;
// 								properties["label"] = currentNode.label+ ":\n" + currentNode.name;
// 							} else {
// 								properties[keys[k]] = currentNode[keys[k]];
// 							}

// 							objForFindNodes.data = properties;
// 							elementsArray.push(objForFindNodes);
// 						}
// 					}
// 					startGraphNode.elements = elementsArray;
// 					console.log("&&&&&&&&&&&&&&&&&&&&");
// 					console.log(startGraphNode);

// 					/**
// 					 *  call highlight here with this node
// 					 */
// 					document.getElementById("searchInputUser").value = "";
// 					Promise.all([ startGraphNode,styleCytoscapeProperties ]).then(initCy);
// 					incrementalValueFind = 0;modalLoading = 0;loadingShow = 0;
// 				}
// 			},
// 			error : function(xhr, textStatus, errorThrown) {
// 				if (textStatus === 'timeout') {
// 					if (retryForSearchingNodes >= 2) {
// 						alertObject.title = 'Server Timeout';
// 						alertObject.content = 'Failed from timeout !! Retry the Search Again.';
// 						alertObject.icon = 'fa fa-clock-o';
// 						displayAlertModalStyle(alertObject);
// 						retryForSearchingNodes = 0;
// 						console.log("retryForSearchingNodes find node" ,retryForSearchingNodes);
// 						incrementalValueFind = 0; modalLoading = 0; loadingShow = 0;
// 					} else {
// 						timeForSearch = 0;
// 						incrementalValueFind = 2000 + incrementalValueFind; // exponentially increase the time for the AJAX call
// 						SearchActionAdminUnit();// retry for 3 times and then throw error
// 						retryForSearchingNodes = retryForSearchingNodes + 1;
// 					}
// 				} else {
// 					if(xhr.status == 401){
// 						$("#modal-login").modal("show");
// 						incrementalValueFind = 0; modalLoading = 0; loadingShow = 0;
// 						// deleteAllCookies();
// 						// window.open("/logout", "_self");
// 					}else{
// 						alertObject.title = 'Server Error:  !';
// 						alertObject.content = "Please try Again "+ textStatus;
// 						alertObject.icon = 'fa fa-server';
// 						displayAlertModalStyle(alertObject);
// 						incrementalValueFind = 0;
// 					}
// 				}
// 			}
// 		});
// 	}