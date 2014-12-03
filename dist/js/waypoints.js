!function(a,b,c,d){var e=a(d),f="waypoint.reached",g=function(a,c){a.element.trigger(f,c),a.options.triggerOnce&&a.element[b]("destroy")},h=function(a,b){if(!b)return-1;for(var c=b.waypoints.length-1;c>=0&&b.waypoints[c].element[0]!==a[0];)c-=1;return c},i=[],j=function(b){a.extend(this,{element:a(b),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:a.proxy(function(){var b=this.element.scrollTop(),d=b>this.oldScroll,e=this,f=a.grep(this.waypoints,function(a){return d?a.offset>e.oldScroll&&a.offset<=b:a.offset<=e.oldScroll&&a.offset>b}),h=f.length;this.oldScroll&&b||a[c]("refresh"),this.oldScroll=b,h&&(d||f.reverse(),a.each(f,function(a,b){(b.options.continuous||a===h-1)&&g(b,[d?"down":"up"])}))},this)}),a(b).bind("scroll.waypoints",a.proxy(function(){this.didScroll||(this.didScroll=!0,d.setTimeout(a.proxy(function(){this.doScroll(),this.didScroll=!1},this),a[c].settings.scrollThrottle))},this)).bind("resize.waypoints",a.proxy(function(){this.didResize||(this.didResize=!0,d.setTimeout(a.proxy(function(){a[c]("refresh"),this.didResize=!1},this),a[c].settings.resizeThrottle))},this)),e.load(a.proxy(function(){this.doScroll()},this))},k=function(b){var c=null;return a.each(i,function(a,d){return d.element[0]===b?(c=d,!1):void 0}),c},l={init:function(d,e){return this.each(function(){var g,l=a.fn[b].defaults.context,m=a(this);e&&e.context&&(l=e.context),a.isWindow(l)||(l=m.closest(l)[0]),g=k(l),g||(g=new j(l),i.push(g));var n=h(m,g),o=0>n?a.fn[b].defaults:g.waypoints[n].options,p=a.extend({},o,e);p.offset="bottom-in-view"===p.offset?function(){var b=a.isWindow(l)?a[c]("viewportHeight"):a(l).height();return b-a(this).outerHeight()}:p.offset,0>n?g.waypoints.push({element:m,offset:null,options:p}):g.waypoints[n].options=p,d&&m.bind(f,d),e&&e.handler&&m.bind(f,e.handler)}),a[c]("refresh"),this},remove:function(){return this.each(function(b,c){var d=a(c);a.each(i,function(a,b){var c=h(d,b);c>=0&&(b.waypoints.splice(c,1),b.waypoints.length||(b.element.unbind("scroll.waypoints resize.waypoints"),i.splice(a,1)))})})},destroy:function(){return this.unbind(f)[b]("remove")}},m={refresh:function(){a.each(i,function(b,d){var e=a.isWindow(d.element[0]),f=e?0:d.element.offset().top,h=e?a[c]("viewportHeight"):d.element.height(),i=e?0:d.element.scrollTop();a.each(d.waypoints,function(a,b){if(b){var c=b.options.offset,e=b.offset;if("function"==typeof b.options.offset)c=b.options.offset.apply(b.element);else if("string"==typeof b.options.offset){var j=parseFloat(b.options.offset);c=b.options.offset.indexOf("%")?Math.ceil(h*(j/100)):j}b.offset=b.element.offset().top-f+i-c,b.options.onlyOnScroll||(null!==e&&d.oldScroll>e&&d.oldScroll<=b.offset?g(b,["up"]):null!==e&&d.oldScroll<e&&d.oldScroll>=b.offset?g(b,["down"]):!e&&d.element.scrollTop()>b.offset&&g(b,["down"]))}}),d.waypoints.sort(function(a,b){return a.offset-b.offset})})},viewportHeight:function(){return d.innerHeight?d.innerHeight:e.height()},aggregate:function(){var b=a();return a.each(i,function(c,d){a.each(d.waypoints,function(a,c){b=b.add(c.element)})}),b}};a.fn[b]=function(c){return l[c]?l[c].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof c&&c?"object"==typeof c?l.init.apply(this,[null,c]):void a.error("Method "+c+" does not exist on jQuery "+b):l.init.apply(this,arguments)},a.fn[b].defaults={continuous:!0,offset:0,triggerOnce:!1,context:d},a[c]=function(a){return m[a]?m[a].apply(this):m.aggregate()},a[c].settings={resizeThrottle:200,scrollThrottle:100},e.load(function(){a[c]("refresh")})}(jQuery,"waypoint","waypoints",window);