import React from 'react';

const GeneralContact = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send message</button>

            </form>
            
        </div>
    );
}

export default GeneralContact;
