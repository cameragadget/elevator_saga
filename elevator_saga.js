{
  init: function(elevators, floors) {


    elevators.forEach(function(elevator){

      elevator.on("floor_button_pressed", function(floorNum) {
        elevator.goToFloor(floorNum)
      });

      elevator.on("idle", function() {
        elevator.goToFloor(4);
      });

      elevator.on("up_button_pressed"), function(floorNum) {
        elevator.getPressedFloors
      }

    });

    floors.forEach(function(floor){
      floor.on("up_button_pressed", floorButtonPressed);
      floor.on("down_button_pressed", floorButtonPressed)
    });

    var peopleWaiting = [];
    function floorButtonPressed(){
      var floor = this;
      peopleWaiting.push(floor.floorNum());
    };


  },

  update: function(dt, elevators, floors) {
    // We normally don't need to do anything here
  }
}



