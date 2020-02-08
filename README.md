# header-accept-language-parser
Parse the accept-language header from a HTTP request

## API
**parser.parse(headers['accept-language'])**

```
const parser = require('accept-language-parser');
const languages = parser.parse('ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7');
console.log(languages);
```

Output will be:

```
[
  {
    lang: "en",
    region: undefined,
    quality: 0.7
  },
  {
    code: "en",
    region: "US",
    quality: 0.8
  },
  {
    lang: "ru",
    region: undefined,
    quality: 0.9
  },
  {
    code: "ru",
    region: "RU",
    quality: 0.9
  }
];
```
