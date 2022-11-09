const axios = require('axios');
import {components, operations} from '../../temp/types'
import {JsonRequest} from '../builder'
import {URLSearchParams} from 'url'
axios.defaults.baseURL = 'https://petstore.swagger.io/v2';
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

  async createNewPet(pet:components["schemas"]["Pet"]){

    return(
      await new JsonRequest()
      .url('/pet')
      .method('POST')
      .data(pet)
      .send()
    ).data
  }

  async changeNewPet(pet:components["schemas"]["Pet"]){

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