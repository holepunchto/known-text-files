# known-text-files

> List of plain text file extensions, extensionless files and dotfiles

```
npm install known-text-files
```

## Usage

Extensions and dotfiles include the leading dot (e.g. `'.txt'`, `'.gitignore'`), all values are stored in lowercase strings.

The default export is a merged array of all categories: `extensions`, `dotfiles`, and `files`.

```js
const knownTextFiles = require('known-text-files')
const { extensions, dotfiles, files } = require('known-text-files')
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
