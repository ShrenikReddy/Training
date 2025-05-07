interface Cars {
    brand: string;
    model: string;
    year?: number; 
  }
  
  function createCar(): void {
    const myCars: Cars = {
      brand: "BMW",
      model: "M340i"
    };
  
    console.log(myCars.year); 
  }
  
  createCar();