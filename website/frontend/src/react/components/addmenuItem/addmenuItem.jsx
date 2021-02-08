import React from "react";
import ConnectedLoginRegistration from "../loginRegistration/loginRegistration";
import { Form, Label, Input } from "reactstrap";
export class AddMenuItem extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this); // Binds button press so that the front knows what is going
  }

  handleSubmit(event) {
    // Sets up the ability to set up there  submint button events
    event.preventDefault();

    const confirmable = window.fetch("http://localhost:3007/menuItem/", {
      // A promise which trys and gets to the database through routes
      method: "post", // The type of action this event preforms
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // creates a list of string so the infomration can be later displayed
        id: this.menuID.value,
        itemName: this.itemName.value,
        itemDescription: this.itemDescription.value,
        itemCost: this.itemCost.value,
        itemImage: this.image.value
      }), // The aboves use this and value as that is what this code is refering too
    });
    confirmable
      .then((response) => response.json())
      .then((json) => {
        window.location.reload(); // Completes the promies and reloads the page after the connection is complete
      });

    console.log("Menu Item added"); // Logs some infomraton as a security messer
  }

  render() {
    if (this.props.loginStatus === false) {
      return <ConnectedLoginRegistration></ConnectedLoginRegistration>;
    }
    // If a user is not log in they are instead show a form to register or log in.
    else {
      return (
        <div className="menuItemBox ">
          {/* a class made to make UI elements reuseable */}

          <div className="centeredText titleBox">
            <h2 className="formTitle">New Menu Item</h2>
          </div>
          <Form onSubmit={this.handleSubmit}>
            {/* Tells the form what funtion to follow when the form is submited. */}

            <center className="formText">
              <Label>
                Menu ID:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.menuID = ref;
                  }}
                  type="text"
                  id="menuID"
                  name="menuID"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Item Name:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.itemName = ref;
                  }}
                  type="text"
                  id="itemName"
                  name="itemName"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Item Description:
                <Input
                  className="formInput itemFormDescription"
                  ref={(ref) => {
                    this.itemDescription = ref;
                  }}
                  type="text"
                  id="itemDescription"
                  name="itemDescription"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Item Cost:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.itemCost = ref;
                  }}
                  type="text"
                  id="itemCost"
                  name="itemCost"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Energy:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.energy = ref;
                  }}
                  type="text"
                  id="energy"
                  name="energy"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Protein:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.protein = ref;
                  }}
                  type="text"
                  id="protein"
                  name="protein"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Fat:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.fat = ref;
                  }}
                  type="text"
                  id="fat"
                  name="fat"
                  autoComplete="off"
                />
              </Label>
              <br></br>

              <Label>
                Carbohydrates:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.carbohydrates = ref;
                  }}
                  type="text"
                  id="carbohydrates"
                  name="carbohydrates"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Sugar:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.sugar = ref;
                  }}
                  type="text"
                  id="sugar"
                  name="sugar"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Dietary Fibre:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.dietaryFibre = ref;
                  }}
                  type="text"
                  id="dietaryFibre"
                  name="dietaryFibre"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Sodium:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.sodium = ref;
                  }}
                  type="text"
                  id="sodium"
                  name="sodium"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Allergen Condentions:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.allergenCondentions = ref;
                  }}
                  type="text"
                  id="allergenCondentions"
                  name="allergenCondentions"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Label>
                Image:
                <Input
                  className="formInput"
                  ref={(ref) => {
                    this.image = ref;
                  }}
                  type="text"
                  id="image"
                  name="image"
                  autoComplete="off"
                />
              </Label>
              <br></br>
              <Input type="submit" id="Submit" />
              {/* Table which contains feild fpr various different fields  */}
            </center>
          </Form>
        </div>
      );
    }
  }
}

export default AddMenuItem;
