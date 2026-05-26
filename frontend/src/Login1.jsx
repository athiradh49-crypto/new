function Login1(props) {
    return (
     <div className="d-flex justify-content-center align-items-center bg-light">
        <div className="bg-white p-5 shadow rounded" style={{width:"400px"}}>
            <h1>
                Campus Complaint Box
            </h1>
        <input type="text" placeholder="enter username" className="d-flex justify-content-center bg-light form-control mb-3"></input>
        <input type="text" placeholder="enter password" className="form-control mb-3"></input>
        <button type="submit" className="btn btn-dark w-100" onClick={()=> props.setIsLoggedIn(true)}>login</button>
        </div>
      </div>
    );
}
export default Login1;