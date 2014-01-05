'use strict';

eventsApp.controller('EditEventController',
  function EditEventController($scope, eventData){
    $scope.saveEvent = function(event, form){
      if (form.$valid){
        eventData.save(event)
          .then(
            function(response){console.log('success', response)},
            function(response){console.log('failure', response)}
          );
      }
    }

    $scope.cancelEdit = function(){
      window.location = "/event_details.html";
    }
  }
);
