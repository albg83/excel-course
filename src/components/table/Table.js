import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    // return super.toHTML();
    return '<div class="row">\n' +
        '                <div class="row-info">\n' +
        '                </div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="column">A</div>\n' +
        '                    <div class="column">B</div>\n' +
        '                    <div class="column">C</div>\n' +
        '                </div>\n' +
        '            </div>' +
        '<div class="row">\n' +
        '                <div class="row-info">\n' +
        '                    1\n' +
        '                </div>\n' +
        '                <div class="row-data">\n' +
        '                    <div class="cell" contenteditable="">A1</div>\n' +
        '                    <div class="cell" contenteditable="">B2</div>\n' +
        '                    <div class="cell" contenteditable="">C3</div>\n' +
        '                </div>\n' +
        '            </div>'
  }
}
