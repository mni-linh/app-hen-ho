import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AtomButton from "../Atomic/atoms/AtomButton";
import AtomImageBackground from "../Atomic/atoms/AtomImageBackground";
import AtomToolbar from "../Atomic/atoms/AtomToolbar";
import AtomTypography from "../Atomic/atoms/AtomTypography";
import AppBar from "../Atomic/organisms/AppBar";
const Home = () => {
  return (
    <>
      <AppBar />
      {/* <AtomContainer maxWidth="xl" sx={{ margin: 0 }}> */}

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          opacity: 0.9,
          backgroundImage:
            "url('https://tinder.com/static/build/744fe6d80266616aba687006b7d764ad.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // opacity: 0.5,
        }}
      >
        {/* <Grid item xs container direction="column" spacing={2}> */}
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{}}
          direction="column"

          // spacing={0}
        >
          <Grid item>
            <AtomTypography
              sx={{
                color: "white",
                fontSize: "123px",
                fontFamily: "Noto Sans Vai",
                fontWeight: 600,
              }}
            >
              Quẹt phải
            </AtomTypography>
          </Grid>

          {/* Grid button */}
          <Grid item>
            <AtomButton
              sx={{
                textTransform: "capitalize",
                backgroundColor: "red",
                width: "260px",
                height: "44px",
                borderRadius: "2.2rem",
              }}
              variant="contained"
            >
              Tạo tài khoản
            </AtomButton>
          </Grid>
        </Grid>
      </Grid>
      {/* </AtomContainer> */}
    </>
  );
};

export default Home;
