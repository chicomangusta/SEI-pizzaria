const React = require('react');

class Index extends React.Component {
    render() {
         
        return (
          <div>
            <h1>PIZZARIA</h1>
                <nav>
                  <a href="/pizzas/new">Build Your Own Pizza</a>
                </nav>

            <ul>
              {
                this.props.pizza.map((pizza, i) => {
                return (
                  <li>
                    One {pizza.brook} {pizza.hand} {pizza.crunch} Pizza <br />
                    Size: {pizza.small} {pizza.medium} {pizza.large} {pizza.xl} <br />
                    With: {pizza.pepperoni} {pizza.beef} {pizza.salami} {pizza.chicken} {pizza.catupiry} {pizza.olives} {pizza.tomato} {pizza.jalapenos} {pizza.bacon} <br />
                    Is Ready for: {pizza.delivery} <br />
                    
                    <a href={`/pizzas/${pizza._id}/edit`}>Edit</a>
                    
                    <form action={`/pizzas/${pizza._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="Delete" />

                    </form>

                      

                    
                  </li>
                );
               })
              }
            </ul>
          </div>
        );
    }
}

module.exports = Index;

