import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EmployeeData } from "../types/Employee";
import { menuItems } from "../menu/MenuItems";
import { MoreVert } from "@mui/icons-material";

function CardViews({
  employees: employee,
  viewMode,
  onEmployeeSelect,
}: {
  employees: EmployeeData;
  viewMode: "grid" | "list";
  onEmployeeSelect: (employee: EmployeeData) => void;
}) {
  const { name, office, email, phoneNumber, imagePortraitUrl } = employee;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmployeeClick = () => {
    onEmployeeSelect(employee);
  };

  if (viewMode === "grid") {
    return (
      <Card className="grid-view">
        <CardMedia
          component="img"
          image={imagePortraitUrl}
          alt=""
          className="card-image"
          onClick={handleEmployeeClick}
        />
        <Box className="card-header">
          <Typography variant="h5" color="primary.main">
            {name}
          </Typography>
          <Box className="menu-btn">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-label="Social Icons"
              role="button"
            >
              <MoreVert className="icon" aria-hidden="true" />
            </IconButton>
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
          </Box>
        </Box>
        <CardContent className="card-content">
          <Typography variant="subtitle1" color="text.primary" gutterBottom>
            Office: {office}
          </Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Container>
        <Card
          className="list-view"
          sx={{ width: viewMode === "list" ? "100%" : "auto" }}
        >
          <CardMedia
            component="img"
            image={imagePortraitUrl}
            alt=""
            className="card-image"
            onClick={handleEmployeeClick}
          />
          <Box className="card-header">
            <Box className="content">
              <Typography variant="h6" color="primary.main">
                {name}
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                {email}
              </Typography>
              <Typography variant="subtitle2" color="text.primary">
                {phoneNumber}
              </Typography>
              <Typography variant="subtitle1" color="text.primary">
                {office}
              </Typography>
            </Box>
          </Box>
          <CardContent className="card-content">
            <Box className="content">
              <Box className="menu-btn">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-label="Social Icons"
                  role="button"
                >
                  <MoreVert className="icon" aria-hidden="true" />
                </IconButton>
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
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default CardViews;
