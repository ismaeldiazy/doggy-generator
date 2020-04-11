const dogApi = new DogApi();
const ui = new Interface();

// Created a function that reads the promise returned by the fetch API request
// which will be passed as argument of the eventlisteners
function displayPic() {
    // Read value from the breed selected options
    const breeds = document.getElementById('select-breeds');
    const selectedBreed = breeds.options[breeds.selectedIndex].value;

    const parent = document.getElementById('dog-container')

    // Check the select is not empty
    if (selectedBreed !== "") {
        // Display loader while request is loading
        ui.createLoader(parent);
        dogApi.getDogPicUrl(selectedBreed)
            .then(dogPic => {
                const rndmPic = dogPic.dogPic.message;
                // Clean loader if so
                ui.cleanLoader();
                // Call method to create picture with given img src
                ui.createPic(rndmPic, parent);
            })
        
    } else {
        // Display alert if select is empty
        ui.displayAlert('Please, choose a breed', 'alert alert-danger text-center');
    }
}

// Submit listener
document.addEventListener('submit', (e) => {
    e.preventDefault();
    displayPic();
})
// Dog img 
document.addEventListener('click', (e) => {
    if (e.target.id == 'dog-pic') {
        displayPic();
        pic = document.getElementById('dog-pic');
        pic.focus();
    }
})



