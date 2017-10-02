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
  {category:"documents", toggleImg:'../images/documents.png', content:"passport", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"national tax file number", link: "https://www.ato.gov.au/Individuals/Tax-file-number/", selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"international driving license", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"australian address", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"bank account", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"medicare card", link: null, selected:false},
  {category:"documents", toggleImg:'../images/documents.png', content:"visa", link: null, selected:false},

  {category:"work", toggleImg:'../images/work.png', content:"certificates", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"farm work", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"construction work", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"good sites", link: null, selected:false},
  {category:"work", toggleImg:'../images/work.png', content:"salary", link: null, selected:false},

  {category:"budget", toggleImg:'../images/budget.png', content:"by goal", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"by duration of stay", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"reduce your costs", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"general cost of living", link: null, selected:false},
  {category:"budget", toggleImg:'../images/budget.png', content:"comparisons aus/other countries", link: null, selected:false},

  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"wildlife", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"best beaches", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"diving or snokeling", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"best cities", link: null, selected:false},
  {category:"bestPlaces", toggleImg:'../images/bestplaces.jpg', content:"must to see by city", link: null, selected:false},

  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"make your journey memorable", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"gopro", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"small or big camera", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"bring a laptop?", link: null, selected:false},
  {category:"souvenir", toggleImg:'../images/souvenirs.png', content:"habits to have", link: null, selected:false},

  {category:"bag", toggleImg:'../images/bag.png', content:"clothes", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"electronics", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"documents", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"healthcare products", link: null, selected:false},
  {category:"bag", toggleImg:'../images/bag.png', content:"good to have", link: null, selected:false},
]
module.exports = App;
