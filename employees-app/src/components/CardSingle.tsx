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
import { Place, Email, Phone, MoreVert } from "@mui/icons-material";
import { menuItems } from "../menu/MenuItems";

const CardSingle: React.FC<
  SingleEmployeeProps & { onBackClick: () => void }
> = ({ employee, onBackClick }) => {
  const { name, office, email, phoneNumber, mainText, imageWallOfLeetUrl } =
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
          <IconButton color="secondary" onClick={onBackClick}>
            <ArrowBackIcon
              aria-label="back-icon"
              aria-hidden="false"
              role="button"
            />
          </IconButton>
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={4} md={3}>
            <CardMedia
              component="img"
              image={imageWallOfLeetUrl}
              alt=""
              className="card-image"
            />
          </Grid>
          <Grid item xs={12} sm={8} md={9} className="content">
            <Typography variant="h4" color="primary.main" gutterBottom>
              {name}
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Place color="secondary" aria-hidden="true" />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  color="text.primary"
                  className="subtitle1"
                  gutterBottom
                >
                  Office: {office}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" color="text.primary" paragraph>
              {mainText?.replace(/<\/?p>/g, "")}
            </Typography>
            <Grid container spacing={1} className="contact">
              <Grid item>
                <Email color="secondary" aria-hidden="true" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="text.primary">
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email}
                  </a>
                </Typography>
              </Grid>
              <Grid item>
                <Phone color="secondary" aria-hidden="true" />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="text.primary">
                  {phoneNumber}
                </Typography>
              </Grid>
              <Grid item className="left-grid">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  className="icon-btn"
                  aria-label="social-icons"
                  role="button"
                >
                  <MoreVert aria-hidden="true" />
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
                        <span style={{ marginLeft: "8px" }}>{item.label}</span>
                      </MenuItem>
                    ) : null;
                  })}
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardSingle;
