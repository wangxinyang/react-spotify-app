import React, { useEffect, useState } from 'react'
import { Button, styled } from '@mui/material'
import { post } from '@/http'
import FeedBody from '@/components/feedBody'

const FeedContainer = styled('div')({
  backgroundColor: '#131313',
  minHeight: '100%',
})

const ListContainer = styled('div')({})

const ListItemHead = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

type Tag = {
  id: number
  name: string
}

type TagList = {
  tags: Tag[]
}

function Feed() {
  const [tags, setTags] = useState([{ id: 0, name: '' }])
  useEffect(() => {
    post<TagList>('/playlist/hot').then((response) => {
      const hotData = response.data
      console.log(hotData)

      if (hotData?.tags) setTags(hotData.tags)
    })
  }, [])

  return (
    <FeedContainer>
      {tags.map((tag) => (
        <ListContainer key={tag.id}>
          <ListItemHead>
            <Button sx={{ color: 'white', fontSize: '24px' }}>
              {tag.name}
            </Button>
            <Button sx={{ color: 'white' }}>すべてを表示</Button>
          </ListItemHead>
          <FeedBody cat={tag.name} />
        </ListContainer>
      ))}
    </FeedContainer>
  )
}

export default Feed
