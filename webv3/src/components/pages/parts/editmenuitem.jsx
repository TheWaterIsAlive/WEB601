import React from 'react';

export class EditMenuItem extends React.Component {



    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state({
            isFetching: false,
            selectedID: "",
            items: []
        })
    }
    // Gets a single item from the database menu items
    GetAMenuItem() { 
        fetch('http://localhost:4200/api/menuItem/' + selectedID)
            .then(res => res.json())
            .then(data => {
                if (data.cod === '404') {
                    this.setState({
                        isFetching: false,//States to show that the item has not be retreieved
                    })
                } else {
                    this.setState({
                        isFetching: true,//States to show that the item has not be retreieved
                        items: data,
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/menuItem/' + selectedID, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
                "allergenCondentions": this.allergenCondentions.value
            })
        });

        console.log("Menu Item Edited");
    }
    selectedID() {

        this.setState({
            selectedID: selectedID.value
        }) //Sets the state of the item we was to get cut

    }

    render() {


        return (
            <div className="menuSnapIn">


                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select ID:
                    <input onChange={this.selectItem()} ref={(ref) => { this.selectID = ref }} type="text" id="selectID" name="selectID" autocomplete="off" />
                    </label><br></br>
                    <button onclick={loadData()}>Select</button>
                    <label>
                        Menu ID:
                    <input ref={(ref) => { this.menuID = ref }} type="text" id="menuID" name="menuID" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Item Name:
                    <input ref={(ref) => { this.itemName = ref }} type="text" id="itemName" name="itemName" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Item Description:
                    <input ref={(ref) => { this.itemDescription = ref }} type="text" id="itemDescription" name="itemDescription" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Item Cost:
                    <input ref={(ref) => { this.itemCost = ref }} type="text" id="itemCost" name="itemCost" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Energy:
                    <input ref={(ref) => { this.energy = ref }} type="text" id="energy" name="energy" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Protein:
                    <input ref={(ref) => { this.protein = ref }} type="text" id="protein" name="protein" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Fat:
                    <input ref={(ref) => { this.fat = ref }} type="text" id="fat" name="fat" autocomplete="off" />
                    </label><br></br>

                    <label>
                        Carbohydrates:
                    <input ref={(ref) => { this.carbohydrates = ref }} type="text" id="carbohydrates" name="carbohydrates" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Sugar:
                    <input ref={(ref) => { this.sugar = ref }} type="text" id="sugar" name="sugar" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Dietary Fibre:
                    <input ref={(ref) => { this.dietaryFibre = ref }} type="text" id="dietaryFibre" name="dietaryFibre" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Sodium:
                    <input ref={(ref) => { this.sodium = ref }} type="text" id="sodium" name="sodium" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Allergen Condentions:
                    <input ref={(ref) => { this.allergenCondentions = ref }} type="text" id="allergenCondentions" name="allergenCondentions" autocomplete="off" />
                    </label><br></br>
                    <input type="submit" id="Submit" />
                </form>
            </div>

        )
    }
}


export default AddMenuItem;