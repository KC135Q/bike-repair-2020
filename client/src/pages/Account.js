import React from "react";

function Account() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image"></img>
                                </div>
                                <div className="col-md-9">
                                    <h5 className="card-title">User First and Last Name</h5>
                                    <p className="card-text">Phone Number: (555)555-555</p>
                                    <p className="card-text">Email: firstname.lastname@gmail.com</p>
                                    <a href="#" className="btn btn-blue">Sign in with Facebook</a>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-blue" data-toggle="modal" data-target="#AccountEditModal">
                                        Edit Account Info
                                    </button>
                                    {/* Edit info grabbed from facebook login */}

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="AccountEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-body">
                                                {/* <!--Modal: Contact form--> */}
                                                <div class="modal-dialog cascading-modal" role="document">

                                                    {/* <!--Content--> */}
                                                    <div class="modal-content">

                                                        {/* <!--Header--> */}
                                                        <div class="modal-header info-color white-text">
                                                            <h4 class="title">
                                                                <i class="fa fa-pencil-alt"></i> Edit Account Information</h4>
                                                            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        {/* <!--Body--> */}
                                                        <div class="modal-body">

                                                            {/* <!-- Default input name --> */}
                                                            <label for="defaultFormNameModalEx">New User Name</label>
                                                            <input type="text" id="defaultFormNameModalEx" class="form-control form-control-sm" placeholder="First and Last Name"></input>

                                                            <br></br>

                                                            {/* <!-- Default input email --> */}
                                                            <label for="defaultFormSubjectModalEx">New Email</label>
                                                            <input type="text" id="defaultFormSubjectModalEx" class="form-control form-control-sm" placeholder="john.smith@gmail.com"></input>

                                                            <br></br>

                                                            {/* <!-- Default input subject --> */}
                                                            <label for="defaultFormSubjectModalEx">New Phone Number</label>
                                                            <input type="text" id="defaultFormSubjectModalEx" class="form-control form-control-sm" placeholder="(555)555-555"></input>

                                                            <br></br>
                                                            <label for="defaultFormSubjectModalEx">Change Your Photo</label>
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="validatedCustomFile" required></input>
                                                                <label class="custom-file-label" for="validatedCustomFile">Choose picture...</label>
                                                                <div class="invalid-feedback">Example invalid custom file feedback</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>

                                        </div>
                                        {/* END MODAL */}
                                        {/* add a modal once they want to add a bike */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image"></img>
                                </div>
                                <div className="col-md-9">
                                    <h5 className="card-title">Bike Information</h5>
                                    <p className="card-text">Type of Bike: Mountain or Road</p>
                                    <p className="card-text">Last Worked on: 04/12/2018</p>
                                    <p className="card-text">Adult or kid Bike: Adult</p>
                                    <p className="card-text">Additional Notes:</p>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-blue" data-toggle="modal" data-target="#AddaBikeModal">
                                        Add your Bike Information
                                    </button>



                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="AddaBikeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-body">
                                                {/* <!--Modal: Contact form--> */}
                                                <div class="modal-dialog cascading-modal" role="document">

                                                    {/* <!--Content--> */}
                                                    <div class="modal-content">

                                                        {/* <!--Header--> */}
                                                        <div class="modal-header info-color white-text">
                                                            <h4 class="title">
                                                                <i class="fas fa-bicycle" style={{ fontSize: '1.5em' }}></i> Tell us about your bike</h4>
                                                            <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        {/* <!--Body--> */}
                                                        <div class="modal-body">

                                                            {/* <!-- Default input name --> */}
                                                            <div class="form-group">
                                                                <label for="exampleFormControlSelect1">Mountain Bike or Road Bike?</label>
                                                                <select class="form-control" id="m-or-r">
                                                                    <option hidden>Select One</option>
                                                                    <option>Mountain Bike</option>
                                                                    <option>Road Bike</option>
                                                                </select>
                                                            </div>

                                                            {/* <!-- Default input email --> */}
                                                            <label for="defaultFormSubjectModalEx">Last Date of Work:</label>
                                                            <input type="date" id="last-work" class="form-control form-control-sm"></input>

                                                            <br></br>

                                                            {/* <!-- Default input subject --> */}
                                                            <label for="defaultFormSubjectModalEx">Is it a Children's bike?</label>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" value="" id="ChildorAdult"></input>
                                                                <label class="form-check-label" for="defaultCheck1">
                                                                    Yes
                                                                </label>
                                                            </div>

                                                            <br></br>

                                                            {/* <!-- Default textarea message --> */}
                                                            <label for="defaultFormMessageModalEx">Any other info we need to know?</label>
                                                            <textarea type="text" id="defaultFormMessageModalEx" class="md-textarea form-control" placeholder="Let us know"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>

                                        </div>
                                        {/* END MODAL */}
                                        {/* add a modal once they want to add a bike */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br></br>
        </div>
    );
}

export default Account;