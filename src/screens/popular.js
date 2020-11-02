import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import config from '../config';
import Item from '../components/item';
import OwlCarousel from 'react-owl-carousel2';

export default () => {
    const [populars, setPopulars] = useState([]);
    const carousel = useRef();
    
    useEffect(() =>{
        const fetchData = async () => {
            let result = await axios.get(`${config.base_url}tv/popular`,{params: {api_key: config.apikey}})
            let ten = result.data.results.slice(0,10);
            setPopulars(ten);
        };
        fetchData();
    }, [])

    const options = {
        items: 8,
        nav: true,
        rewind: false,
        autoplay: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 8
            }
        }
        ,dots: false
    };
     
    const events = {
        onDragged: function(event) {
            console.log(event)
        },
        onChanged: function(event) {
            console.log(event)
        }
    };

    return (
        
        <div className="container-fluid" style={{ marginBottom: 190 }} >
            <h3 className="mb-3">Populares</h3>
            <OwlCarousel ref={carousel} options={options} events={events} >
                {populars.map((item, i) => (
                    <Item item={item} key={item.id} propertyDisplay="original_name" />
                ))}
            </OwlCarousel>
        </div>
    )
}