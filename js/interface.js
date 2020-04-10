class Interface {
    constructor() {
        // Initialize the app when is instantiated
        this.init();
    }
    init() {
        this.printBreeds();
    }

    // Print the dog brees in the select options
    printBreeds() {
        const breedsList = dogApi.getBreedList()
            .then(breeds => {
                const breedsJson = breeds.breeds.message;
                const select = document.getElementById('select-breeds');
                for (const [key, value] of Object.entries(breedsJson)) {
                    const option = document.createElement('option');
                    // Breeds contained in the obj key
                    const breed = key;
                    // Give option value (breed)
                    option.value = breed;
                    // Give option text content
                    option.appendChild(document.createTextNode(breed))
                    select.appendChild(option);
                    // If the breed array is not empty
                    if (value.length > 0) {
                        value.forEach(subBreed => {
                            const option = document.createElement('option');
                            // Give option value (sub-breed)
                            option.value = `${breed}-${subBreed}`;
                            option.appendChild(document.createTextNode(`${breed} ${subBreed}`))
                            select.appendChild(option);
                        });
                    }
                }
            });
    }
}