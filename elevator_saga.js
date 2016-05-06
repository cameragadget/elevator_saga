{
    init: function(elevators, floors) {


            // var elevator = elevators[0]; // Let's use the first elevator
        elevators.forEach(function(elevator){


            // Whenever the elevator is idle (has no more queued destinations) ...

            elevator.on("floor_button_pressed", function(floorNum) {
                 elevator.goToFloor(floorNum)
            });

            elevator.on("idle", function() {
                // let's go to all the floors (or did we forget one?)
                elevator.goToFloor(4);
            });

           floor.on("up_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum)
    // Maybe tell an elevator to go to this floor?
            })


        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}



