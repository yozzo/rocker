import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

//App = Ember.Application.create();

var blackDog =  {
    title: 'Black Dog',
    band: 'Led Zeppelin',
    rating: 3
};

var yellowLedbetter = {
    title: 'Yellow Ledbetter',
    band: 'Pearl Yams',
    rating: 4
};

var pretender = {
    title: 'The Pretender',
    band: 'Foo Fighters',
    rating: 2
};

var songs = [blackDog, yellowLedbetter, pretender];

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return songs;
    }
});




