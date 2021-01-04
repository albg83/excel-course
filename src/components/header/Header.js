import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    // return super.toHTML();
    // eslint-disable-next-line max-len
    return '<input type="text" class="input" value="Новая таблица"></input>\n' +
        '            <div>\n' +
        '                <div class="button">\n' +
        '                    <i class="material-icons">delete</i>\n' +
        '                </div>\n' +
        '                <div class="button">\n' +
        '                    <i class="material-icons">exit_to_app</i>\n' +
        '                </div>\n' +
        '            </div>'
  }
}
