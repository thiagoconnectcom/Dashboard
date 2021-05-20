import React from "react";
import { Card, Col } from "react-bootstrap";
import ToolkitProvider, {
  Search,
  ColumnToggle,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";

const { SearchBar } = Search;
const { ToggleList } = ColumnToggle;
const { ExportCSVButton } = CSVExport;

const columns = [
  {
    text: "ID",
    dataField: "id",
    sort: true,
  },
  {
    text: "Title",
    dataField: "title",
    sort: true,
  },
  {
    text: "Body",
    dataField: "body",
    sort: true,
  },
];

export default function Table({ data }) {
  const sizePerPageList = [
    {
      text: "20",
      value: 20,
    },
    {
      text: "50",
      value: 50,
    },
    {
      text: "todos",
      value: data.length,
    },
  ];
  return (
    <div>
      {
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card className="mb-3">
            <Card.Header>Table</Card.Header>
            <ToolkitProvider
              keyField="id"
              data={data}
              columns={columns}
              bootstrap4
              search
              columnToggle
              exportCSV
            >
              {(props) => (
                <React.Fragment>
                  <div className="row card-body pb-3 pt-4">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <ToggleList {...props.columnToggleProps} />
                    </div>
                    <div className="col-md-6 d-flex align-items-start justify-content-end">
                      <ExportCSVButton {...props.csvProps} className="mr-2">
                        Export
                      </ExportCSVButton>
                      <SearchBar {...props.searchProps} />
                    </div>
                  </div>

                  {/* !!! Add .card table class to the table and .react-bs-table-card class to the wrapper */}
                  <BootstrapTable
                    {...props.baseProps}
                    wrapperClasses="table-responsive react-bs-table-card"
                    classes="card-table border-top"
                    pagination={paginationFactory({ sizePerPageList })}
                    filter={filterFactory()}
                    cellEdit={cellEditFactory({ mode: "click" })}
                  />
                </React.Fragment>
              )}
            </ToolkitProvider>
          </Card>
        </Col>
      }
    </div>
  );
}
