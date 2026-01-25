/**
 * List of plain text file extensions, extensionless files and dotfiles.
 */
declare const knownTextFiles: string[] & {
  /**
   * Known text file extensions (include the leading dot).
   */
  extensions: string[]
  /**
   * Known dotfiles (include the leading dot).
   */
  dotfiles: string[]
  /**
   * Known extensionless files.
   */
  files: string[]
}

export = knownTextFiles
