
import NomineeForm from './NomineeForm'
import React,{useState} from 'react';

function AddPolicy() {

    const [showNomineeForm,setShowNomineeForm] = useState(false);


    return (
        <form>
            <div>
                <label className='mt-5 form-label'>Policy Name</label>
                <input type='text' className='form-control' required></input>
            </div>
            

            <div className="row">

                <div className="col-md-4">
                    <label className='mt-5 form-label'>Start date(mm/yyyy)</label>
                    <input type='text' className='form-control' required></input>
                </div>
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Tenure(in years)</label>
                    <input type='number' className='form-control' required min = {1}></input>
                </div>
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Last date(mm/yyyy)</label>
                    <input type='text' className='form-control' required></input>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Premium Type</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Monthly</option>
                        <option value="2">Yearly</option>
                        <option value="3">Once</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label className='mt-5 form-label'>premium amount (in Rupees)</label>
                    <input type='text' className='form-control' required></input>
                </div>
            </div>
            <div>
                <label className='mt-5 form-label'>Policy Description and Return details</label>
                <textarea type='text-area' rows={4} className='form-control' required></textarea>
            </div>

            <NomineeForm setShowNomineeForm = {setShowNomineeForm} showNomineeForm = {showNomineeForm}/>
            <div className='text-end'>
                {!showNomineeForm && <button type='button' className='mt-5 mb-2 btn btn-primary' onClick={()=>{setShowNomineeForm(!showNomineeForm)}}> + Nominee(s)</button>}
            </div>


            <div className='text-center'>
                <button type='button' className='mt-5 btn btn-success' >Submit</button>
            </div>

        </form>
    );
}

export default AddPolicy;