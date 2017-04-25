# bem-js

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Installation:
```
$ yarn add bem-js
```

Usage:
```javascript
import BEM from 'bem-js';

// Chaining
BEM.block('foo'); // foo
BEM.block('foo').element('bar'); // foo__bar

// In variable
const foo = BEM.block('foo');

foo.element('bar'); // foo__bar
foo.element('baz'); // foo__baz
foo.modifier('far'); // foo foo--far
foo.element('bar').modifier('baz'); // foo__bar foo__bar--baz

// Using conditions
foo.element('bar').modifier('baz', false); // foo__bar
foo.element('bar').modifier('baz', true); // foo__bar foo__bar--baz
foo.modifier('far', false); // foo

// Shorthand
BEM.b('foo').e('bar').m('baz', true); // foo__bar foo__bar--baz

// Multiple conditions using (https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
foo.element('bar').modifier('baz', [true, true].every(t => !!t)); // foo__bar foo__bar--baz

// Multiple modifiers
BEM.b('foo').e('bar').m({
  'baz-1': true,
  'baz-2': false,
  'baz-3': true
}); // foo__bar foo__bar--baz-1 foo__bar--baz-3
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
