import logo from './logo.svg';
import './App.css';

function App(prop) {
  return (
    <div className="parson-info">
      <h2> CV of {prop.name}</h2>
      <table>
        <caption>Parson Information</caption>
        <tr>
          <td>Name : </td>
          <td>{prop.name}</td>
        </tr>
        <tr>
          <td>Country : </td>
          <td> {prop.country}</td>
        </tr>
        <tr>
          <td>City : </td>
          <td>{prop.city}</td>
        </tr>
        <tr>
          <td> Phone Number : </td>
          <td>{prop.number}</td>
        </tr>
        <tr>
          <td>E-mail : </td>
          <td> {prop.email}</td>
        </tr>
        <tr>
          <td>Facebook : </td>
          <td>{prop.facebook}</td>
        </tr>
        <tr>
          <td>GitHub : </td>
          <td> {prop.github}</td>
        </tr>
        <tr>
          <td> Skills : </td>
          <td>{prop.skills.map(skill => ( <li className='skill'>{skill}</li>) 
            )}</td>
        </tr>
        <tr>
          <td>Interests</td>
          <td>{prop.interests.map(interest => (<li className='skill'>{interest}</li>))}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
