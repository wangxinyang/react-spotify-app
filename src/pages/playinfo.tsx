/* eslint-disable react/no-unescaped-entities */
import { Play, Favourite, Dot, Clock } from '@/assets/svg'
import styled from '@emotion/styled'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PlayInfoContainer = styled('div')({
  position: 'relative',
  backgroundColor: '#131313',
  height: '100vh',
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
  height: 'calc(100vh - 315px)',
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

function PlayInfo() {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { id: '#', name, calories, fat, carbs, protein }
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]

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
            PIECE」映画作品の主題歌集。The official playlist for "ONE PIECE FILM
            RED". ©尾田栄一郎／2022「ワンピース」製作委員会
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
                <Favourite fill="hsla(0,0%,100%,.7)" />
              </CustomizedButton>
              <CustomizedButton>
                <Dot fill="hsla(0,0%,100%,.7)" />
              </CustomizedButton>
            </PlaySongHandle>
          </PlaySongHandleContainer>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>タイトル</TableCell>
                  <TableCell>アルバム</TableCell>
                  <TableCell>追加日</TableCell>
                  <TableCell>
                    <Clock />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PlaySongBody>
      </PlayListSongs>
    </PlayInfoContainer>
  )
}

export default PlayInfo
