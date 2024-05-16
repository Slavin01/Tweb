import { observable, action, makeObservable } from 'mobx';
import SportBike from '../models/SportBike';


const setLocalStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalStorageData = (key: string): any => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

class LocalStorageWrapper {
  data: SportBike[] | null = null;

  constructor() {
    makeObservable(this, {
      data: observable,
      setData: action,
      loadDataFromLocalStorage: action
    });
    this.loadDataFromLocalStorage();
  }

  setData(newData: SportBike[]) {
    this.data = newData;
    setLocalStorageData('motos', newData);
  }

  async loadDataFromLocalStorage() {
    const storedData = getLocalStorageData('motos');
    if (!storedData) {
      const initialData: SportBike[] = [
        {
          name: "Honda",
          model: "CBR600RR",
          description: "SportBike",
          imageUrl:"https://news.webike.net/wp-content/uploads/2023/12/20231222_cbr600rr2231222-cbr600rr_001H_resulte.webp",
          price: 1300,
          suspension: "",
           type: ""
         },
         {
           name: "Kawasaki",
           model: "Ninja",
           description: "SportBike",
           imageUrl:"https://content2.kawasaki.com/ContentStorage/KMC/Products/8797/6b80d839-96ba-482a-9348-c8de27ae9063.png?w=767",
           price: 1300,
           suspension: "",
           type: ""
          }
      ]; 
      setLocalStorageData('motos', initialData);
      this.data = initialData;
    } else {
      this.data = storedData;
    }
  }
}

const localStorageWrapper = new LocalStorageWrapper();
export default localStorageWrapper;