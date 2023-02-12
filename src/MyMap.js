import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Box, Card, CardContent, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLEAPI,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", padding: " 6em 0", backgroundColor: "lightcoral" }}>
        <Typography variant={"h3"} gutterBottom>
          Kde nás najdete
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
        }}
      >
        <Grid container spacing={4}>
          <Grid item sm={12} md={6} xl={6}>
            <Card>
              <Map />
            </Card>
          </Grid>
          <Grid item sm={12} md={6} xl={6}>
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
              <Typography variant={"h3"}>
                Seznam akcí
              </Typography>
              <Grid container spacing={4} sx={{ padding: {sm: "4em 0", md: "2em 4em", xl: "2em 4em"} }}>
                <Grid item sm={12} xl={12}>
                  <Card sx={{ height: "10vh", cursor: "pointer" }}>
                    <CardContent >
                      <Typography variant={"h4"} >
                        AKCE 1
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} xl={12}>
                  <Card sx={{ height: "10vh", cursor: "pointer" }}>
                    <CardContent>
                    <Typography variant={"h4"} >
                        AKCE 2
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} xl={12}>
                  <Card sx={{ height: "10vh", cursor: "pointer" }}>
                    <CardContent>
                    <Typography variant={"h4"} >
                        AKCE 3
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} xl={12}>
                  <Card sx={{ height: "10vh", cursor: "pointer" }}>
                    <CardContent>
                    <Typography variant={"h4"} >
                        AKCE 4
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 49.595972, lng: 17.248363 }), []);

  return (
    <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
      <MarkerF
        position={{
          lat: 49.595972,
          lng: 17.248363,
        }}
      />
    </GoogleMap>
  );
}
