import React from 'react';

export class AddMenuItem extends React.Component {



    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this); //Binds button press so that the front knows what is going 
    }


    handleSubmit(event) {// Sets up the ability to set up there  submint button events
        event.preventDefault();

        const confirmable = window.fetch('http://localhost:4200/api/menuItem/', { //A promise which trys and gets to the database through routes
            method: 'post', //The type of action this event preforms
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ //creates a list of string so the infomration can be later displayed
                "menuID": this.menuID.value,
                "itemName": this.itemName.value,
                "itemDescription": this.itemDescription.value,
                "itemCost": this.itemCost.value,
                "energy": this.energy.value,
                "protein": this.protein.value,
                "fat": this.fat.value,
                "carbohydrates": this.carbohydrates.value,
                "sugar": this.sugar.value,
                "dietaryFibre": this.dietaryFibre.value,
                "sodium": this.sodium.value,
                "allergenCondentions": this.allergenCondentions.value,
                "image": this.image.value
            }) // The aboves use this and value as that is what this code is refering too

        }); confirmable.then((response) => response.json()).then((json) => {
            window.location.reload(); //Completes the promies and reloads the page after the connection is complete
        });



        console.log("Menu Item added"); //Logs some infomraton as a security messer
    }


    render() {


        return (
            <div className="menuItemBox ">
                 {/* a class made to make UI elements reuseable */}

                <div className="centeredText titleBox"><h2>New Menu Item</h2></div>
                <form onSubmit={this.handleSubmit}> 
                <center className="formText">
                    <label>
                        Menu ID:
                    <input className="formInput" ref={(ref) => { this.menuID = ref }} type="text" id="menuID" name="menuID" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Item Name:
                    <input className="formInput"  ref={(ref) => { this.itemName = ref }} type="text" id="itemName" name="itemName" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Item Description:
                    <input className="formInput itemFormDescription" ref={(ref) => { this.itemDescription = ref }} type="text" id="itemDescription" name="itemDescription" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Item Cost:
                    <input className="formInput"  ref={(ref) => { this.itemCost = ref }} type="text" id="itemCost" name="itemCost" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Energy:
                    <input className="formInput"  ref={(ref) => { this.energy = ref }} type="text" id="energy" name="energy" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Protein:
                    <input className="formInput"  ref={(ref) => { this.protein = ref }} type="text" id="protein" name="protein" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Fat:
                    <input className="formInput"  ref={(ref) => { this.fat = ref }} type="text" id="fat" name="fat" autoComplete="off" />
                    </label><br></br>

                    <label>
                        Carbohydrates:
                    <input className="formInput"  ref={(ref) => { this.carbohydrates = ref }} type="text" id="carbohydrates" name="carbohydrates" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Sugar:
                    <input className="formInput"  ref={(ref) => { this.sugar = ref }} type="text" id="sugar" name="sugar" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Dietary Fibre:
                    <input className="formInput"  ref={(ref) => { this.dietaryFibre = ref }} type="text" id="dietaryFibre" name="dietaryFibre" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Sodium:
                    <input className="formInput"  ref={(ref) => { this.sodium = ref }} type="text" id="sodium" name="sodium" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Allergen Condentions:
                    <input className="formInput"  ref={(ref) => { this.allergenCondentions = ref }} type="text" id="allergenCondentions" name="allergenCondentions" autoComplete="off" />
                    </label><br></br>
                    <label>
                        Image:
                    <input className="formInput"  ref={(ref) => { this.image = ref }} type="text" id="image" name="image" autoComplete="off" />
                    </label><br></br>
                    <input type="submit" id="Submit" /> 
                    {/* Table which contains feild fpr various different fields  */}
                    </center>
                </form>
            </div>

        )
    }
}


export default AddMenuItem;