import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function MemberCard({ member }) {
  return (
    <Card sx={{
      height: '24vh',
      borderRadius: 0,
      boxShadow: 'none'
    }}>
      <CardMedia sx={{
        height: '19vh',
      }}
        component="img"
        alt={member.name}
        image={`${process.env.REACT_APP_IMAGE_URL}/${member.image}`}
      />
      <CardContent sx={{ padding: "0" }}>
        <CardActions sx={{ padding: "0", fontSize: '12px' }}>
          {member.name}
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{fontSize: '10px'}}>
          {member.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

MemberCard.propTypes = {
  member: PropTypes.array.isRequired
};
