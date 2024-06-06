import { useState } from 'react';
import './Search-Section.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function formatTime(timeString) {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    return date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
}

export default function Search() {
    const [selectedDay, setSelectedDay] = useState('');
    const [deals, setDeals] = useState([]);
    const navigate = useNavigate();

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleSearchClick = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/deals/${selectedDay}`);
            console.log(response);
            if (Array.isArray(response.data)) {
                setDeals(response.data);
                navigate('/deals');
            } else {
                setDeals([]);
                console.error('Unexpected response');
            }
        } catch (error) {
            console.error('Error fetching deals', error);
        }
    };

    return (
        <>
        <section className="search">
            <form className="form" id="form" onSubmit={(e) => e.preventDefault()}>
                <div className='form__box'>
                    <label className="form__label" htmlFor="daySelect">Select a Day</label>
                </div>
                <div className='form__container'>
                    <select value={selectedDay} onChange={handleDayChange} id="daySelect" className="form__input">
                        <option className="form__option" value="Day">Day</option>
                        <option className="form__option" value="Monday">Monday</option>
                        <option className="form__option" value="Tuesday">Tuesday</option>
                        <option className="form__option" value="Wednesday">Wednesday</option>
                        <option className="form__option" value="Thursday">Thursday</option>
                        <option className="form__option" value="Friday">Friday</option>
                        <option className="form__option" value="Saturday">Saturday</option>
                        <option className="form__option" value="Sunday">Sunday</option>
                    </select>
                    <button onClick={handleSearchClick} className="form__button" type="button">Search</button>
                </div>
            </form>
            </section>
            <div className='card-container'>
                {deals.map((deal) => (
                    <div key={deal.place_id} className="card">
                        <h2 className='card__place'>{deal.place_name}</h2>
                        <h3 className='card__title'>Address:</h3>
                        <p className='card__details'> {deal.address}</p>
                        <h3 className='card__title'>Contact:</h3>
                        <p className='card__details'>Phone: {deal.contact_info}</p>
                        <p className='card__details'>Website: <a href={deal.website} target='_blank' rel='noreferrer noopener'>{deal.website}</a></p>
                        <h3 className='card__title'>Days:</h3>
                        <p className='card__details'>{deal.day_of_week}</p>
                        <h3 className='card__title'>Time: </h3>
                        <p className='card__details'>{formatTime(deal.start_time)} - {formatTime(deal.end_time)}</p>
                        <div>
                            {deal.item.some(item => item.type === 'food') && (
                                <>
                                    <h3 className='card__title'>Food</h3>
                                    <ul>
                                        {deal.item.filter(item => item.type === 'food').map((item, index) => (
                                            <li key={index} className='card__details'>{item.price} - {item.product}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {deal.item.some(item => item.type === 'drink') && (
                                <>
                                    <h3 className='card__title'>Drinks</h3>
                                    <ul>
                                        {deal.item.filter(item => item.type === 'drink').map((item, index) => (
                                            <li key={index} className='card__details'>{item.price} - {item.product}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>
        </>
    );
}