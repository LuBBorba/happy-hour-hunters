import { useState } from 'react';
import './Search-Section.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Search() {

    const [selectedDay, setSelectedDay] = useState('');
    const [deals, setDeals] = useState([]);

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value)
    }

    const handleSearchClick = async ()=> {
       try {
        const response = await axios.get(`http://localhost:8080/deals/${selectedDay}`);
        console.log(response);
        if (Array.isArray(response.data)){setDeals(response.data);}
        else {setDeals([])
            console.erro('unexpected response')
        }
        
        
       }
       catch (error){
        console.error('Error fetching deals',error);
       }
    }

    return (
        <section className="search" >
            <h1 className="search__header">You`re in for a treat! Find out the best deals for the happiest time of the day</h1>
            <form className="form" id="form" onSubmit={(e) => e.preventDefault()}>
                <div className='form__box'>
                    <label className="form__label" htmlFor="daySelect">Select a Day</label>
                </div>
                <div className='form__container'>
                    <select value={selectedDay} onChange={handleDayChange} id="daySelect" className="form__input">
                        <option className="form__option" value="Monday">Monday</option>
                        <option className="form__option" value="Tuesday">Tuesday</option>
                        <option className="form__option" value="Wednesday">Wednesday</option>
                        <option className="form__option" value="Thursday">Thursday</option>
                        <option className="form__option" value="Friday">Friday</option>
                        <option className="form__option" value="Saturday">Saturday</option>
                        <option className="form__option" value="Sunday">Sunday</option>
                    </select>
                    <button onClick={handleSearchClick} className="form__button" type="button" >Search</button>
                </div>
            </form>
            <Link to="/deals"><div className='div' >
            {/* {deals.length>0? <Cards deals={deals}/>:(<p>Select a Day to see Deals</p>)} */}
            {deals.map((deal)=> (
                
                <div key={deal.place_id} className="card__place">
                    <h2 >{deal.place_name}</h2>
                    <p>Address: {deal.address}</p>
                    <p>Contact: {deal.contact_info}</p>
                    <p>Website:{" "} 
                    <a href={deal.website} target='_blank' rel='noreferrer noopener'>{deal.website}</a></p>
                    <p>Day of Week: {deal.day_of_week}</p>
                    <p>Time: {deal.start_time} - {deal.end_time}</p>
                    <div>
                        <h3>Item</h3>
                        <ul>
                            {deal.item.map((item,index) => (
                                <li key={index}>{item.price} ({item.type}) - {item.product} </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
            )

            )}  
            </div></Link>
                    

        </section>
    )
}