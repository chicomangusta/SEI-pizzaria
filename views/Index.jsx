const React = require('react');
<link rel="stylesheet" href="./css/index.css"></link>;
class Index extends React.Component {
    render() {
         
        return (
          <div>
            <h1>PIZZARIA</h1>
            <nav>
              <a href="/pizzas/new">Build Your Own Pizza</a>
            </nav>

            <ul>
              {this.props.pizza.map((pizza, i) => {
                return (
                  <li>
                    One  { pizza.brook  ? <span> Brooklyn Style     </span> : " " }
                         { pizza.hand   ? <span> Hand Tossed        </span> : " " }  
                         { pizza.crunch ? <span> Crunchy Thin Crust </span> : " " } Pizza 
                         <br />
                   
                    Size: { pizza.small  ? <span> Small   </span> : " "} 
                          { pizza.medium ? <span> Medium  </span> : " "} 
                          { pizza.large  ? <span> Large   </span> : " "} 
                          { pizza.xl     ? <span> X-Large </span> : " "}
                          <br />

                    With: { pizza.pepperoni ? <span> Peperoni     </span> : " "} 
                          { pizza.bacon     ? <span> Bacon        </span> : " "} 
                          { pizza.beef      ? <span> Beef         </span> : " "} 
                          { pizza.salami    ? <span> Salami       </span> : " "}
                          { pizza.chicken   ? <span> Chicken      </span> : " "} 
                          { pizza.catupiry  ? <span> Catupiry     </span> : " "} 
                          { pizza.olives    ? <span> Black Olives </span> : " "}
                          { pizza.onions    ? <span> Onions       </span> : " "}
                          { pizza.tomato    ? <span> Tomatos      </span> : " "} 
                          { pizza.jalapenos ? <span> Jalapenos    </span> : " "} 
                          <br />
                          

                    Is Ready for: { pizza.delivery ? <span> Delivery </span> : " "} 
                          <br />

                    <a href={`/pizzas/${pizza._id}/edit`}>Edit</a>

                    <form action={`/pizzas/${pizza._id}?_method=DELETE`} method="POST">
                      <input type="submit" value="Delete" />
                    </form>
                  </li>
                );
              })}
            </ul>
          </div>
        );
    }
}

module.exports = Index;

