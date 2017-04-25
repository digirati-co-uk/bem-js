import expect from 'expect';

import BEM from 'src/index';

describe('BEM js', () => {
  it('create block', () => {
    expect(`${BEM.block('test-block')}`).toEqual('test-block');
    expect(`${BEM.b('test-block')}`).toEqual('test-block');
  });
  it('create element', () => {
    const testBlock = BEM.block('test-block');
    expect(`${testBlock.element('test-element')}`).toEqual('test-block__test-element');
    expect(`${testBlock.e('test-element')}`).toEqual('test-block__test-element');
  });
  it('create element with modifiers', () => {
    const testBlock = BEM.block('test-block');
    expect(`${testBlock.modifier('test-modifier')}`).toEqual('test-block test-block--test-modifier');
  });
  it('create element with modifiers conditionally', () => {
    const testBlock = BEM.block('test-block');
    expect(`${testBlock.modifiers({
      'not-modifier': false,
      'test-modifier': true,
      'also-not-modifier': false,
      'test-modifier2': true,
    })}`).toEqual('test-block test-block--test-modifier test-block--test-modifier2');
  });
  it('create with element modifier', () => {
    const testBlock = BEM.block('test-block');
    expect(`${testBlock.element('test-element').modifier('test-modifier')}`)
      .toEqual('test-block__test-element test-block__test-element--test-modifier');

    expect(`${testBlock.element('test-element').modifiers({'test-modifier': true, 'test-modifier2': true})}`)
      .toEqual('test-block__test-element test-block__test-element--test-modifier test-block__test-element--test-modifier2');
  });
  it('create with element modifier conditionally', () => {
    const testBlock = BEM.block('test-block');
    expect(`${testBlock.element('test-element').modifiers({
      'not-modifier': false,
      'test-modifier': true,
      'also-not-modifier': false,
      'test-modifier2': true,
    })}`)
      .toEqual('test-block__test-element test-block__test-element--test-modifier test-block__test-element--test-modifier2');
  });

});
