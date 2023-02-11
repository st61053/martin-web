import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Box, Card, Grid } from "@mui/material";

export default function MyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCns95ghG7W5_WxPLavIP745dv4baLCQ5I",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: { xs: "4em 3em", sm: "4em 6em", xl: "4em 8em" },
        backgroundColor: "#e6e6e6",
      }}
    >
      <Grid container spacing={4}>
        <Grid item sm={12} xl={6}>
          <Card>
            <Map />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 49.595972, lng: 17.248363 }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <MarkerF
        position={{
          lat: 49.595972,
          lng: 17.248363,
        }}
      />
    </GoogleMap>
  );
}
