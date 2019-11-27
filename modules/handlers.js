// metoda createElement = tworzymy obiekt
//tworzymy element dzieki klasie div, propsy {}= wlasciwosci danego el, dziecko el = to co ma byc wewnatrz '',
var element = React.createElement('div', {}, 'Hello world!');

// renderowanie w drzewie DOM jesli element jest gotowy
//parametry renderowania : element reactu ktory tworzymy, i element dom do ktorego przypinamy dany element, czyli ID = app.
ReactDOM.render(element, document.getElementById('app'));

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmow'),
        React.CreateElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );
