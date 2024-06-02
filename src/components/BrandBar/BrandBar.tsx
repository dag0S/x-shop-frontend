import { Paper } from "@mui/material";
import { useGetAllBrandQuery } from "../../redux/services/brands";
import { useDispatch, useSelector } from "react-redux";
import { selectBrand } from "../../redux/features/brandsSlice";
import { RootState } from "../../redux/store";

const BrandBar = () => {
  const { data } = useGetAllBrandQuery();
  const { selectedBrand } = useSelector((state: RootState) => state.brands);
  const dispatch = useDispatch();

  return (
    <Paper
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        flexWrap: "wrap",
        marginBottom: 1
      }}
    >
      {data?.map((brand) => (
        <Paper
          className={selectedBrand === brand.id ? "selected" : ""}
          onClick={() => dispatch(selectBrand(brand.id))}
          sx={{
            padding: 2,
            fontWeight: "bold",
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#cf51e884",
              color: "white",
            },
            "&.selected": {
              backgroundColor: "#cf51e8",
              color: "white",
            }
          }}
          key={brand.id}
        >
          {brand.name}
        </Paper>
      ))}
    </Paper>
  );
};

export default BrandBar;
