/*
 * Copyright 2023 Exactpro (Exactpro Systems Limited)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { withTrailingSlash } from 'ufo'

export const getBreadCrumbs = async () => {
  // find the route using useRoute
  const currentpath = useRoute().path
  
  // split the path into sections using split which returns an array
  const splitpath = currentpath.split('/')

  // find the length of the array
  const splitpathLength = splitpath?.length

  // assign the home directory
  const home = '/'

  // create a directory object
  const directory = [home]

  // create an array of paths
  let w = home

  for (let i = 1; i < splitpathLength; i++) {
    if (currentpath !== '/') {
      w = withTrailingSlash(w + splitpath[i])
      directory.push(w)
    }
  }

  // create extract titles and the path and create an array of promises
  const promises = await Promise.all(
    directory.map((path) =>
      queryContent(path).only(['_path', 'title']).findOne()
    )
  )

  // return
  return promises
}
