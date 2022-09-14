import { render } from 'amis'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { makeEnv } from '../utils'

export default function PageShow() {
  let { pageId } = useParams()
  let [schema, setSchema] = useState({
    type: 'page',
    body: {}
  })
  useEffect(() => {
    if (pageId) {
      let pageData = localStorage.getItem(`editor-page-${pageId}`)
      let pageSchema = pageData && JSON.parse(pageData)
      setSchema(pageSchema)
    }
  }, [pageId])

  return (
    <div>{
      render(schema, {}, makeEnv({}))
    }</div>
  )
}