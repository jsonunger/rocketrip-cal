# Rocketrip Calendar Technical Assessment

### Installation Instructions
```bash
$ npm install
$ npm start
$ open http://localhost:3000
```
The project uses Webpack for bundling. Once the console logs that the bundle has been built the app should be accessible.

### Technology Used
- React
- Redux
- SASS
- Gulp
- Webpack
- Karma, Mocha, Chai, Sinon
- Fetch

### App Features
- Events are pulled down from `JSONBlob.com` upon the app mounting.
- The current date is highlighted at all times.
- Events that have overlapping times will cascade to the right in the current iteration
- Move back or forward one shift in the current view by clicking the corresponding buttons
- The button between the navigation buttons will toggle the view between `Day` and `Week`.
- The `Today` button will jump to the range with the current date in whichever view is active.

### Running Tests
```bash
$ npm test
```
*There is a known warning that is logged during the test, but it is not an error

### Next Steps
- Refactor SASS to use `@mixin`s and `@extend`s to better modularize duplicated code
- Redesign the event overlap algorithm to better account for events with the same time
- Determine which React components can be extrapolated as static, stateless components if seen in multiple places
- Implement the ability to add events using either a modal or a "Quick Event" add similar to Google Calendar and Apple Calendar
- Implement all day events
- More tests (there's always room for more tests)


