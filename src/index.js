/**
 * Copyright (c) 2017-present, Digirati Limited.
 * All rights reserved.
 */

class Element {
  constructor(name) {
    this.name = name;
  }

  modifier(m, c) {
    if (m.toString() === '[object Object]') return this.ms(m);
    if (!c && c !== undefined) {
      return this.name;
    }
    return `${this.name} ${this.name}--${m}`;
  }

  m(m, c) {
    this.modifier(m, c);
  }

  modifiers(m, join = true) {
    let ms = [this.name];
    for (let k in m) {
      if (m.hasOwnProperty(k) && m[k]) {
        ms.push(`${this.name}--${k}`);
      }
    }
    return join ? ms.join(' ') : ms;
  }

  ms(m, join) {
    this.modifiers(m, join);
  }

  toString() {
    return this.name;
  }
}

class Block extends Element {
  element(name) {
    return new Element(`${this.name}__${name}`);
  }
  e = this.element;
}

const BEM = {
  block: blockName => {
    // Block.
    return new Block(blockName);
  },
};

BEM.b = BEM.block;

export default BEM;
