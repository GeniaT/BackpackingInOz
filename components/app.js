var React = require('react');
var Header = require('./header');
var Main = require('./main');
var Footer = require('./footer');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main data={appData}/>
        <Footer />
      </div>
    )
  }
}

var appData = [
  {category:"documents", toggleImg:'../images/documents.png', content:"Dcontent1", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"Dcontent2", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"Dcontent3", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"Dcontent4", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"Dcontent5", link: null, selected:false},

  {category:"work", toggleImg:'../images/work.png', content:"Wcontent1", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"Wcontent2", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"Wcontent3", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"Wcontent4", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"Wcontent5", link: null, selected:false},

  {category:"budget", toggleImg:'../images/budget.png', content:"BUcontent1", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"BUcontent2", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"BUcontent3", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"BUcontent4", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"BUcontent5", link: null, selected:false},

  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"BEcontent1", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"BEcontent2", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"BEcontent3", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"BEcontent4", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"BEcontent5", link: null, selected:false},

  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"Scontent1", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"Scontent2", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"Scontent3", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"Scontent4", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"Scontent5", link: null, selected:false},

  {category:"bag", toggleImg:'../images/bag.png', content:"BAcontent1", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"BAcontent2", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"BAcontent3", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"BAcontent4", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"BAcontent5", link: null, selected:false},
]
module.exports = App;
