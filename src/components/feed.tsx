import React from 'react'
import { Button, styled, Typography } from '@mui/material'

const FeedContainer = styled('div')({
  backgroundColor: '#131313',
  minHeight: '100%',
})

const ListContainer = styled('div')({})

const ListItemHead = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

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
  },
})

const ListItemCenter = styled('div')({
  width: '100%',
  padding: '20px',
})

const CustomizedImage = styled('img')({
  width: '173px',
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
})

const Feed = () => (
  <FeedContainer>
    <ListContainer>
      <ListItemHead>
        <Button sx={{ color: 'white', fontSize: '24px' }}>
          今週のスポットライト
        </Button>
        <Button sx={{ color: 'white' }}>すべてを表示</Button>
      </ListItemHead>
      <ListItemBody>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      </ListItemBody>
    </ListContainer>
    <ListContainer>
      <ListItemHead>
        <Button sx={{ color: 'white', fontSize: '24px' }}>
          今週のスポットライト
        </Button>
        <Button sx={{ color: 'white' }}>すべてを表示</Button>
      </ListItemHead>
      <ListItemBody>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      </ListItemBody>
    </ListContainer>
    <ListContainer>
      <ListItemHead>
        <Button sx={{ color: 'white', fontSize: '24px' }}>
          今週のスポットライト
        </Button>
        <Button sx={{ color: 'white' }}>すべてを表示</Button>
      </ListItemHead>
      <ListItemBody>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      </ListItemBody>
    </ListContainer>
    <ListContainer>
      <ListItemHead>
        <Button sx={{ color: 'white', fontSize: '24px' }}>
          今週のスポットライト
        </Button>
        <Button sx={{ color: 'white' }}>すべてを表示</Button>
      </ListItemHead>
      <ListItemBody>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      </ListItemBody>
    </ListContainer>
    <ListContainer>
      <ListItemHead>
        <Button sx={{ color: 'white', fontSize: '24px' }}>
          今週のスポットライト
        </Button>
        <Button sx={{ color: 'white' }}>すべてを表示</Button>
      </ListItemHead>
      <ListItemBody>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
        <ListItem>
          <ListItemCenter>
            <CustomizedImage
              src="https://i.scdn.co/image/ab67706f00000002825d6b039af3f648d9c77b53"
              alt=""
            />
            <CustomizedTypography variant="h5">
              Weekly Buzz Tokyo
            </CustomizedTypography>
            <CustomizedSmallTypography variant="h6">
              今週話題になった楽曲をまとめてチェック！Cover: Charlie Puth x Jung
              Kook
            </CustomizedSmallTypography>
          </ListItemCenter>
        </ListItem>
      </ListItemBody>
    </ListContainer>
  </FeedContainer>
)

export default Feed
