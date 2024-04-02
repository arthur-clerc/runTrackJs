$("#button").click(function () {
  var images = $(".shuffle img").toArray();
  images.sort(() => Math.random() - 0.5);
  $(".shuffle").empty().append(images);

  $(".shuffle img").draggable({
    revert: "invalid",
  });
});

$("#container").droppable({
  accept: ".shuffle img",
  activeClass: "ui-state-highlight",
  drop: function (event, ui) {
    var droppedImageId = ui.draggable.attr("id");
    ui.draggable.appendTo($(this)).css({
      position: "relative",
      top: "auto",
      left: "auto",
    });
    imgDragged = $("#container").children("img").toArray();
    if (imgDragged.length === 6) {
      correctOrder();
    }
  },
});

var orderCorrect = ["1", "2", "3", "4", "5", "6"];

function correctOrder() {
  var imgDraggedIds = imgDragged.map((img) => img.id);

  var isCorrect = imgDraggedIds.every(
    (id, index) => id === orderCorrect[index]
  );

  if (isCorrect) {
    alert("Vous avez gagné");
  } else {
    alert("Vous avez perdu");
  }
}
