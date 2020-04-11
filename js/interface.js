class Interface {
    constructor() {
        // Initialize the app when is instantiated
        this.init();
    }
    init() {
        this.printBreeds();
    }

    // Create img element with url get by API request
    displayPic(picUrl) {
        // Clean previous pic before displaying the new one
        this.cleanPic();
        // Create img
        const img = document.createElement('img');
        // Give class
        img.classList = 'img-fluid mx-auto d-block'
        // Give src to img
        img.src = picUrl;
        // Append img to the parent
        parent = document.getElementById('main-container');
        parent.appendChild(img);
    }

    // Clean pic if there's so
    cleanPic() {
        const pic = document.querySelector('.img-fluid');
        if (pic) {
            pic.remove();
        }

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
                            option.value = `${breed}/${subBreed}`;
                            option.appendChild(document.createTextNode(`${breed} ${subBreed}`))
                            select.appendChild(option);
                        });
                    }
                }
            });
    }

    // Display alert
    displayAlert(alert, classes) {
        const div = document.createElement('div');
        // Add Bootstrap alert classes to the div
        div.classList = classes;
        // Add alert to the div
        div.appendChild(document.createTextNode(alert));
        // Parent to append the div
        const alertContainer = document.getElementById('alert-container');
        // Append alert to parent
        alertContainer.appendChild(div)
        // Alert is removed after 3s
        setTimeout(() => {
            this.cleanAlert();
        }, 3000);
    }
    // Remove alert in case it exists already
    cleanAlert() {
        const alert = document.querySelector('.alert');
        alert.remove();
    }
}