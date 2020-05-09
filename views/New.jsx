const React = require("react");
<link rel="stylesheet" href="./css/new.css"></link>

class New extends React.Component {
  render() {
    
    return (
      <div>
        <h1>Build Your Own Pizza</h1>

        <h4>CRUST</h4>
        <form action="/pizzas" method="POST">

          <p>
            Brooklyn Style:     <input type="checkbox" name="brook"  /> <br />
            Hand Tossed:        <input type="checkbox" name="hand" />   <br />
            Crunchy Thin Crust: <input type="checkbox" name="crunch" />
          </p>
          <br />

          <h4>SIZES</h4>
          <p>
            Small:   <input type="checkbox" name="small" />    <br />
            Medium:  <input type="checkbox" name="medium" />   <br />
            Large:   <input type="checkbox" name="large" />    <br />
            X-Large: <input type="checkbox" name="xl" />       <br />
          </p>
          <br />

          <h4>TOPPINGS</h4>
          <h5>Meats</h5>
          <p>
            Pepperoni: <input type="checkbox" name="pepperoni" />
            Bacon:    <input type="checkbox" name="bacon" />
            Beef:     <input type="checkbox" name="beef" />
            Salami:   <input type="checkbox" name="salami" />
            Chicken:  <input type="checkbox" name="chicken" />
            <br />
            <h5>Non-Meats</h5>
            
            Catupiry:     <input type="checkbox" name="catupiry" />
            Black Olives: <input type="checkbox" name="olives" />
            Onions:       <input type="checkbox" name="onions" />
            Tomatos:      <input type="checkbox" name="tomatos" />
            Jalapenos:    <input type="checkbox" name="jalapenos" />
          </p>
          <br/>

          <h4>ORDER TYPE</h4>
          <p>
            Delivery: <input type="checkbox" name="delivery" />        
            <br />
            <br />
            <input type="submit" name="" value="Add to Order" />
          </p>
        </form>
      </div>
    );
  }
}

module.exports = New;
