const ColorSTDout = (function() {
  const styles = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underline: "\x1b[4m",
    reverse: "\x1b[7m"
  };

  const fgcolors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
  };

  const bgcolors = {
    black: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    white: "\x1b[47m"
  };

  const error = function(param) {
    throw new Error(`${param}. See documentation. https://github.com/odran037/ColorSTDout`);
  };

  const isEmpty = function(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  const color = function(str, options={}, inline=false) {
    if (typeof str !== 'string') {
      return error('Input must be a string.')
    }
    
    if (isEmpty(options)) {
      if (inline) {
        return str;
      } else {
        console.log(str);
        return;
      }
    }

    let selectedOptions = '';

    if (options.style) {
      if (styles.hasOwnProperty(options.style)) {
        selectedOptions += styles[options.style];
      } else {
        return error('Style not found');
      }
    }

    if (options.fgcolor) {
      if (fgcolors.hasOwnProperty(options.fgcolor)) {
        selectedOptions += fgcolors[options.fgcolor];
      } else {
        return error('FG Color not found');
      }
    }

    if (options.bgcolor) {
      if (bgcolors.hasOwnProperty(options.bgcolor)) {
        selectedOptions += bgcolors[options.bgcolor];
      } else {
        return error('BG Color not found');
      }
    }

    let result = `${selectedOptions}${str}${styles.reset}`;

    if (inline) {
      return result;
    } else {
      console.log(result);
      return;
    }
  }

  return color;
})();

module.exports = ColorSTDout;

