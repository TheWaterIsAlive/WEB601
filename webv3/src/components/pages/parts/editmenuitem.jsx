import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
export class EditMenuItem extends React.Component {



    constructor() {
        super();
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state=({
            currentData={
            isFetching: false,
            itemID: '2',
            menuID: '',
            itemName: '',
            // itemDescription: 'Test',
            // itemCost: '',
            // energy: '',
            // protein: '',
            // fat: '',
            // carbohydrates: '',
            // sugar: '',
            // dietaryFibre: '',
            // sodium: '',
            // allergenCondentions: '',
            image: ''
            }

        })
    }


    GetAMenuItem() {
        console.log('Hello');
        fetch('http://localhost:4200/api/menuItem/' + this.state.itemsID,{
            method: 'GET'
        }).then(res => res.json())
              .then(data => {
                console.log('I am working');
                    if (data.cod === '404') {
                        console.log('Item could not be found');
                          this.setState({
                                isFetching: false,
                          })
                    } else {
                        console.log('Item could found');
                        console.log(data.itemName);
                          this.setState({
                                isFetching: true, //Gets all menu items from the menuItem table and stores them in the items state
                               
                          });
                        
                    }
              })
              .catch(err => {
                    console.log(err);
              })
  }



    // Gets a single item from the database menu items
    // GetAMenuItem() { 
        
    //     console.log('Hello');

    //     fetch('http://localhost:4200/api/menuItem/' + this.state.itemsID)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.cod === '404') {
    //                 console.log('Not Found');
    //                  this.setState({
    //                //   menuID: '',
    //                 //     itemName: '',
    //                 //     itemDescription: '',
    //                 //     itemCost: '',
    //                 //     energy: '',
    //                 //     protein: '',
    //                 //     fat: '',
    //                 //     carbohydrates: '',
    //                 //     sugar: '',
    //                 //     dietaryFibre: '',
    //                 //     sodium: '',
    //                 //     allergenCondentions: '',
    //                 //     image: ''
    //                 });

    //             } else {
    //                 console.log(data.itemName);
    //                 this.setState({
                        
    //                     //menuID: data.itemID,
    //                     // itemName: data.itemName,
    //                     // itemDescription: data.itemDescription,
    //                     // itemCost: '',
    //                     // energy: '',
    //                     // protein: '',
    //                     // fat: '',
    //                     // carbohydrates: '',
    //                     // sugar: '',
    //                     // dietaryFibre: '',
    //                     // sodium: '',
    //                     // allergenCondentions: '',
    //                     // image: ''
    //                 });

    //             }
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })

            

    // }

    submitEdit() {
       console.log('Hello')
        fetch('http://localhost:4200/api/menuItem/' + this.state.itemID, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "menuID": this.state.currentData.menuID.value,
                "itemName": this.state.currentData.itemName.value,
                // "itemDescription": this.stateitem.itemDescription,
                // "itemCost": this.state.itemCost.value,
                // "energy": this.state.energy.value,
                // "protein": this.state.protein.value,
                // "fat": this.state.fat.value,
                // "carbohydrates": this.state.carbohydrates.value,
                // "sugar": this.state.sugar.value,
                // "dietaryFibre": this.state.dietaryFibre.value,
                // "sodium": this.state.sodium.value,
                // "allergenCondentions": this.state.allergenCondentions.value,
                "image": this.state.image.value
            })
        });

        console.log("Menu Item Edited");
    }
    updateID(event){

        this.setState({
          itemID: event.target.value
        })
      }


      updateMenuID(event){

        this.setState({
          menuID: event.target.value
        })
      }
      updateItemName(event){

        this.setState({
          itemName: event.target.value
        })
      }
    //   updateDescription(event){

    //     this.setState({
    //       itemDescription: event.target.value
    //     })
    //   }
      updateCost(event){

        this.setState({
          itemCost: event.target.value
        })
      }

    //   updateEnergy(event){

    //     this.setState({
    //       energy: event.target.value
    //     })
    //   }
    //   updateProtein(event){

    //     this.setState({
    //       protein: event.target.value
    //     })
    //   }

    //   updateFat(event){

    //     this.setState({
    //       fat: event.target.value
    //     })
    //   }

    //   updateCarbohydrates(event){

    //     this.setState({
    //       carbohydrates: event.target.value
    //     })
    //   }

    //   updateSugar(event){

    //     this.setState({
    //       sugar: event.target.value
    //     })
    //   }

    //   updateDietaryFibre(event){

    //     this.setState({
    //       dietaryFibre: event.target.value
    //     })
    //   }
    //   updateSodium(event){

    //     this.setState({
    //       sodium: event.target.value
    //     })
    //   }
    //   updateAllergenCondentions(event){

    //     this.setState({
    //       allergenCondentions: event.target.value
    //     })
    //   }
      updateImage(event){

        this.setState({
          image: event.target.value
        })

      }


    render() {


        return (
           <Container>
               <Row>
                   <Col><label>Item ID</label></Col>
                   <Col><input type="text" value={this.state.itemID} onChange={this.updateID.bind(this)} id="itemID"
                       name="itemID" autoComplete="off" /></Col>
               </Row>
               <Row><Col><button onClick={this.GetAMenuItem.bind(this)}>Select Item</button></Col></Row>
               <Row>
                   <Col><label>Menu ID</label></Col>
                   <Col><input value={this.state.menuID} onChange={this.updateMenuID.bind(this)} id="menuID"
                       name="menuID" autoComplete="off"/></Col>
               </Row>
               <Row>
                   <Col><label>Item Name</label></Col>
                   <Col><input value={this.state.itemName} onChange={this.updateItemName.bind(this)} id="itemName"
                       name="itemName" autoComplete="off" /></Col>
               </Row>
               {/* <Row>
                   <Col><label>Item Discription</label></Col>
                   <Col><input value={this.state.itemDescription} onChange={this.updateDescription.bind(this)} id="itemDescription"
                       name="itemDescription" autoComplete="off" /></Col>
               </Row> */}
               <Row>
                   <Col><label>Item Cost</label></Col>
                   <Col><input value={this.state.itemCost} onChange={this.updateCost.bind(this)} id="itemCost"
                       name="itemCost" autoComplete="off" /></Col>
               </Row>
               {/* <Row>
                   <Col><label>Energy</label></Col>
                   <Col><input value={this.state.energy} onChange={this.updateEnergy.bind(this)} id="energy"
                       name="energy" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Protein</label></Col>
                   <Col><input value={this.state.protein} onChange={this.updateProtein.bind(this)} id="protein"
                       name="protein" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Fat</label></Col>
                   <Col><input value={this.state.fat} onChange={this.updateFat.bind(this)} id="fat"
                       name="fat" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Carbohydrates</label></Col>
                   <Col><input value={this.state.carbohydrates} onChange={this.updateCarbohydrates.bind(this)} id="carbohydrates"
                       name="carbohydrates" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Sugar</label></Col>
                   <Col><input value={this.state.sugar} onChange={this.updateSugar.bind(this)} id="sugar"
                       name="sugar" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Dietary Fibre</label></Col>
                   <Col><input value={this.state.dietaryFibre} onChange={this.updateDietaryFibre.bind(this)} id="dietaryFibre"
                       name="dietaryFibre" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Sodium</label></Col>
                   <Col><input value={this.state.sodium} onChange={this.updateSodium.bind(this)} id="sodium"
                       name="sodium" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col><label>Allergen Condentions</label></Col>
                   <Col><input  value={this.state.allergenCondentions} onChange={this.updateAllergenCondentions.bind(this)} id="allergenCondentions"
                       name="allergenCondentions" autoComplete="off" /></Col>
               </Row> */}
               <Row>
                   <Col><label>Image URL</label></Col>
                   <Col><input  value={this.state.image} onChange={this.updateImage.bind(this)} id="image"
                       name="image" autoComplete="off" /></Col>
               </Row>
               <Row>
                   <Col>
                   <Button onClick={this.submitEdit.bind(this)}>Submit</Button>
                   </Col>
               </Row>

           </Container>


                
        )
    }
}


export default EditMenuItem;