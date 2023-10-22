import React from "react";
import Input_Structure from "../components/Input_Structure"
import TextArea_Structure from "../components/TextArea_Structure";


function Other_Information({notesOrRemarks, emailForQuotation, handleInputChange}) {
    return (
        <>
            <div className="otherInfo">
            <div className="sub-heading">Other Information</div>
                <div>
                    <TextArea_Structure 
                        requirement={true}
                        label_value="Notes/Remarks"
                        id_value="notesOrRemarks" 
                        value={notesOrRemarks}  
                        onchange_value={handleInputChange} />
                </div>
                <div>
                    <Input_Structure 
                        requirement={true}
                        label_value="Email for Quotation"
                        id_value="emailForQuotation" 
                        value={emailForQuotation}  
                        onchange_value={handleInputChange} />
                </div>
            </div>
        </>
    )
}

export default Other_Information;