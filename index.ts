/// <reference path='./node_modules/immutable/dist/immutable.d.ts' />
/// <reference path='./node_modules/immutable/contrib/cursor/index.d.ts' />

import * as Immutable from 'immutable';
import * as Cursor from 'immutable/contrib/cursor';

let map = Immutable.Map();
let cursor = Cursor.from(map, (newMap) => {
  console.log(newMap.toJS());
});
map.set('test', 'test');
