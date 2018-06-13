import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Seth and Jalila Get Hitched!</h1>
                <p><strong>The ultimate crossover episode</strong></p>
                <p className="day">August 8th, 2018 @ 4PM</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('welcome')}}>Welcome</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('attire')}}>Attire</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('food')}}>Food</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('photos')}}>Photos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('accommodations')}}>Accommodations</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gifts')}}>Gifts</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('directions')}}>Directions</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('rsvp')}}>RSVP</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
