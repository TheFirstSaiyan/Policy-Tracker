
import {Link, useNavigate} from 'react-router-dom';
function PolicyRow(props)
{
   

   
    return (
        <tr>
            <td>{props.policy.policyName}</td>
            <td>{props.policy.tenure}</td>
            <td>{props.policy.premiumType}</td>
            <td>{props.policy.premiumAmount}</td>
            <td><a href = {props.policy.emailLink}>{props.policy.emailLink}</a></td>
            <td><Link type = 'button' to = {`/update/${props.policy.policyId}`} className="btn btn-sm btn-info"><h6>change</h6></Link></td>

            <td><button type = 'button' className="btn btn-sm btn-warning" onClick={() => (props.handleDelete(props.policy.policyId))}>x</button></td>
        </tr>
    );
}

export default PolicyRow;