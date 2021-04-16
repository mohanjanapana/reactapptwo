import React from 'react';

import LCC from "lightning-container";


import DataTable from '@salesforce/design-system-react/components/data-table'; 
import DataTableColumn from '@salesforce/design-system-react/components/data-table/column';
import DataTableCell from '@salesforce/design-system-react/components/data-table/cell';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Button from '@salesforce/design-system-react/components/button'; 





const CustomDataTableCell = ({ children, ...props }) => (
	<DataTableCell {...props}>
		<a
			href
			onClick={(event) => {
				event.preventDefault();
			}}
		>
			{children}
		</a>
	</DataTableCell>
);
CustomDataTableCell.displayName = DataTableCell.displayName;

const columns = [
	<DataTableColumn
		key="opportunity"
		label="Opportunity Name"
		property="opportunityName"
	>
		<CustomDataTableCell />
	</DataTableColumn>,

	<DataTableColumn
		key="account-name"
		label="Account Name"
		property="accountName"
	/>,

	<DataTableColumn key="close-date" label="Close Date" property="closeDate" />,

	<DataTableColumn key="stage" label="Stage" property="stage" />,

	<DataTableColumn key="confidence" label="Confidence" property="confidence" />,

	<DataTableColumn key="amount" label="Amount" property="amount" />,

	<DataTableColumn key="contact" label="Contact" property="contact">
		<CustomDataTableCell />
	</DataTableColumn>,
];

class componentone extends React.Component {
	static displayName = 'DataTableExample';

    state = {
		accounts: [],
	};

    callApex() {
        LCC.callApex("ApexController.getAccount",
        
                     this.handleAccountQueryResponse,
                     {escape: true});
      }
    
      handleAccountQueryResponse(result, event) {
        if (event.status) {
          this.setState({accounts: result});
        }
        else if (event.type === "exception") {
          console.log(event.message + " : " + event.where);
        }
      }
    

	
	render() {
		return (
            <div>
			<IconSettings iconPath="/assets/icons">
				<div style={{ overflow: 'auto' }}>
                <h1 style={{marginLeft:"300px",color:"black", fontSize:"16px"}}><b></b></h1>
                <Button label="Brand" variant="brand" onClick={this.callApex}/>
					<DataTable items={this.state.accounts} id="DataTableExample-1-default">
						{columns}
					</DataTable>
				</div>
			</IconSettings>
            </div>
		);
	}
}
export default componentone;
