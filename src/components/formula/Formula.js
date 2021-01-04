import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  toHTML() {
    // return super.toHTML();
    return '<div class="info">fx</div>\n' +
        // eslint-disable-next-line max-len
        '<div class="input" contenteditable="true" spellcheck="false"></div>'
  }
}
