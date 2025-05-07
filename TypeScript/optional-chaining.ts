interface User1 {
    name: string;
    address?: {
      city: string;
      zipCode: string;
    };
  }
  
  const user2: User1 = {
    name: "Shrenik",
    address: {
      city: "Hyderabad",
      zipCode: "500013"
    }
  };
  
  
  console.log(user2.address?.city); 
  console.log(user2.address?.zipCode);
  const anotherUser: User1 = { name: "Raju" };
  console.log(anotherUser.address?.city);