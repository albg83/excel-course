import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    })
  }

  toHTML() {
    // return super.toHTML();
    return '<div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '<div class="input" contenteditable="true" spellcheck="false"></div>'
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim())
  }

  onClick() {}
}
