import { useState } from 'react';
import './Search-Section.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cards from '../Cards/Cards';

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
                    <div className='form__container'>
                        <select value={selectedDay} onChange={handleDayChange} id="daySelect" className="form__input">
                            <option className="form__option" value="Day">Select a Day</option>
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
            <Cards deals={deals} formatTime={formatTime} />
        </>
    );
}
