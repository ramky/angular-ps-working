'use strict';

eventsApp.controller('EventController',
	function EventController ($scope, eventData) {
        $scope.snippet = '<span style=\"color: red\">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color: 'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
    		
        $scope.sortOrder = 'name';

        $scope.event = eventData.getEvent();

        // $scope.event is a promise
        $scope.event.then(function(event){
            console.log(event);
        }, function(status){
            console.log("error:" + status);
        });
        
        $scope.upVoteSession = function(session){
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
          session.upVoteCount--;
        };
	}
);
