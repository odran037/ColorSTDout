```
  _____      _            _____ _______ _____              _     _       
 / ____|    | |          / ____|__   __|  __ \            | |   (_)      
| |     ___ | | ___  _ _| (___    | |  | |  | | ___  _   _| |_   _ ___   
| |    / _ \| |/ _ \| '__\___ \   | |  | |  | |/ _ \| | | | __| | / __|  
| |___| (_) | | (_) | |  ____) |  | |  | |__| | (_) | |_| | |_ _| \__ \  
 \_____\___/|_|\___/|_| |_____/   |_|  |_____/ \___/ \__,_|\__(_) |___/  
                                                               _/ |      
                                                              |__/       
```

## A very simple and easy to use console.log styling tool.*

### Installation

`npm install ColorSTDout`

`const ColorSTDout = require('nodejs-colorstdout');`

### Usage
`ColorSTDout('My message', {style: 'bold', fgcolor: 'green', bgcolor: 'blue'})`

For multiple styles on the same line add true at the end of the function call and save to a variable:

`let str1 = ColorSTDout('GreenBG and BlueFG', {style: 'bold', fgcolor: 'blue', bgcolor: 'green'}, true);`

`let str2 = ColorSTDout('BlueBG and GreenFG', {style: 'bold', fgcolor: 'green', bgcolor: 'blue'}, true);`

`console.log(str1, str2);`

Style options
- bold
- dim
- italic
- underline
- reverse

Color options
 - Foreground
    - black
    - red
    - green
    - yellow
    - blue
    - magenta
    - cyan
    - white

- Background
    - black
    - red
    - green
    - yellow
    - blue
    - magenta
    - cyan
    - white

### Example

```
const LOGO = `
  _____      _            _____ _______ _____              _     _     
 / ____|    | |          / ____|__   __|  __ \            | |   (_)    
| |     ___ | | ___  _ _| (___    | |  | |  | | ___  _   _| |_   _ ___ 
| |    / _ \| |/ _ \| '__\___ \   | |  | |  | |/ _ \| | | | __| | / __|
| |___| (_) | | (_) | |  ____) |  | |  | |__| | (_) | |_| | |_ _| \__ \
 \_____\___/|_|\___/|_| |_____/   |_|  |_____/ \___/ \__,_|\__(_) |___/
                                                               _/ |    
                                                              |__/     
`;
const DESCRIPTION = 'A very simple and easy to use console.log styling tool.\n\nSee documentation at:';
const URL = 'https://colorstdoutjs.glitch.me'
ColorSTDout('LOGO', {});
ColorSTDout(DESCRIPTION, { style: 'bold', fgcolor: 'white', bgcolor: 'blue' });
ColorSTDout(URL, { style: 'bold', fgcolor: 'green', bgcolor: 'black' });
```

### See also

- StyleCL.js [https://stylecljs.glitch.me](https://stylecljs.glitch.me)


---

Made by leonardoprates.github.io
