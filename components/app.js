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
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"passport", link: null, selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"national tax file number", link: "https://www.ato.gov.au/Individuals/Tax-file-number/", selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"international driving license", link: null, selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"australian address", link: null, selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"bank account", link: null, selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"medicare card", link: null, selected:false},
  {category:"documents", toggleImg:"fa fa-address-card-o fa-5x", content:"visa", link: null, selected:false},

  {category:"work", toggleImg:'fa fa-truck fa-5x', content:"certificates", link: null, selected:false},
  {category:"work", toggleImg:'fa fa-truck fa-5x', content:"farm work", link: null, selected:false},
  {category:"work", toggleImg:'fa fa-truck fa-5x', content:"construction work", link: null, selected:false},
  {category:"work", toggleImg:'fa fa-truck fa-5x', content:"good sites", link: null, selected:false},
  {category:"work", toggleImg:'fa fa-truck fa-5x', content:"salary", link: null, selected:false},

  {category:"budget", toggleImg:'fa fa-money fa-5x', content:"by goal", link: null, selected:false},
  {category:"budget", toggleImg:'fa fa-money fa-5x', content:"by duration of stay", link: null, selected:false},
  {category:"budget", toggleImg:'fa fa-money fa-5x', content:"reduce your costs", link: null, selected:false},
  {category:"budget", toggleImg:'fa fa-money fa-5x', content:"general cost of living", link: null, selected:false},
  {category:"budget", toggleImg:'fa fa-money fa-5x', content:"comparisons aus/other countries", link: null, selected:false},

  {category:"bestPlaces", toggleImg:'fa fa-thumbs-o-up fa-5x', content:"wildlife", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'fa fa-thumbs-o-up fa-5x', content:"best beaches", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'fa fa-thumbs-o-up fa-5x', content:"diving or snokeling", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'fa fa-thumbs-o-up fa-5x', content:"best cities", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'fa fa-thumbs-o-up fa-5x', content:"must to see by city", link: null, selected:false},

  {category:"souvenir", toggleImg:'fa fa-camera fa-5x', content:"make your journey memorable", link: null, selected:false},
  {category:"souvenir", toggleImg:'fa fa-camera fa-5x', content:"gopro", link: null, selected:false},
  {category:"souvenir", toggleImg:'fa fa-camera fa-5x', content:"small or big camera", link: null, selected:false},
  {category:"souvenir", toggleImg:'fa fa-camera fa-5x', content:"bring a laptop?", link: null, selected:false},
  {category:"souvenir", toggleImg:'fa fa-camera fa-5x', content:"habits to have", link: null, selected:false},

  {category:"bag", toggleImg:'fa fa-suitcase fa-5x', content:"clothes", link: null, selected:false},
  {category:"bag", toggleImg:'fa fa-suitcase fa-5x', content:"electronics", link: null, selected:false},
  {category:"bag", toggleImg:'fa fa-suitcase fa-5x', content:"documents", link: null, selected:false},
  {category:"bag", toggleImg:'fa fa-suitcase fa-5x', content:"healthcare products", link: null, selected:false},
  {category:"bag", toggleImg:'fa fa-suitcase fa-5x', content:"good to have", link: null, selected:false},
]
module.exports = App;
