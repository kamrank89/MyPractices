const inputValueFunction = () => {
  const inputValue = $("#input").val();
  //   alert(inputValue);
};

function makingList() {
  const inputValue = $("#input").val();
  //   alert(inputValue);

  $("#list").append("<li class='items'>" + inputValue + "</li>");

  $(".items").click(function () {
    $(this).remove();
  });
  $("#input").val("");
}
