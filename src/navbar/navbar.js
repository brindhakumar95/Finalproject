import React from 'react';
class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <nav style={{ marginBottom: "0" }} inverse className="fixed-top collapseOnSelect nav-bar" class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div class="container-fluid" >
                        <div class="navbar-header">
                            <nav class="navbar-header">
                                <img src="/images/logo.png" height="65" alt="Company Name"></img> </nav>
                        </div>
                        <ul class="nav navbar-nav">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary">Upload Media</button>
                                <button type="button" class="btn btn-secondary">My Media</button>
                                <button type="button" class="btn btn-secondary">Followers/followings</button>
                            </div >
                        </ul>
                        <nav>
                            <li class="nav-item active">
                                <div style={{ margintop: "10px" }} class="form-group">
                                    <div class="col-sm-12 controls center-text">
                                        <a id="btn-login" href="#" class="btn btn-block btn-success">Account</a>
                                    </div>
                                </div></li>
                        </nav></div>
                </nav>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <ul class="nav navbar-nav navbar-right">
                        <li><img src="/images/profile.jpg" height="65" alt="Company Name"></img></li>
                        <li><h1 style={{ color: 'white' }}>  Hello Brindha!!!!</h1></li>
                    </ul >
                    <ol class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{position: "absolute",right: "0px"}}>
                            <li class="nav-item">
                                <a class="nav-link active" id="showall-tab" data-toggle="pill" href="#showall" role="tab" aria-controls="showall" aria-selected="true">Media</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Cars-tab" data-toggle="pill" href="#Cars" role="tab" aria-controls="Cars" aria-selected="false">Video</a>
                            </li>
                            </ol>
                </nav>

            </div>


        );
    }
}

export default NavBar;