import axios from "axios";
import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import PolicyRow from "./PolicyRow";

function ListPolicies() {

    async function handleDelete(id) {
        let res = await axios.delete("http://localhost:8080/deletePolicy/" + id);
        let data = await res.data;
        console.log(data);
        getAllPolicies();
    }

    const [policies, setPolicies] = useState([]);
    async function getAllPolicies() {
        let res = await axios.get("http://localhost:8080/policies");
        let data = await res.data;
        setPolicies(data.map((policy) => ({
            policyId: policy.id, policyName: policy.policyName,
            tenure: policy.tenure, premiumType: policy.premiumType, premiumAmount: policy.premiumAmount,
            nominees: policy.nominees, startDate: policy.startDate, lastDate: policy.lastDate,
            policyDetails: policy.policyDetails,emailLink : policy.emailLink
        })));
    }
    useEffect(() => {
        console.log("mounted");
        getAllPolicies();

    }, []);
    let data = policies;

    let headers = [
        {
            label: " Id", key: "policyId"
        },
        {
            label: " Policy Name", key: "policyName"
        },
        {
            label: " Policy Details", key: "policyDetails"
        },
        {
            label: " Start Date", key: "startDate"
        },
        {
            label: " Last Date", key: "lastDate"
        },
        {
            label: " Nominees", key: "nominees"
        },
        {
            label: " Premium Type", key: "premiumType"
        },
        {
            label: " Premium Amount", key: "premiumAmount"
        },
        {
            label: " Tenure", key: "tenure"
        },
        {
            label: " Email Link", key: "emailLink"
        },
    ];

    const csvLink = {
        filename: "policies.csv",
        headers: headers,
        data: data

    };

    return (
        <div>
            <div className="d-flex align-items-center">
                <CSVLink {...csvLink} onClick={(e, done) => {
                    getAllPolicies();
                }} type='button' className=" m-2 btn btn-sm btn-primary" >export to CSV</CSVLink>
                <span>Export to see all details</span>
            </div>

            <table className="mt-2 table border table-fixed table-hover">
                <thead>
                    <tr>
                        <th>Policy</th>
                        <th>Tenure</th>
                        <th>Type of premium</th>
                        <th>Premium amount</th>
                        <th>Email Link</th>
                    </tr>
                </thead>
                <tbody>
                    {policies.map((policy, i) => <PolicyRow key={i} policy={policy} handleDelete={handleDelete} />)}
                </tbody>
            </table>
        </div>
    );
}

export default ListPolicies;