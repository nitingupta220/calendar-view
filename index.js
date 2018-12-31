(function() {
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
			var eventName = '2019-01-01T14:30:00';
			var eventEndName = '2019-01-01T15:30:00';
			var published = true;
			$scope.data = [
				{
					id: 1,
					title: 'Solar Panel Assessment',
					time: '2018-12-05T15:30:00',
					published: true,
					submissions: 10,
					totalSubmissions: 20
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2018-12-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: ''
				},
				{
					id: 3,
					title: 'Event Three',
					time: '2018-12-15T15:30:00',
					published: true,
					submissions: 10,
					totalSubmissions: 20
				},
				{
					id: 4,
					title: 'Event Four',
					time: '2018-12-20T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: ''
				}
			];
			$scope.eventRender = function(event, element, view) {
				element.attr({
					title: event.title,
					'tooltip-append-to-body': true
				});

				$compile(element)($scope);
			};
			$scope.events = [];
			for (var i = 0; i < $scope.data.length; i++) {
				$scope.events[i] = {
					id: $scope.data[i].id,
					title:
						'-' +
						$scope.data[i].title +
						' ' +
						$scope.data[i].submissions +
						'/' +
						$scope.data[i].totalSubmissions,
					start: $scope.data[i].time,
					// end: ($scope.data[i].end),
					className: $scope.data[i].published ? 'border-green' : 'border-red'
				};
			}
			$scope.eventSources = [
				{
					events: $scope.events
				}
			];

			$scope.eventClick = function(event, jsEvent, view) {
				element = $(jsEvent.target).closest('.fc-event');
				popover = $popover(element, {
					placement: 'auto right',
					contentTemplate: 'calendar-item-popover.html',
					trigger: 'manual',
					autoClose: true,
					viewport: 'body',
					container: 'body'
				});
				delete event.source;
				popover.$scope.event = event;
				popover.$promise.then(popover.show);
			};

			var popover;

			$scope.uiConfig = {
				calendar: {
					height: 900,
					width: 500,
					header: {
						left: 'month basicWeek',
						center: 'prev ,title, next',
						right: 'today'
					},

					eventDrop: $scope.alertOnDrop,
					eventResize: $scope.alertOnResize,
					eventClick: $scope.eventClick,
					eventRender: $scope.eventRender
				}
			};
		}
	]);
})();
