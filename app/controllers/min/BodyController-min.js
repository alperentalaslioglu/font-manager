app.controller("BodyController",["$scope","$rootScope","FontService",function(o,t,n){n.success(function(n){o.fonts=n.items,t.$broadcast("fonts",o.fonts)})}]);