import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  return await serverQueryContent(event)
    .only(['_path', 'title', '_partial'])
    .find()
})
