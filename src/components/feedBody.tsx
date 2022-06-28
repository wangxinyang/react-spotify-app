import React, { useEffect, useState } from 'react'
import { styled, Typography } from '@mui/material'
import { get } from '@/http'
import { Play } from '@/assets/svg'

const ListItemBody = styled('div')({
  display: 'flex',
  margin: '20px 20px',
})

const ListItem = styled('div')({
  width: '220px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#282828',
    cursor: 'pointer',
    transition: 'background-color .3s ease',
    '#playbutton': {
      display: 'block',
      // display none→blockする時、動画を利用した。transitionはここで利用不可になります
      animation: 'anBox .5s',
    },
    '@keyframes anBox': {
      from: {
        opacity: 0,
        bottom: 0,
      },
      to: {
        opacity: 1,
        bottom: '15px',
      },
    },
  },
})

const ListItemCenter = styled('div')({
  width: '100%',
  padding: '20px',
})

const PlayListImageContainer = styled('div')({
  position: 'relative',
})

const CustomizedImage = styled('img')({
  width: '173px',
})

const PlayContainer = styled('div')({
  display: 'none',
  position: 'absolute',
  right: '15px',
  bottom: '15px',
  '&:hover': {
    transform: 'scale(1.04)',
  },
})

const CustomizedPlayButton = styled('div')({
  width: '48px',
  height: '48px',
  position: 'relative',
  backgroundColor: '#1ed760',
  borderRadius: '24px',
})

const CustomizedPlay = styled(Play)({
  position: 'absolute',
  right: '12px',
  bottom: '12px',
})

const CustomizedTypography = styled(Typography)({
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: '700',
})

const CustomizedSmallTypography = styled(CustomizedTypography)({
  marginTop: '10px',
  fontSize: '14px',
  fontWeight: '400',
  color: 'rgb(167, 167, 167)',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
})

type FeedBodyProps = {
  cat: string
  limit?: number
}

type PlayInfo = {
  id: number
  coverwriter: string
  coverImgUrl: string
  name: string
  description: string
}

type PlayList = {
  playlists: PlayInfo[]
}

function FeedBody({ cat, limit = 7 }: FeedBodyProps) {
  const [playlists, setPlayLists] = useState<PlayInfo[] | null>(null)

  useEffect(() => {
    get<PlayList>('/top/playlist/highquality', { cat, limit }).then(
      (response) => {
        const playListResponse = response.data
        if (playListResponse) setPlayLists(playListResponse.playlists)
      }
    )
  }, [cat])
  return (
    <ListItemBody>
      {playlists?.map((playlist) => (
        <ListItem key={playlist.id}>
          <ListItemCenter>
            <PlayListImageContainer>
              <CustomizedImage src={playlist.coverImgUrl} alt="" />
              <PlayContainer id="playbutton">
                <CustomizedPlayButton>
                  <CustomizedPlay />
                </CustomizedPlayButton>
              </PlayContainer>
            </PlayListImageContainer>
            <CustomizedTypography variant="h5">
              {playlist.name}
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              {playlist.description}
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      ))}
    </ListItemBody>
  )
}

export default FeedBody
