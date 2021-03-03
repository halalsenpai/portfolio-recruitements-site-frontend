import React,{useEffect,useRef,useState} from 'react'

function CBannerWithImages() {
    const [images,setImages] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(()=>shuffleImages(),4000);
        return ()=> { 
            clearInterval(interval.current)
        }
    }, [])
    const shuffleImages = ()=>{
            let indexes = [getRNo(false),getRNo(false),getRNo(false),getRNo(false),,getRNo(false)];
            let currentImages = [...images];
            indexes.forEach(index=>{
                let isUniqueImage = false;  
                while(!isUniqueImage){
                    let randomImage = getRNo();
                    if(currentImages.indexOf(randomImage) === -1 ) {
                        currentImages[index] = randomImage;
                        isUniqueImage = true;
                    }
                }
            });
            setImages(currentImages);
    }
   
    const getRNo = ()=> {
       return Math.floor(Math.random() * 15)+1;
    }
    return (
        <div className="c-banner-with-images">
            <span className="imgs-row">
                <img src={require(`../../../assets/images/ms/ms-${images[0]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[1]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[2]}.png`)} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require(`../../../assets/images/ms/ms-${images[3]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[4]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[5]}.png`)} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require(`../../../assets/images/ms/ms-${images[6]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[7]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[8]}.png`)} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require(`../../../assets/images/ms/ms-${images[9]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[10]}.png`)} att="ms" />
                <img src={require(`../../../assets/images/ms/ms-${images[11]}.png`)} att="ms" />
            </span>
            
        </div>
    )
}

export default CBannerWithImages
