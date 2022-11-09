const axios = require('axios');
import {JsonRequest} from '../builder'
axios.defaults.baseURL = 'https://petstore.swagger.io/v2';
import {URLSearchParams} from 'url'

export class PetController{
  async getById(id:number | string){
    return (
      await new JsonRequest()
        .url(`/pet/${id}`)
        .send()).data
  }

  async findByStatus(status:string | string[]){
    return (
      await new JsonRequest()
        .url('/pet/findByStatus')
        .params(new URLSearchParams( { status}))
        .send()
    ).data
  }

  async createNewPet(pet:{
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: string;
  }){
    /* const response = await axios({
      url:'/pet',
      method:'post',
      data:pet
    }) */
    //return response.data
    return(
      await new JsonRequest()
      .url('/pet')
      .method('POST')
      .data(pet)
      .send()
    ).data
  }

  async changeNewPet(pet:{
    id: number;
    category: {
        id: number;
        name: string;
    };
    name: string;
    photoUrls: string[];
    tags: {
        id: number;
        name: string;
    }[];
    status: string;
  }){
    /* const response = await axios({
      url:'/pet',
      method:'put',
      data:pet
    })
    return response.data */
    return(
      await new JsonRequest()
      .url('/pet')
      .method('PUT')
      .data(pet)
      .send()
    ).data
  }

  async deletePetByID(id:number | string){
    return(
      await new JsonRequest()
      .url(`/pet/${id}`)
      .method('DELETE')
      .send()
    ).data
    /* const response = await axios.delete(`/pet/${id}`);
    return response.data*/
  } 
}