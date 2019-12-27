import React from 'react'

export default function FirstForm() {
    return (
        <div className="forms form__first">
            <form className="form--1">
                <input type="text" className="form--input" placeholder="First Name"/>
                <input type="text" className="form--input" placeholder="Last Name"/>

                <button className="btn btn--first">Next &#8594;</button>
            </form>
        </div>
    )
}
