import React from 'react';

function Create(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="login-brand">Share your meme!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <form>
                        <div className="form-group">
                            <label for="imageInputFile">upload your photo</label>
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
                            <small id="fileHelp" className="form-text text-muted">Upload your meme :)</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create;