app.directive("fontManager", function ($document, $timeout) {
    return {
        restrict: "E",
        templateUrl: "app/views/font-selector.html",
        scope: {
            placeholder: "@"
        },
        link: function (scope, element, attrs) {
            scope.isFontSelected = false; // initial state
            scope.isFontsListShown = false; // initial state
            scope.listedFonts = [];
            scope.buffer = [];
            scope.current = 0;
            scope.page = 1;
            scope.limit = 20;
            scope.isLoading = true;


            scope.$on('fonts', function (event, data) {
                scope.isLoading = false;
                scope.fonts = data;
                scope.selectedFont = data[0];
                scope.loadFonts();
            });

            scope.loadFonts = function () {
                scope.isLoading = true;

                if (scope.current < 800) {
                    for (var i = scope.current; i < scope.page * scope.limit; i++){
                        scope.listedFonts.push(scope.fonts[i]);
                        scope.buffer.push(scope.fonts[i]);
                    }

                    scope.current += 20;
                    scope.page++;
                }

                $timeout(function () {}, 1000)
            };

            scope.showFonts = function () {
                scope.isFontsListShown = true;
            };

            $document.on('click', function (event) {
                if (scope.isClickOutside(event)) {
                    scope.$apply(function () {
                        scope.isFontsListShown = false;
                        scope.fontSearch = '';
                    });
                }
            });

            scope.selectFont = function (font) {
                scope.selectedFont = font;
                scope.isFontSelected = true;
                scope.isFontsListShown = false;
            };

            scope.isClickOutside = function (event) {
                var path = event.path;

                for (var i = 0; i < path.length; i++) {
                    if (path[i].id === 'manager') {
                        return false;
                    }
                }
                return true;
            };

            scope.type = function (fontSearch) {
                if (fontSearch === '') {
                    scope.listedFonts = [];
                    scope.loadFonts();
                } else {
                    scope.listedFonts = scope.fonts;
                }
                scope.isLoading = false;
            };
        }
    }
});