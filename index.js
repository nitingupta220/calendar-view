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
		$scope.eventSources = [
			{
				events: [
					{
						title: '',
						start: eventName,
						className: published ? 'border-green' : 'border-red'
					},
					{
						title: '',
						start: eventName,
						className: published ? 'border-green' : 'border-red'
					},
					{
						title: '',
						start: new Date(y, m, d - 5),	
						className: published ? 'border-green' : 'border-red'
					},
					{
						id: 999,
						title: '',
						start: new Date(y, m, d - 3, 16, 0),
						allDay: false,
						className: 'border-red'
					},
					{
						id: 999,
						title: '',
						start: new Date(y, m, d + 4, 16, 0),
						allDay: false,
						className: published ? 'border-green' : 'border-red'
					},
					{
						title: '',
						start: new Date(y, m, d + 1, 19, 0),
						end: new Date(y, m, d + 1, 22, 30),
						allDay: false,
						className: published ? 'border-green' : 'border-red'
					},
					{
						title: '',
						start: new Date(y, m, 28),
						end: new Date(y, m, 29),
						className: published ? 'border-green' : 'border-red'
					}
				]
			}
		];
		$scope.eventRender = function(event, element, view) {
			element.attr({
				title: event.title,
				'tooltip-append-to-body': true
			});
			var title = element.find('.fc-title');
			title.append(`
				<div style="margin-top: -10px;">
					<div>
						<p style="color: #afafaf;">Zhuhai International School <span>9/10</span> </p>
					</div>
					<div>
						<p style="color: #858585;">Maths <span style="float: right;">2:30pm</span> </p>
					</div>
				</div>
			`);
			
			$compile(element)($scope);
		};

		var popover;
		$scope.uiConfig = {
			calendar: {
				height: 900,
				width: 500,
				displayEventTime: false,
				header: {
					left: 'month basicWeek',
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
						placement: 'auto',
						contentTemplate: 'calendar-item-popover.html',
						trigger: 'manual',
						autoClose: true,
						viewport: 'body',
						container: 'body'
					});
					delete event.source;
					popover.$scope.event = event;
					popover.$promise.then(popover.show);
				}
			}
		};
	}
]);
