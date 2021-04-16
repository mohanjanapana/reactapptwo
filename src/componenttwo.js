import React from 'react';
import axios from 'axios';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Modal from '@salesforce/design-system-react/components/modal'; 
import Button from '@salesforce/design-system-react/components/button';
//import Lookup from '@salesforce/design-system-react/components/lookup';
//import Combobox from '@salesforce/design-system-react/components/combobox';



class componenttwo extends React.Component {
	static displayName = 'ModalExample';


	state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  
  

  handleSubmit = event => {
    event.preventDefault();


    const token = '00D2v000001YYJR!ARkAQFmnVo7CbiszFAgl5oGtCA9NNZu6ZaGEYHx7kOIndj.Ru6CcC4Z0.2gFMS_GfxiyvQb5L7XLoJ2baw3THsAn7p_Zcnf2';


    axios.post('https://crazydev-dev-ed.my.salesforce.com/services/apexrest/ReactRestClass', {name:this.state.name},{headers:{'Authorization':`Bearer ${token}`,'content-Type':'application/json'},mode:'cors'})
      .then(res => {
        console.log(res);
        console.log(res.data);
	    alert('contact created successfully');
	    
	    
      })
  }

	toggleOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div>
					<Button
						label="Create Contact Record"
						onClick={this.toggleOpen}
					/>
					<Modal
						isOpen={this.state.isOpen}
						footer={[
							<Button label="Cancel" onClick={this.toggleOpen} />,
							<Button label="Save" variant="brand" onClick={this.handleSubmit} />,
						]}
						onRequestClose={this.toggleOpen}
						heading="New Contact"
					>
						<section className="slds-p-around_large">
							<div className="slds-form-element slds-m-bottom_large">
								<label className="slds-form-element__label" htmlFor="opptyName">
									Account Name
								</label>
								<div className="slds-form-element__control">
									<input
										id="opptyName"
										className="slds-input"
										type="text"
										placeholder="Enter name"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							
							
			
						</section>
					</Modal>
				</div>
			</IconSettings>
		);
	}
}
export default componenttwo;
