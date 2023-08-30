import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import * as stringFunctions from "../../util/stringFunctions";

function HomeDataGrid() {
  const columns: GridColDef[] = [
    {
      field: "tenant",
      headerName: "Tenant",
      width: 266,
      headerClassName: "data-grid-theme--header",
    },
    {
      field: "landLord",
      headerName: "Land lord",
      width: 266,
      headerClassName: "data-grid-theme--header",
    },
    {
      field: "contact",
      headerName: "Landlord contact",
      width: 266,
      headerClassName: "data-grid-theme--header",
    },
    {
      field: "city",
      headerName: "City",
      width: 266,
      headerClassName: "data-grid-theme--header",
    },
    {
      field: "violation",
      headerName: "Violation",
      width: 266,
      headerClassName: "data-grid-theme--header",
      renderCell: (cellValues) => {
        return (
          <div
            className={`data-grid-violation-${stringFunctions.parseCellValueToClass(
              cellValues.value
            )}`}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 267,
      headerClassName: "data-grid-theme--header",
    },
  ];

  const rows: GridRowsProp = [
    {
      id: 1,
      tenant: "Joachim Janina",
      landLord: "Dana Justus",
      contact: "Pelase register to see",
      city: "Graz",
      violation: "Rent not payed",
      description: "The tennant lived there for a month and ...",
    },
    {
      id: 2,
      tenant: "Diana Gertraud",
      landLord: "Désirée Guntram",
      contact: "Pelase register to see",
      city: "Wiena",
      violation: "Property wrecked",
      description: "When I saw the place after they left ...",
    },
    {
      id: 3,
      tenant: "Kurt Georg",
      landLord: "Linda Gustav",
      contact: "Pelase register to see",
      city: "Graz",
      violation: "Rent not payed",
      description: "After 3 months of stailing and making ...",
    },
  ];

  return (
    <div className="home-page__data-grid">
      <div className="home-page__data-grid-container">
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooterPagination
          hideFooter
          disableSelectionOnClick
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
          }}
        />
      </div>
      <Link to="list" style={{ textDecoration: "none" }}>
        <div className="home-page__data-grid-button">See whole list</div>
      </Link>
    </div>
  );
}

export default HomeDataGrid;
