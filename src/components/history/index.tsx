import { IContentChatGPT } from 'commons'
import MyTable, { IMyColumns } from 'components/table'
import React, { useEffect, useState } from 'react'
import { getListContentChatGPT } from 'service'

export default function HistoryComponent() {
  const [loading, setLoading] = useState<boolean>(true)
  const columns: IMyColumns[] = [
    {
      key: "keyWord",
      title: "Keyword"
    },
    {
      key: "description",
      title: "Description"
    }
  ]
  const [dataSrc, setDataSrc] = useState<IContentChatGPT[]>([])
  useEffect(() => {
    setLoading(true)
    getListContentChatGPT().then(data => {
      setDataSrc(data)
      setLoading(false)
    })
  }, [])
  return (
    <div>
      {loading ? <div className="loader"></div> : <MyTable columns={columns} dataSource={dataSrc} />}
    </div>
  )
}
