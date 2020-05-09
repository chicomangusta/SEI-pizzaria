const React = require('react');


class Show extends React.Component {
    render() {
        const { brook, hand, crunch, small, medium, large, xl, pepperoni, bacon, beef, salami, chicken, catupiry, olives, onions, tomato, jalapenos, delivery } = this.props.pizza;
        return (
          
          
          <div>   
            <h1>PIZZARIA</h1><br/><br/>      
            <h3>Review Your Order:</h3> <br />
            <p>One {brook} {hand} {crunch}</p>
            <p>Size: {small} {medium} {large} {xl}</p>
            <p>With: {pepperoni} {bacon} {beef} {salami} {chicken} {catupiry} {olives} {onions} {tomato} {jalapenos}</p>
            <p>Is ready for: {delivery}</p>
          </div>
        )   
    }
}




module.exports = Show;
