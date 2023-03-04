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
          alt={name}
          className="card-image"
          onClick={handleEmployeeClick}
        />
        <Box className="card-header">
          <Typography variant="overline">{name}</Typography>
          <Box className="menu-btn">
            <IconButton onClick={handleClick} size="small">
              <MoreVert className="icon" />
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
                    {item.label}
                  </MenuItem>
                ) : null;
              })}
            </Menu>
          </Box>
        </Box>
        <CardContent className="card-content">
          <Typography variant="overline">Office: {office}</Typography>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Container>
        <Card
          className="list-view"
          sx={{ width: viewMode === "list" ? "100%" : "auto" }}
          onClick={handleEmployeeClick}
        >
          <CardMedia
            component="img"
            image={imagePortraitUrl}
            alt={name}
            className="card-image"
          />
          <Box className="card-header">
            <Box className="content">
              <Typography variant="overline">{name}</Typography>
              <Typography variant="body2">{email}</Typography>
              <Typography variant="body2">{phoneNumber}</Typography>
              <Typography variant="overline">{office}</Typography>
            </Box>
          </Box>
          <CardContent className="card-content">
            <Box className="content">
              <Box className="menu-btn">
                <IconButton onClick={handleClick} size="small">
                  <MoreVert className="icon" />
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
                        {item.label}
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
