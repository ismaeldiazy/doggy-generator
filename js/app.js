const dogApi = new DogApi();
const ui = new Interface();

// Submit listener
document.addEventListener('submit', (e) => {
    e.preventDefault();
    // Read value from the breed selected options
    const breeds = document.getElementById('select-breeds');
    const selectedBreed = breeds.options[breeds.selectedIndex].value;

    // Check the select is not empty
    if (selectedBreed !== "") {
        dogApi.getDogPicUrl(selectedBreed)
            .then(dogPic => {
                const rndmPic = dogPic.dogPic.message;
                // Call method to create picture with given img src
                ui.displayPic(rndmPic);
            })
    } else {
        // Display alert if select is empty
        ui.displayAlert('Please, choose a breed', 'alert alert-danger text-center');
    }
})



