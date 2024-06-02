import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useGetDeviceQuery } from "../../redux/services/devices";
import { useParams } from "react-router-dom";
import { AddCircleOutline, StarBorderOutlined } from "@mui/icons-material";

const Device = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetDeviceQuery(id || "");
  const description = [
    { title: "name", description: "31241fsdf" },
    { title: "rem", description: "12" },
    { title: "sadfa", description: "asdf" },
    { title: "asdf", description: "sdfa" },
  ];
  return (
    <Paper sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img
            src={`${import.meta.env.VITE_API_URL}/${data?.img}`}
            alt={data?.name}
            style={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography variant="h4">{data?.name}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="h6">{data?.rating}</Typography>
              <StarBorderOutlined sx={{ fontSize: 40 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "end",
          }}
        >
          <Typography variant="h5">{data?.price + " ₽"}</Typography>
          <Button
            variant="contained"
            endIcon={<AddCircleOutline />}
            sx={{ display: "flex", alignItems: "center" }}
          >
            В корзину
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h3" sx={{marginBottom: 1}}>Характеристики</Typography>
      <List sx={{ border: "2px solid #240139", padding: 0, borderRadius: 1 }}>
        {description.map((info, i) => (
          <ListItem
            disablePadding
            sx={{
              backgroundColor: i % 2 == 0 ? "#d051e8" : "",
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              color: i % 2 == 0 ? "white" : "black",
            }}
          >
            <ListItemText primary={info.title} />
            <ListItemText primary={info.description} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Device;
