
import React, { useState } from "react";
import NomineeDetails from "./NomineeDetails";

function NomineeForm(props) {
    const [nominees, setNominees] = useState([]);
    const [nomineeName, setNomineeName] = useState('');

    function handleClick() {
        
        setNominees(nominees => [...nominees, {id :nominees.length > 0 ? nominees[nominees.length-1].id + 1 : 1, name :nomineeName}]);
        setNomineeName('');
        props.setShowNomineeForm(false);

    }

    return (
        <div className="container">
            <div>
                <NomineeDetails nominees = {nominees} setNominees = {setNominees}/>
                
            </div>
            {props.showNomineeForm && <form>
                <div className="row mt-5  d-flex  justify-content-center align-items-center shadow p-3 mb-5 bg-light rounded">
                    <div className="col-md-5  d-flex  align-items-center" >
                        <label className='form-label m-2'>Nominee(s)</label>
                        <input type='text' className='form-control' required value={nomineeName} onChange={(e) => setNomineeName(e.target.value)}></input>
                    </div>
                    <div className="col-md-2">
                        <button type='button' className=' btn btn-success btn-sm' onClick={handleClick}>+</button>
                    </div>
                </div>
            </form>}
        </div>
    );
}

export default NomineeForm;