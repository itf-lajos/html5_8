// Fő angular modul.
var cipobolt = angular.module("cipobolt", []);

// Termékek.
cipobolt.controller("termekCtrl", ["$http", "$scope", function ($http, $scope) {

    // Termékek listája.
    $scope.termekek = [];

    // Termékek lekérése.
    $http.get("js/json/termekek.json")
        .success(function (d) {
            $scope.termekek = d;
        })
        .error(function (d) {
            console.error("Error: ", d);
        });


}]);

// Navbar kontrollere.
cipobolt.controller("navbar", function ($scope) {

    $scope.changeTheme = function ($event) {

        // Esemény megállítása.
        $event.preventDefault();
        var _target = $event.target;

        // A kiválasztott link url-je.
        var theme = _target.href.replace(location.origin, "").replace(/\//g, "");

        // Fő css link keresése és cseréje.
        // lib/bootswatch/cerulean/bootstrap.css
        var mainCss = $("#main-css");
        var href = mainCss.attr("href");
        href = href.replace(/bootswatch\/.*\/bootstrap/, "bootswatch/" + theme + "/bootstrap");
        mainCss.attr("href", href);

    }

});

// Téma módosítása.
function changeTheme() {

    $("#theme-selector a").click(function (e) {

        // Esemény megállítása.
        e.preventDefault();

        // A kiválasztott link url-je.
        var theme = this.href.replace(location.origin, "").replace(/\//g, "");

        // Fő css link keresése és cseréje.
        // lib/bootswatch/cerulean/bootstrap.css
        var mainCss = $("#main-css");
        var href = mainCss.attr("href");
        href = href.replace(/bootswatch\/.*\/bootstrap/, "bootswatch/" + theme + "/bootstrap");
        mainCss.attr("href", href);

    });

}
