let StartFunc = ({ inFromFetch, inBodyData, inCurrentTarget }) => {

  switch (inFromFetch.status) {
    case 200:
      window.location = "";

      break;

    case 204:
      let jVarLocalClosestTr = inCurrentTarget.closest("tr");
      let jVarLocalInput = jVarLocalClosestTr.querySelector('[name="ColumnName"]');
      let jVarLocaldiv = jVarLocalClosestTr.querySelector('.invalid-feedback');

      jVarLocalInput.classList.add("is-invalid");
      jVarLocaldiv.innerHTML = "Column: already found !"
      break;
    default:
    // code block
  };
};

export { StartFunc };