export const  imageTableConfig = {

  columnDefs: [
    { width: 5, headerName: "#", field: "counter", cellRenderer: 'counterCell', sortable: true },
    { width: 90,headerName: "upload", field: "imageUploader", cellRenderer: 'imageUploaderCell', sortable: true },
    {  width: 5,headerName: "control", field: "control", cellRenderer: 'controlCell' }
  ],

  rowData: [
    { counter: 1 },
    { counter: 2 },
    { counter: 3 },
  ]

};
