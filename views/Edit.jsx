const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, brook, hand, delivery, crunch, small, medium, large, xl, pepperoni, bacon, beef, salami, chicken, catupiry, olives, onions, tomato, jalapenos } = this.props.pizza;
        return (
          <div>
            <h1>Edit Your Order</h1>
            <form action={`/pizzas/${_id}?_method=PUT`} method="POST">
            {/* <form action={`/pizzas/${this.props.pizza._id}?_method=PUT`} method="POST"> */}
              


            <h4>CRUST</h4>
              Brooklyn Style:     <input type="checkbox" name="brook"  checked={brook} />  <br />
              Hand Tossed:        <input type="checkbox" name="hand"   checked={hand} />   <br />
              Crunchy Thin Crust: <input type="checkbox" name="crunch" checked={crunch} /> <br />

            <h4>SIZES</h4>
              Small:     <input type="checkbox" name="samll"   checked={small} />  <br />
              Medium:    <input type="checkbox" name="medium"  checked={medium} /> <br />
              Large:     <input type="checkbox" name="large"   checked={large} />  <br />
              X-Large:   <input type="checkbox" name="xl"      checked={xl} />     <br />

            <h4>TOPPINGS</h4>
            <h5>Meats</h5>
              Pepperoni:  <input type="checkbox" name="pepperoni" checked={pepperoni} />
              Bacon:      <input type="checkbox" name="bacon"     checked={bacon} />
              Beef:       <input type="checkbox" name="beef"      checked={beef} />
              Salami:     <input type="checkbox" name="salami"    checked={salami} />
              Chicken:    <input type="checkbox" name="chicken"   checked={chicken} />
              <br/>
            <h5>Non-Meats</h5>  
              Catupiry:      <input type="checkbox" name="catupiry"  checked={catupiry} />
              Black Olives:  <input type="checkbox" name="olives"    checked={olives} />
              Onions:        <input type="checkbox" name="onions"    checked={onions} />
              Tomatos:       <input type="checkbox" name="tomato"    checked={tomato} />
              Jalapenos:     <input type="checkbox" name="jalapenos" checked={jalapenos} />
              <br/>

            <h4>ORDER TYPE</h4>  
              Delivery: <input type="checkbox" name="delivery" checked={delivery} /> <br />
             
              <input type="submit" name="" value="Update Your Order" />
            </form>
          </div>
        );
    }
}

module.exports = Edit;