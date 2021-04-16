import React from 'react';
import LCC from 'lightning-container';

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


    const token = '00D2v000001YYJR!ARkAQM4EsiVNoQY92NFH7ZDG1ZHCXVoHVMKTkm784Q98ziIzmh12B1WcB1U9ik6L2A0jCQhyNXkmpM7TaMp85bT3_aP0aO05';


    axios.post('https://crazydev-dev-ed.my.salesforce.com/services/apexrest/ReactRestClass', {name:this.state.name},{headers:{'Authorization':`Bearer ${token}`,'content-Type':'application/json'},mode:'cors'})
      .then(res => {
        console.log(res);
        console.log(res.data);
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
						label="Create Account Record"
						onClick={this.toggleOpen}
					/>
					<Modal
						isOpen={this.state.isOpen}
						footer={[
							<Button label="Cancel" onClick={this.toggleOpen} />,
							<Button label="Save" variant="brand" onClick={this.handleSubmit} />,
						]}
						onRequestClose={this.toggleOpen}
						heading="New Account"
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
