(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/show/show.tpl.html',
    '<div class="show-frame">\n' +
    '    <ul class="genres">\n' +
    '        <li data-ng-repeat="genre in genres" class="animate-repeat" data-ng-style="{\'background-color\': \'rgba(59, 185, 187, \' + genres.length / $index / 5 + \')\'}">{{genre.name}}</li>\n' +
    '    </ul>\n' +
    '    <img preload-image default-image="assets/images/loading.jpg" fallback-image="assets/images/fallback.jpg" ng-src="http://image.tmdb.org/t/p/w780/{{show.backdrop_path}}" />\n' +
    '    <div class="date label label-dark"><span class="icon icon-calendar"></span> {{show.first_air_date | amDateFormat:\'DD-MM-YYYY\'}}</div>\n' +
    '    <h2>{{show.original_name | characters:40}}</h2>\n' +
    '    <div class="inner">\n' +
    '        <ul class="info">\n' +
    '            <li class="col-xs-6 rating"><span class="icon icon-heart3"></span> {{show.vote_average}}</li>\n' +
    '            <li class="col-xs-6 country"><span class="icon icon-earth"></span> <span data-ng-repeat="country in show.origin_country">{{country}}{{$last ? \'\' : \', \'}}</span> <span data-ng-if="show.origin_country.length == 0">--</span></li>\n' +
    '            <div class="clearfix"></div>\n' +
    '        </ul>\n' +
    '        <div class="buttons">\n' +
    '            <a href="#/view/{{show.id}}" class="btn btn-info"><span class="icon icon-arrow-right7"></span> View</a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/home/home.tpl.html',
    '    <div class="swiper-container">\n' +
    '        <div class="swiper-wrapper" >\n' +
    '            <div class="swiper-slide" ng-repeat="item in home.items"><img src="{{item.file}}" /></div>\n' +
    '        </div>\n' +
    '        <div class="swiper-button-prev swiper-button-white"></div>\n' +
    '        <div class="swiper-button-next swiper-button-white"></div>\n' +
    '    </div>\n' +
    '\n' +
    '<!-- \n' +
    '\n' +
    '<div class="home-frame">\n' +
    '    <div class="home-banner">\n' +
    '        <div class="container inner">\n' +
    '            <img class="hidden-sm hidden-xs" src="assets/images/angular.png" width="400" height="400" />\n' +
    '            <h1>LEARN ANGULARJS <span>THE EASY WAY</span>.</h1>\n' +
    '            <h2>Learn how to build superb AngularJS web applications using real world best practice examples coupled with in-depth tutorials from <a href="#">revillweb.com</a>.</h2>\n' +
    '            <p>This website is a living and breathing AngularJS web application built using recommended best practices. <strong>AngularJS by example</strong> provides you with a complete application demonstrating recommended best practices from app structure all the way through to production deployment.</p>\n' +
    '            <div class="home-buttons">\n' +
    '                <a href="https://github.com/RevillWeb/angularjs-by-example" target="_blank" class="btn btn-lg btn-primary"><span class="icon icon-github2"></span> GitHub</a>\n' +
    '                <a href="http://www.revillweb.com" target="_blank" class="btn btn-lg btn-default"><span class="icon icon-home"></span> RevillWeb</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="clearbanner"></div>\n' +
    '    <div class="tutorials-title">\n' +
    '        <div class="container">\n' +
    '            ARTICLES & TUTORIALS\n' +
    '            <div class="hidden-xs share-buttons">\n' +
    '                <div class=\'shareaholic-canvas\' data-app=\'share_buttons\' data-app-id=\'15135403\'></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="container">\n' +
    '        <ul class="tutorials">\n' +
    '            <li data-ng-repeat="tutorial in home.tutorials track by $index" data-ng-class="{\'offline\': (tutorial.link == \'#\')}">\n' +
    '                <div class="number">#{{$index + 1}}</div>\n' +
    '                <h3>{{tutorial.title}}</h3>\n' +
    '                <p>{{tutorial.description}}</p>\n' +
    '                <a href="{{tutorial.link}}" data-ng-class="{\'disabled\': (tutorial.link == \'#\')}" class="btn btn-lg btn-primary"><span class="icon icon-arrow-up-right5"></span> View</a>\n' +
    '                <div class="clearfix"></div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <p class="no-data tuts">More tutorials coming soon...</p>\n' +
    '    </div>\n' +
    '</div>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/popular/popular.tpl.html',
    '<div class="trending-results">\n' +
    '    <div class="no-data" data-ng-if="trending.shows.length == 0">There are no popular shows available to display</div>\n' +
    '    <ul class="list-of-shows">\n' +
    '        <li class="col-xs-6 col-md-4 repeat-animation" data-ng-repeat="show in popular.shows">\n' +
    '            <show data-show="show"></show>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/search/search.tpl.html',
    '<div class="search-top">\n' +
    '    <div class="input-group">\n' +
    '        <input type="text" class="form-control input-lg" data-ng-model="search.query" data-ng-enter="search.setSearch()">\n' +
    '        <span class="input-group-btn">\n' +
    '            <button class="btn btn-info btn-lg search-btn" type="button" data-ng-disabled="!search.query" data-ng-click="search.setSearch()"><span class="glyphicon glyphicon-search"></span> Search</button>\n' +
    '        </span>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="search-results">\n' +
    '    <div class="no-data" data-ng-if="search.loading == null">Use the search box above to find your favorite TV shows</div>\n' +
    '    <div class="no-data" data-ng-if="search.shows.length == 0 && search.loading == false">Your search did not return any results</div>\n' +
    '    <div class="throbber" data-ng-show="search.loading"></div>\n' +
    '    <ul class="list-of-shows" data-ng-show="search.loading == false">\n' +
    '        <li class="col-xs-6 col-md-4 repeat-animation" data-ng-repeat="show in search.shows">\n' +
    '            <show data-show="show"></show>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/premieres/premieres.tpl.html',
    '<ul class="list-of-shows">\n' +
    '    <li class="col-xs-6 col-md-4" data-ng-repeat="show in premieres.shows">\n' +
    '        <show data-show="show"></show>\n' +
    '    </li>\n' +
    '</ul>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('sections/view/view.tpl.html',
    '<div class="view-banner" preload-bg-image="http://image.tmdb.org/t/p/original/{{view.show.backdrop_path}}" default-image="assets/images/shattered.png"></div>\n' +
    '<div class="view-title">\n' +
    '    <div class="container">\n' +
    '        {{view.show.original_name}} ({{view.show.first_air_date | amDateFormat:\'YYYY\'}})\n' +
    '        <ul class="pull-right">\n' +
    '            <li><span class="icon icon-heart3"></span> {{view.show.vote_average}}</li>\n' +
    '            <li><span class="icon icon-tags"></span> <span data-ng-repeat="genre in view.show.genres">{{genre.name}}{{$last ? \'\' : \', \'}}</span> </li>\n' +
    '            <li><span class="icon icon-info2"></span> {{view.show.status}}</li>\n' +
    '        </ul>\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="view-container">\n' +
    '    <h2>Show Summary</h2>\n' +
    '    <div class="view-section view-top" data-ng-switch="view.show.overview != null">\n' +
    '        <div class="poster"><img preload-image default-image="assets/images/loading.jpg" fallback-image="assets/images/fallback-thin.jpg" data-ng-src="http://image.tmdb.org/t/p/w342/{{view.show.poster_path}}" /></div>\n' +
    '        <p data-ng-switch-when="true">{{view.show.overview}}</p>\n' +
    '        <p data-ng-switch-when="false" class="no-overview">No overview is available for this show</p>\n' +
    '        <div class="buttons">\n' +
    '            <a href="{{view.show.homepage}}" target="_blank" class="btn btn-lg btn-info"><span class="icon icon-home"></span> Homepage</a>\n' +
    '        </div>\n' +
    '        <div class="clearfix"></div>\n' +
    '    </div>\n' +
    '    <h2>Seasons</h2>\n' +
    '    <div class="view-section" data-ng-switch="view.show.seasons.length > 0">\n' +
    '        <ul class="view-list" data-ng-switch-when="true">\n' +
    '            <li data-ng-repeat="season in view.show.seasons" data-ng-if="season.episode_count > 0">\n' +
    '                <img preload-image default-image="assets/images/loading.jpg" fallback-image="assets/images/fallback-thin.jpg" data-ng-src="http://image.tmdb.org/t/p/w185/{{season.poster_path}}" />\n' +
    '                <div class="item-info">\n' +
    '                    <div class="col-md-2">#{{season.season_number}}</div>\n' +
    '                    <div class="col-md-10">Episode Count: {{season.episode_count}}</div>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <p class="no-data" data-ng-switch-when="false">No season information available</p>\n' +
    '    </div>\n' +
    '    <!-- Information available through additional API calls -->\n' +
    '    <h2>Cast</h2>\n' +
    '    <div class="view-section cast-container" data-ng-switch="view.show.cast.length > 0">\n' +
    '        <ul class="view-list" data-ng-switch-when="true">\n' +
    '            <li data-ng-repeat="actor in view.show.cast">\n' +
    '                <img preload-image default-image="assets/images/loading.jpg" fallback-image="assets/images/fallback-thin.jpg" data-ng-src="http://image.tmdb.org/t/p/w185/{{actor.profile_path}}" />\n' +
    '                <div class="item-info">\n' +
    '                    {{actor.name}} as <br />\n' +
    '                    <strong>{{actor.character}}</strong>\n' +
    '                </div>\n' +
    '            </li>\n' +
    '        </ul>\n' +
    '        <p class="no-data" data-ng-switch-when="false">No cast information available</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();
