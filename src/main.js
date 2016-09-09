import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-firebase', baseConfig => {
      baseConfig.configure({
        apiKey: 'AIzaSyC373ylG9TII68H3Xua_nS2dVI0ihaCgZs',
        authDomain: 'warper.firebaseapp.com',
        databaseURL: 'https://warper.firebaseio.com',
        storageBucket: 'project-313180311630044673.appspot.com'
      });
    })
    .plugin('persistence', baseConfig => {
      baseConfig.configure({
        baseUrl: 'https://warper.firebaseio.com',
        queryEntityMapperFactory: Entity => {
          return obj => {
            let map = new Map();
            for (let key in obj) {
              map.set(obj[key], Entity);
            }
            return map;
          }
        }
      });
    });

  aurelia.start().then(() => aurelia.setRoot());
}
