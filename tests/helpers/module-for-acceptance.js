import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      this.application = startApp();
      TestHelper.setup();

      if (options.beforeEach) {
        options.beforeEach.apply(this, arguments);
      }
    },

    afterEach() {
      TestHelper.teardown();

      if (options.afterEach) {
        options.afterEach.apply(this, arguments);
      }
      destroyApp(this.application);
    }
  });
}
