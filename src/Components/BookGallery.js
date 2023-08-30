import React from "react";

const BookGallery = ({results, setSelectedItem, setDisplayItem, targetRef}) => {


    const handleClick = (e) => {
        showBanner(e);
        scrollToComponent();
    }

    const showBanner = (e) => {

        const searchedItem = JSON.parse(localStorage.getItem("searchResults"));
        const showItem = searchedItem.filter(item => {
            return item.id === e.target.id;
        });

        setSelectedItem(showItem);
        setDisplayItem(true);

    }

    const scrollToComponent = () => {

        const targetElem = targetRef.current;
        if (targetElem === undefined || targetElem === null){
            return;
        }
        
        targetElem.scrollIntoView({
          behavior: 'smooth',
        });
      };

      
    return (
        <div className="book-gallery">
            <div className="results-container">
                {
                    results.map((item) => {
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                        if (thumbnail !== undefined){
                            return <img className="results-image" id={item.id} src={thumbnail} alt="book" onClick={handleClick} />
                        }
                    })

                }
            </div>
        </div>
    )
}

export default BookGallery;