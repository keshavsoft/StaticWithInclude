let StartFunc = ({ inFromFetch, inBodyData, inCurrentTarget }) => {
  if ("KTF" in inFromFetch) {
    if (inFromFetch.KTF) {
      window.location = "";
    } else {
      let jVarLocalClosestTr = inCurrentTarget.closest("tr");
      let jVarLocalInput = jVarLocalClosestTr.querySelector('[name="ColumnName"]');

      jVarLocalInput.classList.add("is-invalid");
      // jVarLocalClosestTr.classList.add("table-danger");
    };
  } else {
    console.log("KTF not found in fetch");
  };
};

export { StartFunc };