import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { NavLink, useParams } from "react-router-dom";
import { useTheme } from "styled-components";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a Cryptocurrencies.");
}

export default function BreadcrumbsCustom() {
  const theme = useTheme();
  const { idcoin } = useParams<string>();

  const breadcrumbs = [
    <Link underline="hover" key="1" onClick={handleClick}>
      <NavLink
        to="/"
        style={{ color: theme.colors.gray200, textDecoration: "none" }}
      >
        Criptomoedas
      </NavLink>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color={theme.colors.gray200}
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Moedas
    </Link>,
    <Typography key="3" color={theme.colors.black} fontWeight="bold">
      {idcoin}
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator="›"
        sx={{ paddingBlock: "50px", fontWeight: "bold" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
