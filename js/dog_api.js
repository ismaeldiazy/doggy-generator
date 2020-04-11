class DogApi {
    constructor() {
        this.breedsUrl = 'https://dog.ceo/api/breeds/list/all'
    }
    // Request dog pic to the API with the selected value
    async getDogPicUrl(breed) {
        // Request random pic by selected breed
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);

        // Wait for the response and convert to JSON
        const dogPic = await response.json();

        // Return result
        return {
            dogPic
        }

    }
    
    // Get the breeds list
    async getBreedList() {
        // Request breed list to REST API
        const response = await fetch(this.breedsUrl)
        
        // Wait for the response and convert to JSON
        const breeds = await response.json();

        // Return result
        return {
            breeds
        }
    }
}