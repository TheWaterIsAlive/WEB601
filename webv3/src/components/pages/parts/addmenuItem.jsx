import React from 'react';

export class AddMenuItem extends React.Component {



  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4200/api/menuItem/', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
             "menuID": this.menuID.value,
              "itemName": this.itemName.value,
               "itemDescription":this.itemDescription.value,
                "itemCost": this.itemCost.value,
                 "energy": this.energy.value,
                  "protein": this.protein.value,
                   "fat": this.fat.value,
                    "carbohydrates": this.carbohydrates.value,
                     "sugar": this.sugar.value,
                      "dietaryFibre": this.dietaryFibre.value,
                       "sodium":this.sodium.value,
                        "allergenCondentions":this.allergenCondentions.value
        })});
    console.log("Menu Item added");
}

  
render() {


    return(
        <div className="menuSnapIn">
    
         
                <form onSubmit={this.handleSubmit}>
                <label>
                Menu ID:
                    <input ref={(ref) => {this.menuID = ref}} type="text" id="menuID" name="menuID" autocomplete="off"/>
                </label><br></br>
                <label>
                Item Name:
                    <input ref={(ref) => {this.itemName = ref}} type="text" id="itemName" name="itemName" autocomplete="off"/>
                </label><br></br>
                <label>
                Item Description:
                    <input ref={(ref) => {this.itemDescription = ref}} type="text" id="itemDescription" name="itemDescription" autocomplete="off"/>
                </label><br></br>
                <label>
                Item Cost:
                    <input ref={(ref) => {this.itemCost = ref}} type="text" id="itemCost" name="itemCost" autocomplete="off"/>
                </label><br></br>
                <label>
                Energy:
                    <input ref={(ref) => {this.energy = ref}} type="text" id="energy" name="energy" autocomplete="off"/>
                </label><br></br>
                <label>
                Protein:
                    <input ref={(ref) => {this.protein = ref}} type="text" id="protein" name="protein" autocomplete="off"/>
                </label><br></br>
                <label>
                Fat:
                    <input ref={(ref) => {this.fat = ref}} type="text" id="fat" name="fat" autocomplete="off"/>
                </label><br></br>

                <label>
                Carbohydrates:
                    <input ref={(ref) => {this.carbohydrates = ref}} type="text" id="carbohydrates" name="carbohydrates" autocomplete="off"/>
                </label><br></br>
                <label>
                Sugar:
                    <input ref={(ref) => {this.sugar = ref}} type="text" id="sugar" name="sugar" autocomplete="off"/>
                </label><br></br>
                <label>
                Dietary Fibre:
                    <input ref={(ref) => {this.dietaryFibre = ref}} type="text" id="dietaryFibre" name="dietaryFibre" autocomplete="off"/>
                </label><br></br>
                <label>
                Sodium:
                    <input ref={(ref) => {this.sodium = ref}} type="text" id="sodium" name="sodium" autocomplete="off"/>
                </label><br></br>
                <label>
                Allergen Condentions:
                    <input ref={(ref) => {this.allergenCondentions = ref}} type="text" id="allergenCondentions" name="allergenCondentions" autocomplete="off"/>
                </label><br></br>
                <input type="submit" id="Submit"/>
                </form>
            </div>
        
    )
}
}


export default AddMenuItem;