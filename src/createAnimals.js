import Dogs from "./dogs";
import Ducks from "./ducks";

const createAnimals = () => {
    const dogList = [
        new Dogs("BUDDY", "dog1", 5),
        new Dogs("ROCKY", "dog2", 10),
        new Dogs("LEO", "dog3", 20),
     ];
     
     const duckList = [
         new Ducks("Cookie", "duck1", 1),
         new Ducks("Necco", "duck2", 0.6),
         new Ducks("Popcorn", "duck3", 5),
     ]
     
     return [...dogList, ...duckList]
}

export default createAnimals