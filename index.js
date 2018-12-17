var app = angular.module('myApp', [ 'ui.calendar', 'ui.bootstrap', 'mgcrea.ngStrap' ]);
app.controller('myCtrl', [
	'$scope',
	'$compile',
	'$popover',
	function($scope, $compile, $popover) {
		$scope.firstName = 'John';
		$scope.lastName = 'Doe';
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		var eventName = 'Hello';
		$scope.eventSources = [
			{
				events: [
					{ title: 'All Day Event', start: new Date(y, m, 1), editable: true },
					{ title: 'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) },
					{ id: 999, title: 'Repeating Event', start: new Date(y, m, d - 3, 16, 0), allDay: false },
					{ id: 999, title: 'Repeating Event', start: new Date(y, m, d + 4, 16, 0), allDay: false },
					{
						title: 'Birthday Party',
						start: new Date(y, m, d + 1, 19, 0),
						end: new Date(y, m, d + 1, 22, 30),
						allDay: false
					},
					{
						title: 'Click for Google',
						start: new Date(y, m, 28),
						end: new Date(y, m, 29),
					}
				],
				color: '#638be7', // an option!
				textColor: 'white', // an option!
				padding: '10px;'
			}
		];
		$scope.eventRender = function(event, element, view) {
			element.attr({
				title: event.title,
				'tooltip-append-to-body': true
			});
			$compile(element)($scope);
		};

		var popover;
		$scope.uiConfig = {
			calendar: {
				// height: 450,
				editable: true,
				header: {
					left: 'month',
					center: 'prev ,title, next',
					right: 'today'
				},
				
				eventDrop: $scope.alertOnDrop,
				eventResize: $scope.alertOnResize,
				eventRender: $scope.eventRender,
				eventClick: function(event, jsEvent, view) {
					// question: how can I pass 'event' to popover template?
					element = $(jsEvent.target).closest('.fc-event');
					popover = $popover(element, {
						placement: 'bottom',
						contentTemplate: 'calendar-item-popover.html',
						trigger: 'manual',
						autoClose: true
					});
					delete event.source; 
					popover.$scope.event = event;
					popover.$promise.then(popover.show);
				}
			}
		};
	}
]);
