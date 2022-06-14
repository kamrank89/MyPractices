const makingTable = () => {
  const firstRow = $("#first-row-1").val();
  const secondRow1 = $("#second-row-1").val();
  const secondRow2 = $("#second-row-2").val();

  $(".actual-table").append(
    "<tr class=items> <td>" +
      secondRow2 +
      " </td> <td> " +
      firstRow +
      "</td> <td> " +
      secondRow1 +
      "</td> </tr>"
  );
  $(".items").click(function () {
    $(this).remove();
  });
  $("#first-row-1").val("");
  $("#second-row-1").val("");
  $("#second-row-2").val("");
};
