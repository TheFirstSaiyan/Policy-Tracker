

function NomineeRow(props) {

    function deleteClick(id)
    {
        console.log(id);
        let filtered = props.nominees.filter((nominee) => {return nominee.id !== id});
        props.setNominees(filtered);
    }
    return (
    <tr>
        <td>{props.nominee.name}</td>
        <td ><button type='button' className="btn-sm btn-primary" onClick={()=>deleteClick(props.nominee.id)}>remove</button>
        </td>
    </tr>);
}

export default NomineeRow;