import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function AlignItemsList({ followers, getData }) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {followers.map(follower => {
        return (
            <ListItem alignItems="flex-start" key={follower.id} className="list" onClick={() => getData(follower.login)}>
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={follower.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                primary={follower.login}
                />
            </ListItem>
        )
      })}
    </List>
  );
}
