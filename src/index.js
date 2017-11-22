/**
 * Copyright (c) 2017-present, Digirati Limited.
 * All rights reserved.
 */

const BEM = {
  block: (b) => {
    const modifier = function (m, c) {
      if (m.toString() === '[object Object]') return this.ms(m);
      if (!c && c !== undefined) {
        return this;
      }
      return `${this} ${this}--${m}`;
    };
    const modifiers = function (m, join = true) {
      let ms = [this];
      for (let k in m) {
        if (m.hasOwnProperty(k) && m[k]) {
          ms.push(`${this}--${k}`);
        }
      }
      return join ? ms.join(' ') : ms;
    };
    // Block.Element
    b.__proto__.e = b.__proto__.element = function (e) {
      const be = `${this}__${e}`;
      // Block.Element.Modifier
      be.__proto__.m = be.__proto__.modifier = modifier;
      be.__proto__.ms = be.__proto__.modifiers = modifiers;
      return be;
    };
    // Block.Modifier
    b.__proto__.m = b.__proto__.modifier = modifier;
    // Block.Modifier
    b.__proto__.ms = b.__proto__.modifiers = modifiers;
    // Block.
    return b;
  },
};
BEM.b = BEM.block;

export default BEM;
