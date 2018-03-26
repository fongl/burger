// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-eat").on("click", function(event) {
      var name = $(this).data("id");
      $.ajax("/api/burgers/" + name, {
        type: "PUT"
      }).then(
        function() {
          console.log("eated");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurg = {
        name: $("#burg").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  