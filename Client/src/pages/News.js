import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import NewsCard from '../components/news/NewsCard';
import Pagination from '../components/Pagination/Pagination';
import newsApi from '../api/newsApi';
import { Grid } from '@mui/material';
import LoadingScreen from '../components/LoandingScreen';

const StyleBox = styled(Box)({
  // padding: '15px 310px',
  maxWidth: 870,
  margin: '2vh auto',
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  flexDirection: 'colurmn',
  height: '80vh',
  zIndex: '100',
  position: 'relative'
});

export default function News() {
  const [newsList, setNewsList] = React.useState(null);
  const [filters, setFilters] = React.useState({
    number: 6,
    page: 1,
  });

  React.useEffect(() => {
    const fetchNewsList = async () => {
      try {
        const response = await newsApi.listNews(filters.page, filters.number);
        setNewsList(response);
      } catch (error) {
        console.log('Failed to fetch news list: ', error)
      }
    }

    fetchNewsList();
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    })
  }

  return (
    <>
      {newsList && (
        <React.Fragment >
          <StyleBox >
            <Grid container spacing={2}>
              {newsList.news.map((news) => (
                <Grid item xs={4} sx={{ paddingTop: '0' }}>
                  <NewsCard key={news._id} news={news} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              pagination={newsList.pagination}
              onPageChange={handlePageChange}
            />
          </StyleBox>

        </React.Fragment >
      )}
      {!newsList && (<LoadingScreen />)}
    </>


  );
}
