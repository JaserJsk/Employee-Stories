import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SingleEmployeeProps } from "../types/Employee";
import { MoreVert } from "@mui/icons-material";
import { menuItems } from "../menu/MenuItems";

const CardSingle: React.FC<
  SingleEmployeeProps & { onBackClick: () => void }
> = ({ employee, onBackClick }) => {
  const { name, office, email, phoneNumber, mainText, imagePortraitUrl } =
    employee;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className="single-view">
      <CardHeader
        title={
          <IconButton onClick={onBackClick}>
            <ArrowBackIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            <CardMedia
              component="img"
              image={imagePortraitUrl}
              alt={name}
              className="card-image"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9} className="content">
            <Typography variant="h4" component="div" gutterBottom>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Office: {office}
            </Typography>
            <Typography variant="body1" paragraph>
              {mainText?.replace(/<\/?p>/g, "")}
            </Typography>
            {/* C */}
            <Grid container spacing={2} className="contact">
              <Grid item>
                <Typography variant="subtitle2" color="text.secondary">
                  Email:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {email}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="text.secondary">
                  Phone:
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {phoneNumber}
                </Typography>
              </Grid>
              {/* V */}
              <Grid item className="left-grid">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  className="icon-button"
                >
                  <MoreVert className="icon" />
                </IconButton>
                <Box className="social-section">
                  {menuItems.map((item) => {
                    const isEnabled = item.isEnabled(employee);
                    return isEnabled ? (
                      <MenuItem
                        key={item.label}
                        onClick={handleClose}
                        component="a"
                        href={item.getUrl(employee)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icons"
                      >
                        {item.icon}
                      </MenuItem>
                    ) : null;
                  })}
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => {
                    const isEnabled = item.isEnabled(employee);
                    return isEnabled ? (
                      <MenuItem
                        key={item.label}
                        onClick={handleClose}
                        component="a"
                        href={item.getUrl(employee)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                        {item.label}
                      </MenuItem>
                    ) : null;
                  })}
                </Menu>
              </Grid>
              {/* V */}
            </Grid>
            {/* C */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSingle;
