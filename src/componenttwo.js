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
		isOpen: false,
		accName:"",
		accNameString:""
		
	};



	callApexTwo(){

		LCC.callApex("ApexController.createAccount",
		this.state.accName,
		this.handleAccountCreateResponse,
		{escape: true});
	}

	onAccountNameCreateChange(e) {
		this.setState({accName: e.target.value});
	  }
	
	
	handleAccountCreateResponse(result, event) {
	  if (event.status) {
		this.setState({accNameString: result});
	  }
	  else if (event.type === "exception") {
		console.log(event.message + " : " + event.where);
	  }
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
							<Button label="Save" variant="brand" onClick={this.callApexTwo} />,
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
										onChange={e => this.onAccountNameCreateChange(e)}
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