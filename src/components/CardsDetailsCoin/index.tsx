import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { DivDetailsCoin } from "components/HeaderDetaislCoin";

const ItemCard = styled.div`
  text-align: left;
  height: 119px;
  display: flex;
  justify-content: center;
  margin-top: 70px;

  @media (max-width: 900px) {
    margin-top: 2px;
    margin-bottom: 10px;
  }
`;

const CardCustom = styled.div`
  height: 119px;
  width: 319px;
  min-height: 119px;
  min-width: 319px;
  padding-left: 24px;
  padding-top: 22px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 0.5rem;
`;

const github = [
  {
    name: "GitHub Followers",
    value: 123,
  },
  {
    name: "GitHub Stars",
    value: 970,
  },
  {
    name: "GitHub Forks",
    value: 213,
  },
];

export default function CardsDetailsCoin() {
  const theme = useTheme();

  return (
    <DivDetailsCoin>
      <Grid container spacing={{ xs: 2, md: 0 }}>
        {github.map((git, i) => (
          <Grid item xs={12} sm={12} md={4} key={i}>
            <ItemCard>
              <CardCustom>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.colors.gray200,
                    fontWeight: "bold",
                    marginBottom: "4px",
                  }}
                >
                  {git.name}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: theme.colors.black,
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    marginBottom: "0px",
                  }}
                >
                  {git.value}
                </Typography>
              </CardCustom>
            </ItemCard>
          </Grid>
        ))}
      </Grid>
    </DivDetailsCoin>
  );
}
