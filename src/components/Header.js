import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Seth and Jalila Got Hitched!</h1>
                <p><strong>The ultimate crossover episode</strong></p>
                <p className="day"><a href="https://drive.google.com/drive/folders/1GldKWRgFOwsaKdT_HD2F-NQEhfwVbsrS?usp=sharing">Get the photo album here</a></p>
            </div>
        </div>
      </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
