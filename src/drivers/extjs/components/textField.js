'use strict'

import {ExtJsComponentBase} from './base.js'

export class ExtJsComponentTextField extends ExtJsComponentBase {

  get titleProperties () {
    return ['fieldLabel', ...super.titleProperties]
  }

  generateSelectors (titleOrSelector) {
    return [
      `${this.componentType}[fieldLabel~="${titleOrSelector}"]`,
      ...super.generateSelectors(titleOrSelector)
    ]
  }

}
