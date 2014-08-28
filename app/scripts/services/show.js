'use strict';

app.factory('Show', ['$firebase', 'FIREBASE_URL', function($firebase, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL + 'shows');

	var shows = $firebase(ref).$asArray();

	var Show = {
		all: shows,
		create: function (show) {
			return shows.$add(show);
		},
		find: function (showId) {
			return $firebase(ref.child(showId)).$asObject();
		},
		delete: function (show) {
			return shows.$remove(show);
		}
	};

	return Show;
}]);