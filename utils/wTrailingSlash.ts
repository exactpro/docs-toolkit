import { withTrailingSlash } from 'ufo'

function wTrailingSlash(str: string): string {

  const result = withTrailingSlash(str)
  return result
}

export default wTrailingSlash