class Car {
    setDriveSound(sound) {
        this.sound = sound;
    }
    drive(){
        console.log(this);
    }

}

const car = new Car();
car.setDriveSound('vroom');

const drive  = car.drive;

drive()