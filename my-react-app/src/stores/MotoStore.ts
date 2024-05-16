import { makeObservable, observable, action } from 'mobx';

import SportBike from '../models/SportBike';
import localStorageWrapper from '../localStorage/LocalStorageWrapper';
class MotoStore {
  motos: SportBike[] = [];
  loading: boolean = true; 

  constructor() {
    makeObservable(this, {
      motos: observable,
      loading: observable,
      addMoto: action,
      removeMoto: action,
      setLoading: action
    });
    this.loadData(); 
  }

  addMoto(moto: SportBike) {
    this.motos.push(moto);
    this.saveData(); 
  }

  removeMoto(moto: SportBike) {
    this.motos = this.motos.filter(m => m !== moto);
    this.saveData(); 
  }

  async loadData() {
   
    this.setLoading(true);

    
    await new Promise(resolve => setTimeout(resolve, 2000));

    
    this.motos = localStorageWrapper.data ? localStorageWrapper.data : [];

    
    this.setLoading(false);
  }

  saveData() {
    localStorageWrapper.setData(this.motos);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

}

const motoStore = new MotoStore();
export default motoStore;