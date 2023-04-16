/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
  // Create the list of Credit items
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {  // Extract "id", "amount", "description" and "date" properties of each credits JSON array element
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    const amount = e.target.elements.amount.value;
    console.log(description, amount);
    console.log(props.addCredit);
    props.addCredit(description, amount);
    e.target.reset();
  }

  // Render the list of Credit items and a form to input new Credit item
  return (
    <div> 
      <h1>Credits</h1>

      {creditsView()}
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Credit</button>
      </form>

      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;