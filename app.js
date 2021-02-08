const searchButton = () => {
    const foodName = document.getElementById("inputFood").value;


    // let url = "";
    // if (userInput.length === 1) {
    //     url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    //     mealPlace.innerHTML = null;
    //     resultPlace.innerHTML = null;

    // } else {
    //     url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    //     mealPlace.innerHTML = null;
    //     resultPlace.innerHTML = null;
    // }

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
}
const displayFoods = foods => {
    const showFood = document.getElementById('displayFoods');
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        // div.className = 'row row-cols-2 row-cols-md-4 g-4 p-4';
        foodDiv.innerHTML = `
        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="card" style="width: 18rem;">
            <img src="${food.strMealThumb}" class="card-img-top" alt="nothing">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `;
        showFood.appendChild(foodDiv);
        const foodDetail = document.getElementById('staticBackdrop');
        foodDetail.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <img src="${food.strMealThumb}" class="card-img-top" alt="nothing">
                </div>
                <div class="modal-body">
                    <h5 class="modal-title" id="staticBackdropLabel">${food.strMeal}</h5>
                    <h3></h3>
                    <ul>
                        <li><i class="material-icons"></i>${food.strIngredient1}</li>
                        <li><i class="material-icons"></i>${food.strIngredient2}</li>
                        <li><i class="material-icons"></i>${food.strIngredient3}</li>
                        <li><i class="material-icons"></i>${food.strIngredient4}</li>
                        <li><i class="material-icons"></i>${food.strIngredient5}</li>
                        <li><i class="material-icons"></i>${food.strIngredient6}</li>
                        <li><i class="material-icons"></i>${food.strIngredient7}</li>

                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
        `;
    });

}