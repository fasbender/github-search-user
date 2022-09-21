import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ user }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={user.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
            <Typography variant='body2' color="text.secondary">{user.login}</Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <h3>Repos: <span>{user.public_repos}</span></h3>
        <h3>Followers: <span>{user.followers}</span></h3>
      </CardActions>
    </Card>
  );
}