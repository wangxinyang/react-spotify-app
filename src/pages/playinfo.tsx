import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { Typography } from '@mui/material'

import { Play, Favourite, Dot, Clock, Options } from '@/assets/svg'

const PlayInfoContainer = styled('div')({
  position: 'relative',
  backgroundColor: '#131313',
  height: '100%',
})

const PlayListImage = styled('div')({
  width: '100%',
})

const PlayBackgroundPic = styled('div')({
  width: '100%',
  backgroundImage:
    'url(https://i.scdn.co/image/ab6768640000fe89bc28e28d2e5c6c8ca5a93541)',
  backgroundPosition: '50% 15%',
  backgroundRepeat: ' no-repeat',
  backgroundSize: 'cover',
  contain: 'strict',
  contentVisibility: 'auto',
  height: '40vh',
  minHeight: '340px',
})

const PlayBackgroundPicMask = styled('div')({
  background: 'linear-gradient(transparent 0,rgba(0,0,0,.5) 100%)',
  left: 0,
  position: 'absolute',
  top: 0,
  contain: 'strict',
  contentVisibility: 'auto',
  height: '40vh',
  minHeight: '340px',
  width: '100%',
})

const PlayListSongs = styled('div')({
  width: '100%',
  height: '100vh',
})

const PlaySongTitle = styled('div')({
  position: 'absolute',
  top: '150px',
  left: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  color: 'white',
})

const PlaySongsSocial = styled('div')({
  display: 'flex',
  marginTop: '8px',
})

const PlaySongsSocialSpan = styled('span')({
  fontSize: '14px',
  lineHeight: '20px',

  a: {
    color: 'white',
    textDecorationLine: 'none',

    'a:hover': {
      textDecorationLine: 'display',
    },
  },
})

const PlaySongBody = styled('div')({
  backgroundColor: '#121212',
  height: '100%',
})

const PlaySongHandleContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px 32px',
})

const PlaySongHandle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

const CustomizedPlayButton = styled('div')({
  width: '48px',
  height: '48px',
  position: 'relative',
  backgroundColor: '#1ed760',
  borderRadius: '24px',
  marginRight: '24px',
})

const CustomizedPlay = styled(Play)({
  position: 'absolute',
  right: '12px',
  bottom: '12px',
})

const CustomizedButton = styled('div')({
  background: 'transparent',
  marginRight: '24px',
})

const PlaySongTable = styled('div')({
  border: '1px solid transparent',
  borderRadius: '4px',
  outline: 0,
})

const PlaySongTableTitleContainer = styled('div')({
  position: 'sticky',
  height: '36px',
  borderBottom: '1px solid transparent',
  boxSizing: 'content-box',
  margin: '0 -32px 16px',
  padding: '0 32px',
  top: '64px',
})

const PlaySongTableTitle = styled('div')({
  display: 'grid',
  gridTemplateColumns:
    '[index] 16px [first] 6fr [var1] 5fr [var2] 3fr [last] minmax(120px,2fr)',
  color: '#b3b3b3',
  height: '100%',
  padding: '0 16px',
  fontSize: '12px',
  borderBottom: '1px solid #3F2428',
})

const PlaySongTableBody = styled('div')({
  height: '100%',
})

const PlaySongTableBodyGrid = styled(PlaySongTableTitle)({
  border: '1px solid transparent',
  borderRadius: '4px',
  height: '56px',
  fontSize: '16px',
  '#fav': {
    display: 'none',
  },
  '#option': {
    display: 'none',
  },
  '&:hover': {
    color: 'white',
    backgroundColor: 'hsla(0,0%,100%,.1)',
    '#fav': {
      display: 'block',
    },
    '#option': {
      display: 'block',
    },
  },
})

const FlexDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

const CustomizedDot = styled(Dot)({
  '&:hover': {
    fill: 'white',
  },
})

const CustomizedFav = styled(Favourite)({
  '&:hover': {
    fill: 'white',
  },
})

function PlayInfo() {
  const [playList, setPlayList] = useState(null)

  // useEffect(() => {}, [])

  return (
    <PlayInfoContainer>
      <PlayListImage>
        <PlayBackgroundPic />
        <PlayBackgroundPicMask />
      </PlayListImage>
      <PlayListSongs>
        <PlaySongTitle>
          <Typography variant="h2" sx={{ fontSize: '12px' }}>
            プレイリスト
          </Typography>
          <Typography variant="h1" component="span">
            ONE PIECE FILM RED
          </Typography>
          <Typography variant="h2" component="p" sx={{ fontSize: '16px' }}>
            8月6日公開『ONE PIECE FILM RED』公式プレイリスト。「ONE
            PIECE」映画作品の主題歌集。The official playlist
          </Typography>
          <PlaySongsSocial>
            <PlaySongsSocialSpan>
              <Link to={'/'}>Spotify</Link>
            </PlaySongsSocialSpan>
            <Typography variant="h6" component="span" sx={{ fontSize: '14px' }}>
              20,378 人がいいね！
            </Typography>
            <Typography variant="h6" component="span" sx={{ fontSize: '14px' }}>
              18 曲1 時間 12 分
            </Typography>
          </PlaySongsSocial>
        </PlaySongTitle>
        <PlaySongBody>
          <PlaySongHandleContainer>
            <PlaySongHandle>
              <CustomizedPlayButton>
                <CustomizedPlay />
              </CustomizedPlayButton>
              <CustomizedButton>
                <CustomizedFav fill="hsla(0,0%,100%,.7)" />
              </CustomizedButton>
              <CustomizedButton>
                <CustomizedDot fill="hsla(0,0%,100%,.7)" />
              </CustomizedButton>
            </PlaySongHandle>
          </PlaySongHandleContainer>
          <PlaySongTable>
            <PlaySongTableTitleContainer>
              <PlaySongTableTitle>
                <FlexDiv>#</FlexDiv>
                <FlexDiv>タイトル</FlexDiv>
                <FlexDiv>アルバム</FlexDiv>
                <FlexDiv>追加日</FlexDiv>
                <FlexDiv>
                  <Clock fill="hsla(0,0%,100%,.7)" />
                </FlexDiv>
              </PlaySongTableTitle>
              <PlaySongTableBody>
                <PlaySongTableBodyGrid>
                  <FlexDiv>
                    <span>1</span>
                  </FlexDiv>
                  <FlexDiv>
                    <img
                      style={{
                        height: '45px',
                        width: '45px',
                        margin: '0 15px',
                      }}
                      src="https://i.scdn.co/image/ab67616d0000485140e712522c3284b637fd23b5"
                      alt=""
                    />
                    <span>ルフィからのスペシャルメッセージ!</span>
                  </FlexDiv>
                  <FlexDiv>
                    <span>
                      『ONE PIECE FILM RED』ルフィからのスペシャルメッセージ!
                    </span>
                  </FlexDiv>
                  <FlexDiv>
                    <span>7 日前</span>
                  </FlexDiv>
                  <FlexDiv style={{ gap: 20 }}>
                    <Favourite id="fav" fill="hsla(0,0%,100%,.7)" />
                    <span>0:32</span>
                    <Options id="option" fill="hsla(0,0%,100%,.7)" />
                  </FlexDiv>
                </PlaySongTableBodyGrid>
                <PlaySongTableBodyGrid>
                  <FlexDiv>
                    <span>2</span>
                  </FlexDiv>
                  <FlexDiv>
                    <img
                      style={{
                        height: '45px',
                        width: '45px',
                        margin: '0 15px',
                      }}
                      src="https://i.scdn.co/image/ab67616d0000485140e712522c3284b637fd23b5"
                      alt=""
                    />
                    <span>ルフィからのスペシャルメッセージ!</span>
                  </FlexDiv>
                  <FlexDiv>
                    <span>
                      『ONE PIECE FILM RED』ルフィからのスペシャルメッセージ!
                    </span>
                  </FlexDiv>
                  <FlexDiv>
                    <span>7 日前</span>
                  </FlexDiv>
                  <FlexDiv style={{ gap: 20 }}>
                    <Favourite id="fav" fill="hsla(0,0%,100%,.7)" />
                    <span>0:32</span>
                    <Options id="option" fill="hsla(0,0%,100%,.7)" />
                  </FlexDiv>
                </PlaySongTableBodyGrid>
              </PlaySongTableBody>
            </PlaySongTableTitleContainer>
          </PlaySongTable>
        </PlaySongBody>
      </PlayListSongs>
    </PlayInfoContainer>
  )
}

export default PlayInfo
