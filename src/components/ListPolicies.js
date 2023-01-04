import axios from "axios";
import React, { useEffect, useState } from "react";

function ListPolicies() {

    const [policies, setPolicies] = useState([]);
    async function getAllPolicies() {
        let res = await axios.get("http://localhost:8080/policies");
        let data = await res.data;
        setPolicies(data.map((policy) => ({
            policyId: policy.id, policyName: policy.policyName,
            tenure: policy.tenure, premiumType: policy.premiumType, premiumAmount: policy.premiumAmount
        })));
    }
    useEffect(() => {
        console.log("mounted");
        getAllPolicies();

    }, []);

    return (
        <div>
            <p>download to get all attributes</p>

            <table className="mt-2 table border table-fixed table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Policy</th>
                        <th>tenure</th>
                        <th>type of premium</th>
                        <th>premium amount</th>
                    </tr>
                </thead>
                <tbody>
                    {policies.map((policy,i) => <tr key ={i}>
                        <th>{policy.policyId}</th>
                        <td>{policy.policyName}</td>
                        <td>{policy.tenure}</td>
                        <td>{policy.premiumType}</td>
                        <td>{policy.premiumAmount}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default ListPolicies;