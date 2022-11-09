import {strict as assert} from 'assert'
import {PetController} from '../../api/controller/pet.controller'
const pet = new PetController()

describe('pet testing', () => {
    it.skip('get a pet by id 26061991', async () => {
        const body = await pet.getById(26061991)
        console.log(body)
        assert(body.id === 26061991, `Expected API to return pet with id 3, but got ${body.id}`)
    });

    it.skip('get a pet by status pending', async () => {
        const body = await pet.findByStatus('pending')
        console.log(body)
        assert(body.length > 0)
        assert(body.every((pet:any) => pet.status === 'pending'),'The error response does not contain available pet' )
    });

    it.skip('get pets by status sold', async () => {
        const body = await pet.findByStatus('sold')
        console.log(body)
        assert(body.length > 0)
    });

    it.skip('get pets by status available', async () => {
        const body = await pet.findByStatus('available')
        console.log(body)
        assert(body.length > 0)
    });

    it.skip('get pets by status sold and available', async () => {
        const body = await pet.findByStatus(['available','sold'])
        console.log(body)
        assert(body.length > 0)
        assert(body.some((pet:any) => pet.status === 'available'),'The error response does not contain available pet' )
        assert(body.some((pet:any) => pet.status === 'sold'),'The error response does not contain sold pet' )
        assert(!body.some((pet:any) => pet.status === 'pending'),'The response contain pending pets' )
    });
    it('added a new pet', async () => {
        const petToCreate = {
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "Cat",
            "photoUrls": [
                "http://test.com/image.jpg"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }
        const addedPet = await pet.addNewPet(petToCreate)
    });
  
    });  
    
