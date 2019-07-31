export const  imageTableConfig = {

  columnDefs: [
    { headerName: "#", field: "counter", cellRenderer: 'counterCell', sortable: true },
    { headerName: "upload", field: "imageUploader", cellRenderer: 'imageUploaderCell', sortable: true },
    { headerName: "control", field: "control", cellRenderer: 'controlCell' }
  ],

  rowData: [
    { counter: 1 },
    { counter: 2 },
    { counter: 3 },
  ]

};
