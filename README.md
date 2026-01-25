# known-text-files

> Combined list of plain text file extensions, common extensionless files and dotfiles

```
npm install known-text-files
```

## Usage

```js
const knownTextFiles = require('known-text-files')
```

```js
knownTextFiles.includes('.txt') // true
knownTextFiles.includes('.pdf') // false
knownTextFiles.includes('dockerfile') // true
knownTextFiles.includes('.gitignore') // true
```

For faster `O(1)` lookups use a `Set`:

```js
const knownSet = new Set(knownTextFiles)
knownSet.has('.txt') // true
```

See also [is-text-file](https://github.com/holepunchto/is-text-file) for a high-level API.

## License

Apache-2.0
