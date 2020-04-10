class DogApi {
    constructor() {
        this.breedsUrl = 'https://dog.ceo/api/breeds/list/all'
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