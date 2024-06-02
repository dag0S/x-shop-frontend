import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useGetAllTypeQuery } from "../../redux/services/types";
import { Box, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectType } from "../../redux/features/typesSlice";

const TypeBar = () => {
  const { data } = useGetAllTypeQuery();
  const { selectedType } = useSelector((state: RootState) => state.types);
  const dispatch = useDispatch();

  return (
    <List
      sx={{
        backgroundColor: "white",
        borderRadius: 1,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {data?.map((type, i) => (
        <Box key={type.id}>
          <ListItem
            disablePadding
            onClick={() => dispatch(selectType(type.id))}
          >
            <ListItemButton
              selected={selectedType === type.id}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#d051e8",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#d051e8",
                  },
                },
                "&.Mui-focusVisible": {
                  backgroundColor: "#d051e8",
                  color: "white",
                },
                ":hover": {
                  backgroundColor: "#cf51e884",
                  color: "white",
                },
              }}
            >
              <ListItemText primary={type.name} />
            </ListItemButton>
          </ListItem>
          {i === data.length - 1 ? (
            ""
          ) : (
            <Divider sx={{ backgroundColor: "#6c097d" }} />
          )}
        </Box>
      ))}
    </List>
  );
};

export default TypeBar;
