(function() {
	var app = angular.module('myApp', [ 'ui.calendar', 'ui.bootstrap', 'mgcrea.ngStrap' ]);
	app.controller('myCtrl', [
		'$scope',
		'$compile',
		'$popover',
		'$http',
		function($scope, $compile, $popover, $http) {
			$scope.firstName = 'John';
			$scope.lastName = 'Doe';
			var date = new Date();
			var d = date.getDate();
			var m = date.getMonth();
			var y = date.getFullYear();
			var eventName = '2019-01-01T14:30:00';
			var eventEndName = '2019-01-01T15:30:00';
			var published = true;
			
			$scope.data = '';
			$scope.events = [];
			$http.get('data.json').then(function(response) {
				$scope.data = response.data;
				for (var i = 0; i < $scope.data.length; i++) {
					$scope.events[i] = {
						id: $scope.data[i].id,
						title: $scope.data[i].title,
						start: $scope.data[i].time,
						// end: ($scope.data[i].end),
						className: $scope.data[i].published ? 'border-green' : 'border-red',
						class: $scope.data[i].class,
						teacherName: $scope.data[i].teacherName,
						i_code: $scope.data[i].i_code,
						a_code: $scope.data[i].a_code,
						t_code: $scope.data[i].t_code,
						calculator: $scope.data[i].calculator,
						spellcheck: $scope.data[i].spellcheck,
						resource_sheet: $scope.data[i].resource_sheet,
						program: $scope.data[i].program,
						testTime: $scope.data[i].testTime,
						marks: $scope.data[i].marks,
						submitted: $scope.data[i].submitted,
						submissions: $scope.data[i].submissions,
						totalSubmissions: $scope.data[i].totalSubmissions,
						size: $scope.data[i].size
					};
				}
			});

			$scope.eventSources = [
				{
					events: $scope.events,
					cache: true,
					stick: true
				}
			];
			$scope.eventRender = function(event, element, view, jsEvent) {
				element.attr({
					title: event.title,
					'tooltip-append-to-body': true
				});

				$compile(element)($scope);
			};

			$scope.eventClick = function(event, jsEvent, view) {
				element = $(jsEvent.target).closest('.fc-event');
				popover = $popover(element, {
					placement: 'auto right',
					contentTemplate: 'calendar-item-popover.html',
					trigger: 'manual',
					autoClose: true,
					viewport: 'body',
					container: 'body',
					target: element
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
					lazyFetching: true,
					header: {
						left: 'month basicWeek',
						center: 'prev ,title, next',
						right: 'today'
					},

					eventDrop: $scope.alertOnDrop,
					eventResize: $scope.alertOnResize,
					eventClick: $scope.eventClick,
					eventRender: $scope.eventRender,
					eventLimit: true // for all non-agenda views
					// views: {
					// 	agenda: {
					// 		eventLimit: 2 // adjust to 6 only for agendaWeek/agendaDay
					// 	}
					// }
				}
			};
		}
	]);
})();
