import React from 'react';

export class CreateUser extends React.Component {



    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);//Binds button press so that the front knows what is going 
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/users/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": this.username.value,
                "accountPassword": this.accountPassword.value,
                "email": this.email.value
            })
        });
        console.log("User added");
    }


    render() {


        return (
            <div className="menuSnapIn">


                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    <input ref={(ref) => { this.username = ref }} type="text" id="username" name="username" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Account Password:
                    <input ref={(ref) => { this.accountPassword = ref }} type="text" id="accountPassword" name="accountPassword" autocomplete="off" />
                    </label><br></br>
                    <label>
                        Email:
                    <input ref={(ref) => { this.email = ref }} type="text" id="email" name="email" autocomplete="off" />
                    </label><br></br>

                    <input type="submit" id="Submit" />
                </form>
            </div>

        )
    }
}


export default CreateUser;