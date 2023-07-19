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

export const useBreadcrumbs = () => {
  const currentPath = useRoute().path

  const currentPathSections = currentPath.split('/')

  const pathDirectory: string[] = []

  // fill the pathDirectory with all paths
  let pathToAdd = ''
  if (currentPath !== '/') {
    for (let i = 1; i < currentPathSections?.length; i++) {
        pathToAdd = withTrailingSlash(pathToAdd + currentPathSections[i])
        pathDirectory.push(pathToAdd)
    }
  }

  //  extract titles and its path and create breadcrumbs object
  const breadcrumbs = useAsyncData(
    () => {
      return Promise.all(
        pathDirectory.map((path) =>
          queryContent(path).only(['_path', 'title']).findOne()
        )
      )
    },
    {
      transform: (data) =>
        data.map((item) => ({
          path: item._path,
          title: item.title
        }))
    }
  )
   
  return breadcrumbs
}
