# text-file-extensions

> List of common plain-text file extensions

```
npm install text-file-extensions
```

## Usage

Values are stored in an array of lowercase strings without a leading dot, e.g. `txt`

```js
const textFileExtensions = require('text-file-extensions')
```

```js
textFileExtensions.includes('txt') // true
textFileExtensions.includes('pdf') // false
```

For faster `O(1)` lookups use `Set` or use [is-text-file](https://github.com/holepunchto/is-text-file)

```js
const extensionsSet = new Set(textFileExtensions)
extensionsSet.has('txt') // true
extensionsSet.has('pdf') // false
```

## License

Apache-2.0
