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
        assert(body.every((pet:any) => pet.status === 'pending'),'The error response does not contain pending pet' )
    });

    it.skip('get pets by status sold', async () => {
        const body = await pet.findByStatus('sold')
        console.log(body)
        assert(body.length > 0)
        assert(body.every((pet:any) => pet.status === 'sold'),'The error response does not contain sold pet' )
    });

    it.skip('get pets by status available', async () => {
        const body = await pet.findByStatus('available')
        console.log(body)
        assert(body.length > 0)
        assert(body.every((pet:any) => pet.status === 'available'),'The error response does not contain available pet' )
    });

    it.skip('get pets by status sold and available', async () => {
        const body = await pet.findByStatus(['available','sold'])
        console.log(body)
        assert(body.length > 0)
        assert(body.some((pet:any) => pet.status === 'available'),'The error response does not contain available pet' )
        assert(body.some((pet:any) => pet.status === 'sold'),'The error response does not contain sold pet' )
        assert(!body.some((pet:any) => pet.status === 'pending'),'The response contain pending pets' )
    });
    it('can add update and delete a new create pet', async () => {
        const newPet = {
            "id": 3335,
            "category": {
              "id": 442,
              "name": "snakes"
            },
            "name": "Basilisk",
            "photoUrls": [
              "https://live.staticflickr.com/65535/52457355632_d1696ae819.jpg"
            ],
            "tags": [
              {
                "id": 1,
                "name": "snakes"
              }
            ],
            "status": "available"
          }
        const addNewPet= await pet.createNewPet(newPet);
        assert.deepEqual(newPet,addNewPet),'expected the pet data to equal the newPet array'
          
        let getPetById= await pet.getById(addNewPet.id) 
        assert.deepEqual(newPet,getPetById),'expected the pet data to equal the newPet array'
         const changePet = {
            "id":addNewPet.id,
            "category": {
                "id": 443,
                "name": "mythical birds"
            },
            "name": "Fenyx",
            "photoUrls": [
                "https://live.staticflickr.com/65535/52457355632_d1696ae819.jpg"
            ],
            "tags": [
             {
                "id": 22,
                "name": " birds"
             }
        ],
        "status": "available"
      }
    const addChangeToPet= await pet.changeNewPet(changePet); 
    assert.deepEqual(changePet,addChangeToPet),'expected the pet data to equal the changePet array' 
    getPetById= await pet.getById(addNewPet.id)
    assert.deepEqual(changePet,getPetById) 

    const deletePet=await pet.deletePetByID(addNewPet.id);
    //need add chack to negative tests
    
});

});  
    
