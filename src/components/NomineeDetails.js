import NomineeRow from "./NomineeRow";

function NomineeDetails(props)
{
    
    return (
        
        <table className=" text-center mt-2 table border table-fixed table-hover">
            <thead>
                <tr>
                    <th>Nominee(s)</th>
                </tr>
            </thead>
            <tbody>
            {props.nominees.map((nominee)=>(<NomineeRow key = {nominee.id}  nominee = {nominee} setNominees = {props.setNominees} nominees = {props.nominees}/>))}
            </tbody>
        </table>
    );
}

export default NomineeDetails;