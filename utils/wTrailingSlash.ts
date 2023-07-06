import { withTrailingSlash } from 'ufo'

function wTrailingSlash(str: string | undefined): string | undefined {
  if (typeof str === 'string') {
    const result = withTrailingSlash(str)
    return result
  } else {
    return undefined
  }
}

export default wTrailingSlash
