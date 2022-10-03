
import Searchbar from "./Searchbar/Searchbar";
import { Audio } from 'react-loader-spinner';
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/loadder";
import { searchPixabayAPI } from "./Fetch/Fetch";
import Modal from "./Modal/modal";
import { useState, useEffect } from "react";

function App()  {
  const [bigImagePath, setbigImagePath] = useState("");
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState([]);
  const [error, setError] = useState(null); 
  const [search, setSearch] = useState(""); 
 
 
  useEffect(() => {
 const fetchImages = async () =>{
   
   setLoader(true);
   
      try {
        const data = await searchPixabayAPI(search, page);
       setHits((image) => {
         return  [...image, ...data.hits]
        
        })
      } catch (error) {
        setError(error)
      }
      finally {
        setLoader(false);
      }
  }

    if (search) {
       fetchImages();
    }
  },[page,search])


 const onSearch = search => {
  
   setHits([]);
   setSearch(search);
      setPage(1)
  } 

  
 const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
 }
  
  const toggleModal = (path) => {
    setbigImagePath(path)
  }
 
 
    return (
      <div>
        <Searchbar onSearch={onSearch} />
        {bigImagePath && (<Modal onClick={toggleModal} path={bigImagePath}> </Modal>)}
        {error && <p>!!!</p>}
  <ImageGallery image={hits} toggleModal={toggleModal} />
         {loader && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass />}
        {hits.length > 0 && <Loader click={loadMore} />}
      </div>
    );
  
};
  
export default App;
