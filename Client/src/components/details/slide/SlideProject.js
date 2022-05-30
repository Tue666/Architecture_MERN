import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Stack } from '@mui/material';

const SlideProject = ({ images }) => {
  const [index, setIndex] = useState(0);
  return (
    <Grid
      container
      alignItems="stretch"
      columnSpacing={1}
    >
      <Grid item md={9}>
        <FocusImage>
          <Box
            component='img'
            src={`${process.env.REACT_APP_IMAGE_URL}/${images[index]}`}
            alt={images[index]}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </FocusImage>
      </Grid>
      <Grid item md={3}>
        <ScrollWrapper spacing={1}>
          {images.map((image, i) => {
            return (
              <Image key={i}>
                <Box
                  component='img'
                  src={`${process.env.REACT_APP_IMAGE_URL}/${image}`}
                  alt={image}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: `${index === i ? '1' : '0.7'}`
                  }}
                  onClick={() => setIndex(i)}
                />
              </Image>
            )
          })}
        </ScrollWrapper>
      </Grid>
    </Grid>
  )
};

const FocusImage = styled('div')({
  width: '100%',
  height: '50vh',
  position: 'relative',
  cursor: 'pointer'
});

const ScrollWrapper = styled(Stack)({
  maxHeight: '50vh',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

const Image = styled('div')({
  height: 'calc((50vh / 3) - 5px)',
  cursor: 'pointer',
  position: 'relative'
});

export default SlideProject;
