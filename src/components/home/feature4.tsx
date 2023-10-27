import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#00FF00',
    }),
    ...(order === 2 && {
      backgroundColor: '#FF0000',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature4: FC = () => {
  return (
    <Box id="feature4" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/boxs/pakeao.png" width={400} height={478} quality={97} alt="Feature img" />
              <Box
                sx={{
                  position: 'absolute',
                  top: -36,
                  right: { xs: 0, md: -36 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 1.4,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: 190,
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Всего боёв 72
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Выигранные
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={80} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Проигранные
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={20} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Нокауты
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={50} order={3} />
                </Box>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Продуктивность</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    боёв
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      92%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={92}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={2}
                      variant="determinate"
                      value={92}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Мэнни{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Пакьяо <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 155 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Мэнни Пакьяо (род. 1978) - филиппинский боксёр, карьера которого также является невероятной и
              впечатляющей. Пакьяо стал первым боксёром в истории, завоевавшим титулы чемпиона мира в восьми весовых
              категориях. Он известен своими скоростью, мощью и невероятной выносливостью. Пакьяо также является
              активным политиком и культурной фигурой в Филиппинах.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature4
