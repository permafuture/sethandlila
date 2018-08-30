import React from 'react'
import Link from 'gatsby-link'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="welcome" className={`${this.props.article === 'welcome' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Welcome</h2>
          <p>With the wedding now past, we’ll continue to maintain this website as a convenient and interactive way to share all the important details with everyone.</p>
          <h3>The wedding photos are now available!</h3> <p> <a href="https://drive.google.com/drive/folders/1GldKWRgFOwsaKdT_HD2F-NQEhfwVbsrS?usp=sharing">Check them out on this shared folder.</a></p>
          <p>
Thank you for your ongoing love and support. We are so excited to share this day with all of our favorite people!</p>          <span className="image main"><img src={"img/ring.jpg"} alt="" /></span>

          {close}
        </article>

        <article id="attire" className={`${this.props.article === 'attire' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Attire</h2>
          <p>We are hoping for a semi-formal shindig, but the event will be held at the old family homestead, so dress accordingly! No need for tuxes and pearls, just bring yourselves and some decent shoes, as the ground can be uneven and dusty. If you feel inclined to fit with the color scheme, we’ll be working primarily in shades of coffee and cream.</p>
          <span className="image main"><img src={"img/coffee.jpg"} alt="" /></span>
          {close}
        </article>

        <article id="food" className={`${this.props.article === 'food' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Food</h2>
          <p>We will host a potluck dinner following the ceremony, so bring your favorite dish! Beer and wine will be greatly appreciated, but we’d like to avoid having liquor at the reception, so leave the flasks at home!</p>
          <span className="image main"><img src={"img/cups.jpg"} alt="" /></span>
          {close}
        </article>


        <article id="photos" className={`${this.props.article === 'photos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Photos</h2>
          <p>We will be having an unplugged ceremony at our wedding. While we fully encourage everyone to bring their phones and cameras, we politely request that all devices be turned off during the ceremony. Once we receive the professional images from our photographer after the wedding, we will be happy to send them to you.</p>
          <span className="image main"><img src={"img/uppercut.jpg"} alt="" /></span>
          {close}
        </article>

        <article id="accommodations" className={`${this.props.article === 'accommodations' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Accommodations</h2>
          <p>Thanks for coming all the way out to see us! For those of you who would like to spend the night, try to arrive early to help the parking situation. We have several rooms rented at the local motel for family and extra bedrooms and floorspace for close friends. Otherwise, feel free to bring a tent and camp out in the expansive yard!</p>
          <span className="image main"><img src={"img/elbow.jpg"} alt="" /></span>
          {close}
        </article>

        <article id="gifts" className={`${this.props.article === 'gifts' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Gifts</h2>
          <p>We are so happy that you’ll be able to join us for our wedding. As many of you know, we live in a small apartment without much storage, and it is already filled with all the things we could ever need to make it a home. While the presence of your company is the only gift we could ever ask for, we will set up a “wishing well” at the ceremony for those interested in offering a gift to mark the occasion.</p>
          <span className="image main"><img src={"img/kick.jpg"} alt="" /></span>
          {close}
        </article>

        <article id="directions" className={`${this.props.article === 'directions' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Directions</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.8810997598475!2d-105.5994554421037!3d34.25461109513784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE1JzE2LjYiTiAxMDXCsDM1JzU0LjEiVw!5e0!3m2!1sen!2sus!4v1528908276372" width="100%" height="300px" frameborder="0"  allowfullscreen></iframe>
          <p>Fuller House <br />
          911 Old Crown St <br />
          Corona, NM 88318 </p>
          <span className="image main"><img src={"img/tree.jpg"} alt="" /></span>
          {close}
        </article>

        <article id="rsvp" className={`${this.props.article === 'rsvp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">RSVP</h2>
          <p>Seats will be reserved for you! Please RSVP by the fourth of July.</p>
          <div>
          <p> Seth:  (505) 252-5788 </p>
          <p> Jalila:  (505) 289-7678</p>
          </div>

          <span className="image main"><img src={"img/laugh.jpg"} alt="" /></span>
          {close}
        </article>


      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
