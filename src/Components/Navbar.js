import React, {useState, useEffect} from "react";
import axios from "axios";
import img1 from "../Images/Group.png"
import img2 from "../Images/KeazoNBOOKS.png"
import img3 from "../Images/ant-design_search-outlined.png"
import img4 from "../Images/bx_bx-book-heart.png"
import img5 from "../Images/ic_round-notifications-none.png"
import img6 from "../Images/fluent_premium-person-20-regular.png"
import img7 from "../Images/IMG20210528181544.png"



const Navbar = ({setResults, setError, setSelectedItem, setDisplayItem}) => {

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        searchFunc();
    }, []);

    
    const searchFunc = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes",
        {params : {
            q : searchTerm || "Sherlock Byomkesh Feluda",
            maxResults : 40
        }})
        .then((response) => {
            
        setResults(response.data.items);
        setSelectedItem([]);
        setDisplayItem(false);

        localStorage.setItem("searchResults", JSON.stringify(response.data.items));
        })
        .catch((error) => setError(`Something went wrong! Error : ${error}`))
    }

    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="navbar-left-image-container">
                    <img src={img1} alt="img1" />
                </div>
                <div className="navbar-left-image-container">
                    <img src={img2} alt="img2"/>
                </div>
            </div>
            <div className="navbar-middle">
                <div className="searchbar">
                    <div className="searchbar-image-container">
                        <img src={img3} alt="img3"/>
                    </div>
                    <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => (setSearchTerm(e.target.value))}></input>
                </div>
                <div className="search-btn" onClick={searchFunc}>Search</div>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-image-container">
                    <img src={img4} alt="img4" />
                </div>

                <div className="navbar-right-image-container">
                    <img src={img5} alt="img5" />
                </div>

                <div className="navbar-right-image-container">
                    <img src={img6} alt="img6" />
                </div>

                <div className="navbar-right-image-container">
                    <img src={img7} alt="img7" />
                </div>
            </div>
        </div>
    )
}


export default Navbar;