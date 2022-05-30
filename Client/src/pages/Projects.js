import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import ProjectCard from '../components/project/ProjectCard';
import Pagination from '../components/Pagination/Pagination';
import projectApi from '../api/projectApi';
import LoadingScreen from '../components/LoandingScreen';
import { Grid } from '@mui/material';

const StyleBox = styled(Box)({
  padding: '0',
  maxWidth: '120vh',
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


export default function Projects() {
  const [projectList, setProjectList] = React.useState(null);
  const [filters, setFilters] = React.useState({
    number: 12,
    page: 1,
  });

  React.useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const response = await projectApi.listProject(filters.page, filters.number);
        setProjectList(response);
      } catch (error) {
        console.log('Failed to fetch project list: ', error)
      }
    }
    fetchProjectList();
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    })
  }

  return (
    <>
      {projectList && (
        <React.Fragment >

          <StyleBox >
          <Grid container spacing={2}>
              {projectList.projects.map((project) => (
                <Grid item xs={3} sx={{ paddingTop: '0'}}>
                  <ProjectCard key={project._id} project={project} />
                </Grid>
              ))}
            </Grid>

            <Pagination
              pagination={projectList.pagination}
              onPageChange={handlePageChange}
            />
          </StyleBox>

        </React.Fragment>
      )}
      {!projectList && (<LoadingScreen />)}
    </>

  );
}

