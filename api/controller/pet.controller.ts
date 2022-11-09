const axios = require('axios');
axios.defaults.baseURL = 'https://petstore.swagger.io/v2';
import {URLSearchParams} from 'url'

export class PetController{
  async getById(id:number | string){
    const response = await axios.get(`/pet/${id}`);
    return response.data
  }

  async findByStatus(status:string | string[]){
    const response = await axios.get('/pet/findByStatus', {
      params: new URLSearchParams( { status}) 
    })
    return response.data
  }
  async addNewPet(pet: { id:number,category: { id: number; name: string; }; name: string; photoUrls: string[]; tags: { id: number; name: string; }[]; status: string; }) {
    const response = await axios.post(`/pet`, {
        json: pet
    });
    return response.data
}
  async deletePet(id:number | string){
    const response = await axios.get(`/pet/${id}`);
    return response.data
}
}