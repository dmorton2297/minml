import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * @hidden
 */
export class ColorService {

  constructor() { }

  // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
  public invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r, r.length) + this.padZero(g, g.length) + this.padZero(b, b.length);
  }

  // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
  public padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  public componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

public rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
}

}
