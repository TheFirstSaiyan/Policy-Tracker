function NomineeForm() {
    return (<form>
        <div className="row mt-5  d-flex align-items-center">
            <div className="col-md-5 d-flex flex-column justify-content-center" >
                <label className='form-label'>Nominee name</label>
                <input type='text' className='form-control' required></input>
            </div>
            <div className="col-md-5">
                <label className='form-label '>percentage</label>
                <input type='text' className='form-control' required></input>
            </div>
            <div className="col-md-2">
                <button type='button' className=' btn btn-success btn-sm' >ok</button>
            </div>
        </div>
    </form>
    );
}

export default NomineeForm;