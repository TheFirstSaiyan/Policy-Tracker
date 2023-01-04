
import React, { useState } from "react";
import NomineeDetails from "./NomineeDetails";

function NomineeForm(props) {
    
    const [nomineeName, setNomineeName] = useState('');

    function handleClick() {
        
        props.setNominees(nominees => [...props.nominees, {id :nominees.length > 0 ? props.nominees[props.nominees.length-1].id + 1 : 1, name :nomineeName}],);
        setNomineeName('');
        props.setShowNomineeForm(false);

    }


    return (
        <div className="container">
            <div>
                <NomineeDetails nominees = {props.nominees} setNominees = {props.setNominees}/>
                
            </div>
            {props.showNomineeForm && <form>
                <div className="row mt-5  d-flex  justify-content-around align-items-center shadow p-3 mb-5 bg-light rounded">
                    <div className="col-10   d-flex  align-items-center justify-content-between" >
                        <label className='form-label m-2'>Nominee</label>
                        <input type='text' className='form-control' required value={nomineeName} onChange={(e) => setNomineeName(e.target.value)}></input>
                    </div>
                    <div className="col-2 ">
                        <button type='button' className=' btn btn-success btn-sm' onClick={handleClick}>+</button>
                    </div>
                </div>
            </form>}
        </div>
    );
}

export default NomineeForm;