import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Review() {
  const [value, setValue] = React.useState(0);

  return (
    <>
    <div style={{marginLeft: "2rem"}}>
    <h4>Give Your Rating</h4>
    <Rating
        style={{fontSize: "3rem"}}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
    <FloatingLabel style={{marginLeft: "2rem", marginRight: "2rem"}} controlId="floatingTextarea2" label="Leave a comment here">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button style={{marginLeft: "2rem", marginTop: ".5rem"}} variant="success">Comment</Button>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Remy Sharp"
          secondary={
            <React.Fragment>
              <div><Rating style={{marginLeft: "auto"}} name="read-only" value={4} readOnly /></div>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Best Hostel For students and professionals 
              </Typography>              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Travis Howard"
          secondary={
            <React.Fragment>
              <div><Rating style={{marginLeft: "auto"}} name="read-only" value={1} readOnly /></div>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                I never recommend this hostel, owners are very bad go for another one
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Cindy Baker"
          secondary={
            <React.Fragment>
              <div><Rating style={{marginLeft: "auto"}} name="read-only" value={5} readOnly /></div>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                This hostel will be hell for you if you are a bad guy otherwise it is heaven. I will give 5 star
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </>
  );
}
