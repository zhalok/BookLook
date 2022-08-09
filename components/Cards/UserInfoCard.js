import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteButton from "../Buttons/OnHoverContainedOutlinedButton";

export default function UserProfileCard({
  Contributions,
  Recommendations,
  Name,
  Email,
  isCurrentUser,
  updateFormController,
}) {
  React.useEffect(() => {
    if (isCurrentUser == true) {
    }
  }, [isCurrentUser]);

  const userUpdateInfo = (
    <div>
      {" "}
      <CardActions>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            width: "100%",
          }}
        >
          <div>
            <Button
              size="small"
              variant="contained"
              fullWidth
              onClick={() => {
                updateFormController(true);
              }}
            >
              Update Information
            </Button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <DeleteButton
              ButtonText="Delete Profile"
              DefaultVariant="outlined"
              HoverVariant="contained"
              Color="error"
            />
          </div>
        </div>
      </CardActions>
    </div>
  );

  return (
    <Card className="user-card" elevation={5}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Name}
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={Email}
                style={{ overflowWrap: "break-word" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddLinkOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={`Contributions: ${Contributions}`}
                style={{ overflowWrap: "break-word" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderOutlinedIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={`Recommendations: ${Recommendations}`}
                style={{ overflowWrap: "break-word" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {isCurrentUser ? userUpdateInfo : ""}
      </CardContent>
    </Card>
  );
}
