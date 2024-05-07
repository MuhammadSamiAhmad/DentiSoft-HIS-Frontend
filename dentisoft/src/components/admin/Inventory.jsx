import { mockEquipmentData } from "../../data/mockData";
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Header from "../../components/Header";
import ItemCard from "../ItemCard";
const Inventory = () => {
  //handleDelete Yet to be Handled XD
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockEquipmentData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const [items, setItems] = useState(currentItems);

  const handleDelete = React.useCallback(
    (id) => {
      setTimeout(() => {
        setItems((currentItems) =>
          currentItems.filter((item) => item.id !== id)
        );
      });
    },
    [setItems]
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <Box m="30px">
      <Header title="Equipment" subtitle={"Manage Your Inventory Items"} />
      <Stack
        gap={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {currentItems.map((item, index) => (
          <ItemCard key={index} item={item} handleDelete={handleDelete} />
        ))}
      </Stack>{" "}
      <Stack mt={"100px"} alignItems={"center"}>
        {mockEquipmentData.length > itemsPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(mockEquipmentData.length / itemsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Inventory;
