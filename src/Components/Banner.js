import React, {useRef} from "react";

const Banner = ({selectedItem, displayItem, setTargetRef}) => {

    let getTargetElem = useRef({});

    
    if (!displayItem){
        return null;
    }
    
    setTargetRef(getTargetElem);

    let thumbnail = selectedItem[0].volumeInfo.imageLinks.thumbnail;
    let title = selectedItem[0].volumeInfo.title;
    let publishedDate = selectedItem[0].volumeInfo.publishedDate;
    let authors = selectedItem[0].volumeInfo.authors && selectedItem[0].volumeInfo.authors.join(", ");
    let description = selectedItem[0].volumeInfo.description;
    let averageRating = selectedItem[0].volumeInfo.averageRating;
    let ratingsCount = selectedItem[0].volumeInfo.ratingsCount;
    let publisher = selectedItem[0].volumeInfo.publisher;
    let language = selectedItem[0].volumeInfo.language;

    const goToReadNow = () => {
        window.open(`${selectedItem[0].volumeInfo.previewLink}`, "_blank");
    }

    const goToMoreInfo = () => {
        window.open(`${selectedItem[0].volumeInfo.infoLink}`, "_blank");
    }
    
    return (
        <div ref={getTargetElem} className="banner">
            <div className="banner-container">
                <div className="banner-left">
                    <img src={thumbnail !== undefined ? thumbnail : "NA"} alt="book" />
                </div>
                <div className="banner-right">
                    <div className="first">
                        <div className="title">{title !== undefined ? title : "NA"}</div>
                        <div className="published-on"><span>Published On :</span><span>{publishedDate !== undefined ? publishedDate : "NA"}</span></div>
                    </div>
                    <div className="second">{authors !== undefined ? authors : "NA"}</div>
                    <div className="third">{description !== undefined ? description : "NA"}</div>
                    <div className="fourth">
                        <div><span className="caption">Avg Rating :</span><span className="caption-value">{averageRating !== undefined ? averageRating : "NA"}</span></div>
                        <div><span className="caption">Rating Count :</span><span className="caption-value">{ratingsCount !== undefined ? ratingsCount : "NA"}</span></div>
                        <div><span className="caption">Publisher :</span><span className="caption-value">{publisher !== undefined ? publisher : "NA"}</span></div>
                        <div><span className="caption">Language :</span><span className="caption-value">{language !== undefined ? language : "NA"}</span></div>
                    </div>
                    <div className="fifth">
                        <div className="utility-btn" onClick={goToReadNow}>Read Now</div>
                        <div className="utility-btn" onClick={goToMoreInfo}>More Info</div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Banner;