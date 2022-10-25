## NPM Sensitive words package
from: https://egghead.io/lessons/javascript-add-version-control-to-npm-packages-using-git-init

# Example
```shell
  $ npm install sensitive-words --save-dev
```

```javascript
const { sensitiveWords } = require('2d-sensitive-words');

const filtered = 
  sensitiveWords(
    'The new FIFA 23 Game will include the Qatar world cup', 
    ['cup', 'FIFA']
  );
  /// The new ***** 23 Game will include the Qatar world *****

```

