app.directive("scrolly",function(){return{restrict:"A",link:function(l,o,r){var t=o[0];o.bind("scroll",function(){t.scrollTop+t.offsetHeight>=t.scrollHeight&&(l.$apply(r.scrolly),l.loadFonts())})}}});