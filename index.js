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
					time: '2019-01-05T15:30:00',
					published: true,
					submissions: 10,
					totalSubmissions: 20,
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: true
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 2,
					title: 'Event Two',
					time: '2019-01-10T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: true,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				},
				{
					id: 3,
					title: 'Event Three',
					time: '2019-01-15T15:30:00',
					published: true,
					submissions: 10,
					totalSubmissions: 20,
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: false,
					spellcheck: true,
					resource_sheet: false,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: true
				},
				{
					id: 4,
					title: 'Event Four',
					time: '2019-01-20T15:30:00',
					published: false,
					submissions: '',
					totalSubmissions: '',
					class: 'Year 5 - Physics',
					teacherName: 'Martin Hahn',
					// i_code: 'XJN4M',
					a_code: '00004815',
					t_code: '00004815',
					calculator: true,
					spellcheck: false,
					resource_sheet: true,
					program: 'MYP - Humanities',
					testTime: '120 mins',
					marks: 143,
					size: '20 MB',
					submitted: false
				}
			];
			$scope.events = [];
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
					totalSubmissions: $scope.data[i].totalSubmissions
				};
			}
			$scope.eventSources = [
				{
					events: $scope.events
				}
			];
			$scope.eventRender = function(event, element, view, jsEvent) {
				console.log(event);
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
					header: {
						left: 'month basicWeek',
						center: 'prev ,title, next',
						right: 'today'
					},

					eventDrop: $scope.alertOnDrop,
					eventResize: $scope.alertOnResize,
					eventClick: $scope.eventClick,
					eventRender: $scope.eventRender,
					eventLimit: true, // for all non-agenda views
					views: {
						agenda: {
							eventLimit: 2 // adjust to 6 only for agendaWeek/agendaDay
						}
					}
				}
			};
		}
	]);
})();
