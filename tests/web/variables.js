
export const appSettings = {
    baseUrl: 'http://localhost:8080',
    loginUrl: '/login.html', // use 'login.html' or '/' depending on the Login page used in StudioPro
    // environment: "localhost",
    // baseUrl: getAppUrl(environment),  // TBD - AppUrl dinamic ?
};

// should we consider different UserRoles and iterate through them?
export const credentials = {
  username: "demo_user",
  password: "G5nniVpD7U",
};

export const testSpecsFlow = [
  //     './test/specs/**/*.js' // run all test directly
  "./web/specs/mxs-09.js",
  "./web/specs/mxs-10.js",
  "./web/specs/mxs-11.js",
  "./web/specs/mxs-12.js",
  "./web/specs/mxs-13.js",
  "./web/specs/mxs-14.js",
  "./web/specs/mxs-15.js",
  "./web/specs/mxs-16.js",
];
