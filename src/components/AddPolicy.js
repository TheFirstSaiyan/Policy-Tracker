
import NomineeForm from './NomineeForm'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function AddPolicy() {


    const [showNomineeForm, setShowNomineeForm] = useState(false);

    const [policyName, setPolicyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [tenure, setTenure] = useState('');
    const [premiumType, setPremiumType] = useState('Monthly');
    const [premiumAmount, setPremiumAmount] = useState(0);
    const [policyDetails, setPolicyDetails] = useState('');
    const [nominees, setNominees] = useState([]);
    const [emailLink, setEmailLink] = useState('');

    function checkLength() {
        console.log(premiumType);
        return policyName.length > 0 && policyDetails.length > 0 && premiumType.length > 0 && emailLink.length > 0;
    }

    function checkInvalidChars() {
        let re = new RegExp("^[0-9]+$");
        return re.test(tenure) && re.test(premiumAmount);
    }

    function checkDate() {

        let re = new RegExp("^(0[123456789]|10|11|12)([/])([1-2][0-9][0-9][0-9])$");
        return re.test(startDate) && re.test(lastDate);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello");
        if (checkLength() && checkDate() && checkInvalidChars()) {
            let nom = []
            for (let n of nominees) {
                nom.push(n.name);
            }
            let data = {
                policyName: policyName, policyDetails: policyDetails, startDate: startDate, lastDate: lastDate,
                tenure: tenure, nominees: nom.join(" and "),
                premiumType: premiumType, premiumAmount: premiumAmount,emailLink : emailLink
            };
            await axios.post("http://localhost:8080/add", data);
            alert("successfully added!!")
            setPolicyName('');
            setStartDate('');
            setLastDate('');
            setTenure('');
            setPremiumType('Monthly');
            setPremiumAmount(0);
            setPolicyDetails('');
            setNominees([]);
            setEmailLink('');
        }
        else {
            alert("Please give valid input");
        }
    }


    return (
        <form >
            <div>
                <label className='mt-5 form-label'>Policy/Investment Name</label>
                <input type='text' className='form-control' required value={policyName} onChange={(e) => (setPolicyName(e.target.value))}></input>
            </div>


            <div className="row">

                <div className="col-md-4">
                    <label className='mt-5 form-label'>Start date(mm/yyyy)</label>
                    <input type='text' className='form-control' required value={startDate} onChange={(e) => (setStartDate(e.target.value))}></input>
                </div>
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Tenure(in years)</label>
                    <input type='number' className='form-control' required min={1} value={tenure} onChange={(e) => (setTenure(e.target.value))}></input>
                </div>
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Last date(mm/yyyy)</label>
                    <input type='text' className='form-control' required value={lastDate} onChange={(e) => (setLastDate(e.target.value))}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <label className='mt-5 form-label'>Premium Type</label>
                    <select class="form-select" aria-label="Default select example" value={premiumType} onChange={(e) => (setPremiumType(e.target.value))}>
                        <option selected value='Monthly'>Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Once">Once</option>
                        <option value="Anytime">Anytime</option>
                    </select>
                </div>

                <div className="col-md-4">
                    <label className='mt-5 form-label'>premium amount (in Rupees)</label>
                    <input type='text' className='form-control' required value={premiumAmount} onChange={(e) => (setPremiumAmount(e.target.value))}></input>
                </div>
            </div>
            <div>
                <label className='mt-5 form-label'>Policy Description and Return details</label>
                <textarea type='text-area' rows={4} className='form-control' required value={policyDetails} onChange={(e) => (setPolicyDetails(e.target.value))}></textarea>
            </div>
            <div className='m-5 d-flex justify-content-evenly align-items-center'>
                <label className=' form-label'>Link to Documents</label>
                <input type='text' className='w-75 form-control' required value={emailLink} onChange={(e) => (setEmailLink(e.target.value))}></input>
            </div>

            <NomineeForm setShowNomineeForm={setShowNomineeForm} showNomineeForm={showNomineeForm} nominees={nominees} setNominees={setNominees} />
            <div className='text-end'>
                {!showNomineeForm && <button type='button' className='mt-5 mb-2 btn btn-primary' onClick={() => { setShowNomineeForm(!showNomineeForm) }}> + Nominee(s)</button>}
            </div>


            <div className='text-center'>
                <button type='submit' className='mt-1 btn btn-success' onClick={(e) => (handleSubmit(e))}>Submit</button>
            </div>


        </form>
    );
}

export default AddPolicy;